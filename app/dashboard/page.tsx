// app/dashboard/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Sparkles, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type NewsItem = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Topic =
  | "investments"
  | "sports"
  | "technology"
  | "health"
  | "entertainment";

export default function Dashboard() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<Topic>("technology");
  const [isLoading, setIsLoading] = useState(true);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartTime = useRef(0);

  // Fetch news based on selected topic
  // Fetch news based on selected topic
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const dateString = yesterday.toISOString().split("T")[0];

        const response = await fetch("/api/fetch-news", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic: selectedTopic,
            date: dateString,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch news");
        }

        const data = await response.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        // Optionally set some error state to show to user
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [selectedTopic]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = () => {
    const now = Date.now();
    const timeDiff = now - touchStartTime.current;

    if (isSwiping && timeDiff < 300) {
      if (touchStartX.current - touchEndX.current > 50) {
        // Swipe left - next article
        setCurrentIndex((prev) => Math.min(prev + 1, news.length - 1));
      } else if (touchEndX.current - touchStartX.current > 50) {
        // Swipe right - previous article
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
    setIsSwiping(false);
  };
  const handlePrevClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => Math.min(prev + 1, news.length - 1));
  };

  // Get AI summary
  const handleAISummary = async () => {
    if (!news[currentIndex]) return;

    setIsSummarizing(true);
    setShowAIPanel(true);

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: news[currentIndex].title,
          content: news[currentIndex].content || news[currentIndex].description,
          instructions: `Provide a concise summary in 3 short points.
                  Use plain text only - no markdown or formatting.
                  Each point should be one sentence maximum.
                  Then add "Why it matters:" followed by one short sentence.`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            data.message ||
              "Too many requests. Please wait a minute and try again."
          );
        }
        throw new Error(data.error || "Failed to generate summary");
      }

      setAiResponse(
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Could not generate summary"
      );
    } catch (error) {
      console.log("Summary Error:", error);
      setAiResponse(
        error instanceof Error ? error.message : "Error generating summary"
      );

      // Show the error for 5 seconds then clear it
      setTimeout(() => {
        setAiResponse("");
        setShowAIPanel(false);
      }, 5000);
    } finally {
      setIsSummarizing(false);
    }
  };

  if (isLoading && news.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-xl">Loading news...</div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl">No news found for this topic</div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentArticle = news[currentIndex];

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      {/* Navbar with topics - Improved for mobile */}
      <Navbar>
        {/* Desktop Topics */}
        <div className="hidden md:flex items-center justify-center gap-2 overflow-x-auto no-scrollbar px-2">
          {[
            "investments",
            "sports",
            "technology",
            "health",
            "entertainment",
            "business",
            "science",
            "politics",
          ].map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic as Topic)}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap flex-shrink-0 ${
                selectedTopic === topic
                  ? "bg-gradient-to-r from-blue-500 to-[#99FF33] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </button>
          ))}
        </div>
      </Navbar>

      {/* Mobile Topics */}
      <div className="md:hidden relative top-20 px-6 right-4 w-full z-50">
        <div className="overflow-x-auto no-scrollbar py-1">
          <div className="flex gap-2 w-max px-2">
            {[
              "investments",
              "sports",
              "technology",
              "health",
              "entertainment",
            ].map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic as Topic)}
                className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap flex-shrink-0 ${
                  selectedTopic === topic
                    ? "bg-gradient-to-r from-blue-500 to-[#99FF33] text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {/* Gradient fade indicators */}
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>
      </div>
      {/* Main news card */}
      <div
        className="flex-1 flex flex-col items-center justify-center p-4 mt-6 relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => {
          // Only handle click if it wasn't a swipe
          if (!isSwiping) {
            // You can add any click behavior here if needed
          }
        }}
      >
        <div className="w-full max-w-2xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex flex-col">
          {/* News image */}
          {currentArticle.urlToImage && (
            <div className="h-48 bg-gray-800 relative overflow-hidden">
              <Image
                fill
                src={currentArticle.urlToImage}
                alt={currentArticle.title}
                className="w-full h-full object-cover"
                priority
                unoptimized
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex flex-col"
            >
              {/* News content */}
              <div className="flex-1 p-4 sm:p-6 overflow-y-auto relative">
                {/* Improved header alignment */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                  <span className="text-xs sm:text-sm text-gray-400">
                    Source: {currentArticle.source.name}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      handleAISummary();
                    }}
                    className="flex items-center gap-1 bg-[#99FF33]/10 hover:bg-[#99FF33]/20 px-3 py-1 rounded-full text-[#99FF33] text-xs sm:text-sm transition-colors"
                  >
                    <Sparkles className="h-3 w-3" />
                    AI Summarize
                  </button>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                  {currentArticle.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {currentArticle.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {currentArticle.content?.split("[")[0]}
                </p>

                <div className="mt-6 flex justify-between">
                  <a
                    href={currentArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm"
                  >
                    Read full story →
                  </a>
                </div>

                {/* AI Panel - Bottom sliding version */}
                {/* AI Components */}
                <AnimatePresence>
                  {/* Loading Indicator (shows immediately when clicked) */}
                  {isSummarizing && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="fixed bottom-6 right-1 justify-start  bg-gray-800/90 backdrop-blur-sm w-full px-4 py-3 rounded-full border border-[#99FF33]/30 shadow-lg z-50 flex items-center gap-3"
                    >
                      <div className="relative h-5 w-5">
                        <motion.div
                          animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: {
                              repeat: Infinity,
                              duration: 1.5,
                              ease: "linear",
                            },
                            scale: {
                              repeat: Infinity,
                              duration: 1,
                              ease: "easeInOut",
                            },
                          }}
                          className="absolute inset-0 border-2 border-transparent border-t-[#99FF33] border-r-[#99FF33] rounded-full"
                        />
                        <Sparkles className="absolute inset-0 m-auto h-2.5 w-2.5 text-[#99FF33]" />
                      </div>
                      <span className="text-sm text-[#99FF33]">
                        Analyzing content...
                      </span>
                    </motion.div>
                  )}

                  {/* Full AI Panel (only shows after response) */}
                  {showAIPanel && aiResponse && (
                    <>
                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setShowAIPanel(false)}
                      />

                      {/* Main Panel */}
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 300,
                        }}
                        className="fixed bottom-0 left-0 right-0 h-[70vh] max-h-[600px] bg-gray-900 rounded-t-2xl border-t border-x border-[#99FF33]/30 z-50 overflow-hidden shadow-2xl"
                      >
                        {/* Panel Header */}
                        <div className="sticky top-0 z-10 bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-[#99FF33]" />
                            <h3 className="font-medium text-white">
                              AI Analysis
                            </h3>
                          </div>
                          <button
                            onClick={() => {
                              setShowAIPanel(false);
                              setAiResponse("");
                            }}
                            className="p-1 rounded-full hover:bg-gray-800 transition-colors"
                          >
                            <X className="h-5 w-5 text-gray-400 hover:text-white" />
                          </button>
                        </div>

                        {/* Content Area */}
                        <div className="h-full overflow-y-auto p-4 pb-24">
                          {aiResponse ? (
                            <div className="space-y-3">
                              {
                                aiResponse
                                  .split("\n")
                                  .map((line) => line.trim()) // Trim each line first
                                  .filter((line) => line.length > 0) // Remove empty lines
                                  .map((line, index) => {
                                    // Clean the line content
                                    const cleanLine = line
                                      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown
                                      .replace(/\* /g, "• ") // Replace * with bullet
                                      .replace(/^\*/, "•") // Handle * at start of line
                                      .trim();

                                    // Skip if line is empty after cleaning
                                    if (!cleanLine) return null;

                                    // Create a unique key using index and first 10 chars of content
                                    const uniqueKey = `ai-line-${index}-${cleanLine
                                      .substring(0, 10)
                                      .replace(/\s+/g, "-")}`;

                                    return (
                                      <p
                                        key={uniqueKey}
                                        className="text-sm sm:text-base text-gray-300"
                                      >
                                        {cleanLine.startsWith("•") ? (
                                          <span className="flex">
                                            <span className="mr-2">•</span>
                                            <span>
                                              {cleanLine.substring(1)}
                                            </span>
                                          </span>
                                        ) : (
                                          cleanLine
                                        )}
                                      </p>
                                    );
                                  })
                                  .filter(Boolean) // Remove any null entries from skipped lines
                              }
                            </div>
                          ) : (
                            <div className="h-full flex items-center justify-center text-gray-400">
                              {!isSummarizing && "No summary available"}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating navigation for desktop */}
          <div className="hidden md:block">
            <button
              onClick={handlePrevClick}
              disabled={currentIndex === 0}
              className={`fixed left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm ${
                currentIndex === 0
                  ? "text-gray-600"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNextClick}
              disabled={currentIndex === news.length - 1}
              className={`fixed right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm ${
                currentIndex === news.length - 1
                  ? "text-gray-600"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Footer remains the same */}
      <Footer>
        <div className="flex justify-around items-center py-6 px-6 backdrop-blur-lg rounded-t-xl border-t border-gray-800">
          <button className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
            <span className="text-xs">News</span>
          </button>
          <button className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
            <span className="text-xs">Quiz</span>
          </button>
          <button className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
            <span className="text-xs">AI</span>
          </button>
          <button className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </Footer>
    </div>
  );
}
