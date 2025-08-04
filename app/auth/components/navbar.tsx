"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Main Navbar component
export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full h-20 flex justify-between items-center px-6 lg:px-8 py-4 top-0 z-50 backdrop-blur-sm  border-b border-gray-800"
    >
      {/* Logo */}
      <Link href="/" className="group flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-36 h-16 md:w-44 md:h-14"
        >
          <Image
            src="/logo.png"
            alt="Learner.ai Logo"
            fill
            className="object-contain transition-all duration-300 group-hover:opacity-90"
            priority
          />
        </motion.div>
      </Link>
    </motion.nav>
  );
}
