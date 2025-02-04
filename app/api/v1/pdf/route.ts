import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { driveLink } = await req.json();

    // Validate the Google Drive link
    if (!driveLink || !driveLink.includes("drive.google.com")) {
      return NextResponse.json({ error: "Invalid Google Drive link." }, { status: 400 });
    }

    // Extract the file ID from the link
    const fileIdMatch = driveLink.match(/\/d\/([a-zA-Z0-9_-]+)\/view/);
    if (!fileIdMatch || fileIdMatch.length < 2) {
      return NextResponse.json({ error: "Unable to extract file ID from the link." }, { status: 400 });
    }

    const fileId = fileIdMatch[1];
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Fetch the PDF file from Google Drive
    const response = await fetch(downloadLink);
    if (!response.ok) {
      throw new Error("Failed to fetch the PDF from the provided link.");
    }

    // Convert the PDF to a base64 string
    const pdfBuffer = await response.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");

    // Initialize the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-thinking-exp-1219" });

    // Generate content using Gemini
    const result = await model.generateContent([
      {
        inlineData: {
          data: pdfBase64,
          mimeType: "application/pdf",
        },
      },
      "Summarize this document and provide a grade for the writing context on a scale of 1 to 10. Provide feedback on clarity, coherence, and engagement.",
    ]);

    // Extract the response text
    const summary = result.response.text();

    return NextResponse.json({ summary }, { status: 200 });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
