import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import zlib from "zlib";

// Verify admin credentials
function isAuthorized(request: Request): boolean {
  const username = request.headers.get("x-admin-username");
  const password = request.headers.get("x-admin-password");
  return username === "admin" && password === "OmSupport2026!";
}

const isVercel = process.env.VERCEL === "1" || !!process.env.VERCEL;
const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;
const IMMANUEL_KEY = "4eshqha5";

enum StorageDriver {
  VercelKV = "VercelKV",
  ImmanuelKV = "ImmanuelKV",
  Filesystem = "Filesystem",
}

function getStorageDriver(): StorageDriver {
  if (KV_URL && KV_TOKEN) {
    return StorageDriver.VercelKV;
  }
  if (isVercel) {
    return StorageDriver.ImmanuelKV;
  }
  return StorageDriver.Filesystem;
}

async function getSubmissionsPath(): Promise<string> {
  const localPath = path.join(process.cwd(), "src/data/submissions.json");
  if (!isVercel) {
    return localPath;
  }
  
  const tempPath = path.join("/tmp", "submissions.json");
  try {
    await fs.access(tempPath);
  } catch {
    // Seeding temp file from local bundled file
    try {
      const content = await fs.readFile(localPath, "utf8");
      await fs.mkdir(path.dirname(tempPath), { recursive: true });
      await fs.writeFile(tempPath, content, "utf8");
    } catch (err) {
      console.error("Error seeding temp path:", err);
    }
  }
  return tempPath;
}

