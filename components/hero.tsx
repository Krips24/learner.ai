"use client";

import {
  ArrowRight,
  Sparkles,
  Zap,
  BookOpen,
  BarChart,
  Lightbulb,
  // Play,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-32 sm:pb-32">
      {/* Background glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-purple-50/40 via-white to-blue-50/40 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20" />

      {/* Floating orb glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-400/10 to-blue-400/10 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Animated badge */}
          <div className="mb-8 inline-flex animate-fade-in items-center gap-x-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 text-sm font-semibold leading-6 text-purple-600 shadow-sm ring-1 ring-purple-200 backdrop-blur-sm transition-all hover:shadow-md dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-300 dark:ring-purple-800/50">
            <Sparkles className="h-4 w-4" />
            Introducing AI-Powered Learning
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              The Smarter Way{" "}
            </span>{" "}
            <br className="hidden sm:inline" />
            to Stay Updated{" "}
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            AI-curated news summaries, fascinating facts, and quick quizzes —
            personalized to your interests and delivered in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30">
              <span className="relative z-10 flex items-center gap-2">
                Get Started{" "}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>

        {/* Floating Knowledge Elements */}
        <div className="mt-40 flow-root sm:mt-24">
          <div className="relative -m-2 rounded-xl p-2 lg:-m-4 lg:p-4">
            <div className="relative mx-auto max-w-4xl">
              {/* Floating cards */}
              <div className="absolute left-0 top-0 h-32 w-56 animate-float-slow rounded-xl bg-white/80 p-4 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm dark:bg-gray-800/80 dark:ring-white/10">
                <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-purple-400 to-purple-300 mb-3 dark:from-purple-500 dark:to-purple-400" />
                <div className="h-2 rounded-full bg-gray-200 mb-2 dark:bg-gray-700" />
                <div className="h-2 w-5/6 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>

              <div className="absolute right-0 top-12 h-28 w-48 animate-float-medium rounded-xl bg-white/80 p-4 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm dark:bg-gray-800/80 dark:ring-white/10">
                <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 mb-3 dark:from-blue-500 dark:to-blue-400" />
                <div className="h-2 rounded-full bg-gray-200 mb-2 dark:bg-gray-700" />
                <div className="h-2 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>

              {/* Floating icons */}
              <div className="absolute left-1/4 bottom-8 h-14 w-14 animate-float-fast rounded-2xl bg-white/80 p-3 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm dark:bg-gray-800/80 dark:ring-white/10">
                <Lightbulb className="h-full w-full text-amber-500" />
              </div>

              <div className="absolute right-1/4 bottom-12 h-12 w-12 animate-float-slow rounded-xl bg-white/80 p-2 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm dark:bg-gray-800/80 dark:ring-white/10">
                <BookOpen className="h-full w-full text-blue-500" />
              </div>

              <div className="absolute left-1/4 top-12 h-14 w-14 animate-float-fast rounded-2xl bg-white/80 p-3 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm dark:bg-gray-800/80 dark:ring-white/10">
                <Zap className="h-full w-full text-blue-500" />
              </div>

              <div className="absolute right-1/4 bottom h-12 w-12 animate-float-slow rounded-xl bg-white/80 p-2 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm dark:bg-gray-800/80 dark:ring-white/10">
                <BarChart className="h-full w-full text-amber-500" />
              </div>

              {/* Center orb */}
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 shadow-2xl backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
