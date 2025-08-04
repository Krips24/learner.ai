"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]"></div>
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-green-500/10 blur-[80px]"></div>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-center items-center gap-6"
      >
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            © {new Date().getFullYear()} Learner.ai
          </Link>
          <span className="hidden sm:block text-gray-600">•</span>
          <Link
            href="https://krapansh-portfolio.vercel.app/"
            className=" sm:block text-gray-400"
          >
            Powered by <span className="text-green-400">@Krapansh</span>
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
