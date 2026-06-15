import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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
  // 1. Vercel KV Primary
  if (KV_URL && KV_TOKEN) {
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
      if (response.ok) {
        const data = await response.json();
        if (data.result) {
          return JSON.parse(data.result);
        }
      }
    } catch (err) {
      console.error("Vercel KV read error:", err);
    }
  }

  // 2. Immanuel KV Secondary Fallback (Shared serverless cloud)
  if (isVercel) {
    try {
      const response = await fetch(
        `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${IMMANUEL_KEY}/submissions`,
        { cache: "no-store" }
      );
      if (response.ok) {
        const rawText = await response.json();
        if (rawText && rawText !== "") {
          return JSON.parse(rawText);
        }
      }
    } catch (err) {
      console.error("Immanuel KV read error:", err);
    }
  }

  // 3. Local Filesystem Tertiary Fallback
  const filePath = await getSubmissionsPath();
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (err) {
    return [];
  }
}

async function saveSubmissions(submissions: any[]): Promise<boolean> {
  // 1. Vercel KV Primary
  if (KV_URL && KV_TOKEN) {
    try {
      const response = await fetch(`${KV_URL}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(["SET", "submissions", JSON.stringify(submissions)]),
      });
      if (response.ok) {
        return true;
      }
    } catch (err) {
      console.error("Vercel KV write error:", err);
    }
  }

  // 2. Immanuel KV Secondary Fallback
  if (isVercel) {
    try {
      const encoded = encodeURIComponent(JSON.stringify(submissions));
      if (encoded.length < 6000) {
        const response = await fetch(
          `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${IMMANUEL_KEY}/submissions/${encoded}`,
          { method: "POST" }
        );
        if (response.ok) {
          const resVal = await response.json();
          if (resVal === true || resVal === "true") {
            // Cache locally in parallel
            try {
              const filePath = await getSubmissionsPath();
              await fs.mkdir(path.dirname(filePath), { recursive: true });
              await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf8");
            } catch {}
            return true;
          }
        }
      }
    } catch (err) {
      console.error("Immanuel KV write error:", err);
    }
  }

  // 3. Local Filesystem Tertiary Fallback
  const filePath = await getSubmissionsPath();
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Filesystem write error:", err);
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

