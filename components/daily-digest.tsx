import { ArrowRight, BookOpen, Clock, Zap } from "lucide-react";

export function DailyDigest() {
  const sampleNews = {
    title: "Tech Stocks Rally 8% on New AI Breakthroughs",
    summary:
      "Nvidia, AMD, and other chipmakers surge as new LLM benchmarks show 40% efficiency gains. Analysts predict continued growth in Q3.",
    category: "Investments",
    readTime: "1 min",
    hot: true,
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl py-16">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your{" "}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Daily Digest
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Today&apos;s top story tailored for your learning
        </p>
      </div>

      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

        {/* News card */}
        <div className="bg-background border border-border/50 group-hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6">
            {/* News content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  {sampleNews.category}
                </span>
                {sampleNews.hot && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-medium">
                    <Zap className="w-3 h-3 fill-red-500" />
                    Hot Topic
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  {sampleNews.readTime} read
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {sampleNews.title}
              </h3>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {sampleNews.summary}
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all group/button">
                  Read Summary
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-accent rounded-full font-medium transition-all">
                  <BookOpen className="w-4 h-4" />
                  Take Quiz
                </button>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="md:w-1/3">
              <div className="relative h-full min-h-[200px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden border border-border/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground/50">
                    Market Trends
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View more */}
      <div className="text-center mt-10">
        <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
          View full digest
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
