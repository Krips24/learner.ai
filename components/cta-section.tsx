import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 to-gray-950 opacity-90"></div>
      <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-radium-500/20 blur-[100px]"></div>
      <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Learn Smarter?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join thousands of curious minds who are staying informed in just
            minutes a day.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/signup"
              className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-radium-500 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <span className="relative z-10">Get Started Free</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-radium-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Link>
            <Link
              href="#features"
              className="rounded-lg border border-gray-700 bg-gray-900 px-14 py-4  font-medium text-white transition-all hover:border-gray-600 hover:bg-gray-800"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