async function getSubmissions(): Promise<any[]> {
  const driver = getStorageDriver();

  // 1. Vercel KV Driver
  if (driver === StorageDriver.VercelKV) {
    try {
      const response = await fetch(`${KV_URL}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(["GET", "submissions"]),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Vercel KV read failed with status ${response.status}`);
      }
      const data = await response.json();
      if (data.result) {
        return JSON.parse(data.result);
      } else {
        // Seed database with default data
        try {
          const localPath = path.join(process.cwd(), "src/data/submissions.json");
          const content = await fs.readFile(localPath, "utf8");
          const defaultSubmissions = JSON.parse(content);
          await saveSubmissions(defaultSubmissions);
          return defaultSubmissions;
        } catch {
          return [];
        }
      }
    } catch (err) {
      console.error("Vercel KV get error:", err);
      throw err; // Fail-fast: do not fall back to filesystem
    }
  }

  // 2. Immanuel KV Driver (Cloud fallback)
  if (driver === StorageDriver.ImmanuelKV) {
    try {
      // 2.1 Fetch metadata first
      const metaUrl = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${IMMANUEL_KEY}/submissions_meta`;
      const metaResponse = await fetch(metaUrl, { cache: "no-store" });
      if (!metaResponse.ok) {
        throw new Error(`Immanuel KV metadata read failed with status ${metaResponse.status}`);
      }
      const metaText = await metaResponse.json();

      if (metaText && metaText !== "") {
        // We have chunked metadata, fetch chunks
        const meta = JSON.parse(metaText);
        const chunksCount = meta.chunksCount;
        
        const chunkPromises = Array.from({ length: chunksCount }, async (_, index) => {
          const url = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${IMMANUEL_KEY}/submissions_chunk_${index}`;
          const response = await fetch(url, { cache: "no-store" });
          if (!response.ok) {
            throw new Error(`Failed to fetch chunk ${index}`);
          }
          const rawText = await response.json();
          return rawText || "";
        });

        const chunks = await Promise.all(chunkPromises);
        const fullHex = chunks.join("");
        if (!fullHex) return [];

        const decompressed = zlib.inflateSync(Buffer.from(fullHex, 'hex')).toString('utf8');
        return JSON.parse(decompressed);
      } else {
        // 2.2 No metadata. Try legacy read of single key "submissions" (backward compatibility)
        const legacyUrl = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${IMMANUEL_KEY}/submissions`;
        const legacyResponse = await fetch(legacyUrl, { cache: "no-store" });
        if (legacyResponse.ok) {
          const rawText = await legacyResponse.json();
          if (rawText && rawText !== "") {
            // Robust parsing of legacy data (raw JSON array or hex-encoded JSON)
            try {
              return JSON.parse(rawText);
            } catch {
              try {
                const decoded = Buffer.from(rawText, 'hex').toString('utf8');
                return JSON.parse(decoded);
              } catch {}
            }
          }
        }

        // 2.3 Seed database with default data
        try {
          const localPath = path.join(process.cwd(), "src/data/submissions.json");
          const content = await fs.readFile(localPath, "utf8");
          const defaultSubmissions = JSON.parse(content);
          await saveSubmissions(defaultSubmissions);
          return defaultSubmissions;
        } catch {
          return [];
        }
      }
    } catch (err) {
      console.error("Immanuel KV get error:", err);
      throw err; // Fail-fast: do not fall back to filesystem
    }
  }

  // 3. Local Filesystem Driver
  const filePath = await getSubmissionsPath();
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (err) {
    return [];
  }
}

async function saveSubmissions(submissions: any[]): Promise<boolean> {
  const driver = getStorageDriver();

  // 1. Vercel KV Driver
  if (driver === StorageDriver.VercelKV) {
    try {
      const response = await fetch(`${KV_URL}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(["SET", "submissions", JSON.stringify(submissions)]),
      });
      return response.ok;
    } catch (err) {
      console.error("Vercel KV save error:", err);
      return false;
    }
  }

  // 2. Immanuel KV Driver
  if (driver === StorageDriver.ImmanuelKV) {
    try {
      const jsonStr = JSON.stringify(submissions);
      const compressedHex = zlib.deflateSync(Buffer.from(jsonStr, 'utf8')).toString('hex');

      const chunkSize = 800; // Under 1024 char limit and 260 segment limit
      const chunks: string[] = [];
      for (let i = 0; i < compressedHex.length; i += chunkSize) {
        chunks.push(compressedHex.substring(i, i + chunkSize));
      }

      // 2.1 Write all chunks in parallel using query parameters
      const writePromises = chunks.map(async (chunk, index) => {
        const url = `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue?appKey=${IMMANUEL_KEY}&key=submissions_chunk_${index}&value=${chunk}`;
        const response = await fetch(url, { method: "POST" });
        if (!response.ok) {
          throw new Error(`Failed to write chunk ${index}`);
        }
        const resVal = await response.text();
        return resVal === "true" || resVal === "true\r\n";
      });

      await Promise.all(writePromises);

      // 2.2 Fetch current metadata to check if we need to clean up old excess chunks
      let prevChunksCount = 0;
      try {
        const metaUrl = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${IMMANUEL_KEY}/submissions_meta`;
        const metaResponse = await fetch(metaUrl, { cache: "no-store" });
        if (metaResponse.ok) {
          const metaText = await metaResponse.json();
          if (metaText && metaText !== "") {
            const meta = JSON.parse(metaText);
            prevChunksCount = meta.chunksCount || 0;
          }
        }
      } catch {}

      // 2.3 Write new metadata
      const meta = JSON.stringify({ chunksCount: chunks.length, updatedAt: new Date().toISOString() });
      const metaUrl = `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue?appKey=${IMMANUEL_KEY}&key=submissions_meta&value=${encodeURIComponent(meta)}`;
      const metaResponse = await fetch(metaUrl, { method: "POST" });
      if (!metaResponse.ok) return false;

      // 2.4 If we have fewer chunks than before, clean up obsolete keys
      if (prevChunksCount > chunks.length) {
        const cleanupPromises = Array.from({ length: prevChunksCount - chunks.length }, async (_, i) => {
          const index = chunks.length + i;
          const url = `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue?appKey=${IMMANUEL_KEY}&key=submissions_chunk_${index}&value=`;
          await fetch(url, { method: "POST" });
        });
        await Promise.all(cleanupPromises);
      }

      return true;
    } catch (err) {
      console.error("Immanuel KV save error:", err);
      return false;
    }
  }

  // 3. Local Filesystem Driver
  const filePath = await getSubmissionsPath();
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Filesystem save error:", err);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, businessType, message } = body;

    // Validate request body
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const newSubmission = {
      id: Date.now().toString(),
      name,
      phone,
      service,
      businessType: businessType || "Not Specified",
      message: message || "No message provided",
      status: "Pending", // Default action status
      createdAt: new Date().toISOString(),
    };

    const submissions = await getSubmissions();
    submissions.push(newSubmission);

    const saved = await saveSubmissions(submissions);
    if (!saved) {
      return NextResponse.json(
        { error: "Failed to write to submissions database." },
        { status: 500 }
      );
    }

    // Output secure mock database log
    console.log("Master Database Sync: Client securely logged to database:", newSubmission);

    return NextResponse.json({ success: true, submission: newSubmission });
  } catch (error: any) {
    console.error("Database submission error:", error);
    return NextResponse.json(
      { error: "Internal Server Error occurred while writing to database." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    // Check credentials
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
    }

    const submissions = await getSubmissions();
    // Return submissions in reverse order so newest are on top
    return NextResponse.json([...submissions].reverse());
  } catch (error) {
    console.error("Database read error:", error);
    return NextResponse.json(
      { error: "Failed to read data from database." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    // Check credentials
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
    }

    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "ID and status are required." },
        { status: 400 }
      );
    }

    const submissions = await getSubmissions();
    const index = submissions.findIndex((sub: any) => sub.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: "Submission not found." },
        { status: 404 }
      );
    }

    // Update status
    submissions[index].status = status;

    const saved = await saveSubmissions(submissions);
    if (!saved) {
      return NextResponse.json(
        { error: "Failed to update submissions database." },
        { status: 500 }
      );
    }

    console.log(`Master Database Update: Submission ${id} status updated to ${status}`);

    return NextResponse.json({ success: true, submission: submissions[index] });
  } catch (error) {
    console.error("Database update error:", error);
    return NextResponse.json(
      { error: "Failed to update submission status." },
      { status: 500 }
    );
  }
}

