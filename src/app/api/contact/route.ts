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

    // Get writeable submissions file path
    const dataFilePath = await getSubmissionsPath();

    let submissions = [];
    try {
      const fileContent = await fs.readFile(dataFilePath, "utf8");
      submissions = JSON.parse(fileContent);
    } catch (err) {
      // If file doesn't exist yet, start with empty list
    }

    submissions.push(newSubmission);

    // Create containing folder if it doesn't exist and write database record
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify(submissions, null, 2), "utf8");

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

    const dataFilePath = await getSubmissionsPath();
    let submissions = [];
    try {
      const fileContent = await fs.readFile(dataFilePath, "utf8");
      submissions = JSON.parse(fileContent);
    } catch (err) {
      // File doesn't exist yet
    }
    // Return submissions in reverse order so newest are on top
    return NextResponse.json(submissions.reverse());
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

    const dataFilePath = await getSubmissionsPath();
    let submissions = [];
    try {
      const fileContent = await fs.readFile(dataFilePath, "utf8");
      submissions = JSON.parse(fileContent);
    } catch (err) {
      return NextResponse.json(
        { error: "Database is empty." },
        { status: 404 }
      );
    }

    const index = submissions.findIndex((sub: any) => sub.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: "Submission not found." },
        { status: 404 }
      );
    }

    // Update status
    submissions[index].status = status;

    await fs.writeFile(dataFilePath, JSON.stringify(submissions, null, 2), "utf8");

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

