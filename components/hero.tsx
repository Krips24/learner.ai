// app/components/hero.tsx
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-radium-500/10 blur-[100px]"></div>
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"></div>

      {/* Content container */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 md:py-32 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left content */}
        <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          {/* Animated tagline */}
          <div className="group relative mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 px-4 py-2 pr-6">
            <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-radium-500/20">
              <Sparkles className="h-3 w-3 animate-pulse text-radium-400" />
            </div>
            <span className="text-sm font-medium text-radium-400">
              AI-Powered Learning
            </span>
            <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-radium-500/30 blur-md group-hover:animate-ping"></div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">Smarter News</span>
              <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-radium-500/30"></span>
            </span>{" "}
            for the{" "}
            <span className="relative whitespace-nowrap bg-gradient-to-r from-blue-400 to-[#99FF33] bg-clip-text text-transparent">
              Curious Minds
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 200 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 C 40 16, 65 6, 100 10 S 160 3, 200 10"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#00f0a0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-gray-300 md:max-w-[90%]">
            Get{" "}
            <span className="text-blue-400 font-medium">
              AI-powered 1-minute briefs
            </span>
            , personalized quizzes, and{" "}
            <span className="text-radium-400 font-medium">smart insights</span>
            tailored to you.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-radium-500 px-8 py-3.5 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-radium-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Link>
            <Link
              href="#features"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-8 py-3.5 font-medium text-white transition-all hover:border-gray-600 hover:bg-gray-800 active:scale-95"
            >
              <span>How It Works</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 lg:justify-start">
            {[
              { value: "1-min", label: "Quick Reads" },
              { value: "5 Levels", label: "Quizzes" },
              { value: "AI", label: "Powered" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - 3D floating device mockup */}
        <div className="relative mt-16 lg:mt-0">
          <div className="relative h-[480px] w-[280px] transform rounded-[32px] border-[14px] border-gray-900 bg-gray-900 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_-10px_rgba(0,240,160,0.3)]">
            {/* Screen content */}
            <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl bg-gray-950">
              {/* Status bar */}
              <div className="flex justify-between px-6 pt-4">
                <div className="h-2 w-16 rounded-full bg-gray-800"></div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                </div>
              </div>

              {/* App header */}
              <div className="mt-4 px-6">
                <div className="h-4 w-24 rounded-full bg-gradient-to-r from-blue-400 to-radium-400"></div>
                <div className="mt-2 h-3 w-32 rounded-full bg-gray-800"></div>
              </div>

              {/* News card */}
              <div className="relative mx-6 mt-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-5">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-radium-500/10 blur-xl"></div>
                <div className="relative z-10">
                  <div className="h-4 w-3/4 rounded-full bg-white"></div>
                  <div className="mt-3 h-2 w-full rounded-full bg-gray-700"></div>
                  <div className="mt-2 h-2 w-5/6 rounded-full bg-gray-700"></div>
                  <div className="mt-2 h-2 w-4/6 rounded-full bg-gray-700"></div>
                </div>
                <div className="relative z-10 mt-6 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-radium-500/20"></div>
                  <div className="flex-1">
                    <div className="h-3 w-3/4 rounded-full bg-gray-600"></div>
                    <div className="mt-1 h-2 w-1/2 rounded-full bg-gray-800"></div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-blue-500/10"></div>
                </div>
              </div>

              {/* Quiz section */}
              <div className="mt-6 px-6">
                <div className="h-3 w-1/2 rounded-full bg-gray-800"></div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["A", "B", "C", "D"].map((option) => (
                    <div
                      key={option}
                      className="flex h-12 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/50 text-xs text-gray-400"
                    >
                      Option {option}
                    </div>
                  ))}
                </div>
              </div>

              {/* AI suggestion */}
              <div className="mt-6 mx-6 rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-radium-500/20"></div>
                  <div className="flex-1">
                    <div className="h-3 w-3/4 rounded-full bg-radium-400/70"></div>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-800"></div>
                    <div className="mt-2 h-2 w-5/6 rounded-full bg-gray-800"></div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-gray-900 bg-gray-950/80 p-4 backdrop-blur-sm">
                {["News", "Quiz", "AI", "Profile"].map((item) => (
                  <div
                    key={item}
                    className={`flex flex-col items-center ${
                      item === "News" ? "text-radium-400" : "text-gray-500"
                    }`}
                  >
                    <div className="h-5 w-5 rounded-full bg-gray-800"></div>
                    <span className="mt-1 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating elements around device */}
          <div className="absolute -left-10 -top-10 h-24 w-24 animate-float rounded-xl bg-blue-500/10 blur-[20px]"></div>
          <div className="absolute -right-10 bottom-10 h-16 w-16 animate-float rounded-full bg-radium-500/10 blur-[20px] animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
}
