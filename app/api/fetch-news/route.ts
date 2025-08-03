import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { topic, date } = await request.json();
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY; // Note: Changed from NEXT_PUBLIC_NEWS_API_KEY

    if (!apiKey) {
      throw new Error("News API key not configured");
    }

    const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      topic
    )}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "News API request failed");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("News fetch error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
