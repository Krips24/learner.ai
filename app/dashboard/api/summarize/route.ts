import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
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

    if (!geminiResponse.ok) {
      throw new Error("Gemini API request failed");
    }

    const data = await geminiResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in summarize API:", error);
    return NextResponse.json(
      { error: "Error generating summary" },
      { status: 500 }
    );
  }
}
