import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <div className="relative py-16 sm:py-24">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 opacity-50" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 bg-[radial-gradient(#3b82f6_0.5px,transparent_0.5px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl text-center">
        {/* Decorative badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Join the knowledge revolution
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to{" "}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Supercharge
          </span>{" "}
          Your Learning?
        </h2>

        {/* Subtext */}
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join <span className="font-semibold text-foreground">15,000+</span>{" "}
          curious minds getting their daily AI-curated knowledge boost.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 overflow-hidden">
            <span className="relative z-10 inline-flex items-center gap-2">
              Get Started - It&apos;s Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 border border-border hover:border-primary/50 bg-background hover:bg-accent rounded-full font-medium text-lg transition-all duration-300">
            <span className="relative z-10 inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              See How It Works
            </span>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span>Rated 4.9/5 by 2,500+ learners</span>
          </div>
          <p>No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
}
