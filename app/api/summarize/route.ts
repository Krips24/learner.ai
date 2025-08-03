// app/api/summarize/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Clone the request to read body multiple times if needed
    const requestClone = request.clone();
    const { title, content } = await requestClone.json();

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Gemini API key not configured");
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Summarize this news article in 3 bullet points and explain why it matters in simple terms:\n\nTitle: ${title}\n\nContent: ${content}`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (response.status === 429) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: "Please wait before making more requests",
        },
        {
          status: 429,
          headers: {
            "retry-after": "60", // Or get this from Gemini's response if available
          },
        }
      );
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "API request failed");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate summary",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
