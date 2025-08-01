
export function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-24 gap-8 text-center">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Learn Smarter
          </span>
          , Not Harder
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          AI-curated 1-minute news, daily facts, and quizzes tailored just for
          you.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-primary/20">
          Get Started
        </button>
        <button className="border border-border hover:bg-accent px-8 py-3 rounded-full font-medium text-lg transition-all">
          How It Works →
        </button>
      </div>

      {/* App Preview Mockup */}
      <div className="mt-12 w-full max-w-4xl aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden">
        {/* Floating News Cards */}
        <div className="absolute w-52 h-32 bg-background border border-border rounded-lg shadow-sm left-10 top-1/4 rotate-3 p-3">
          <div className="h-2 bg-primary/20 rounded-full w-3/4 mb-2"></div>
          <div className="h-2 bg-muted rounded-full w-full mb-1"></div>
          <div className="h-2 bg-muted rounded-full w-2/3"></div>
        </div>
        <div className="absolute w-52 h-32 bg-background border border-border rounded-lg shadow-sm right-10 top-1/3 -rotate-2 p-3">
          <div className="h-2 bg-secondary/20 rounded-full w-1/2 mb-2"></div>
          <div className="h-2 bg-muted rounded-full w-full mb-1"></div>
          <div className="h-2 bg-muted rounded-full w-4/5"></div>
        </div>
        <p className="text-muted-foreground z-10 bg-background/80 px-4 py-2 rounded-full border border-border">
          Your Personalized Feed
        </p>
      </div>
    </section>
  );
}
