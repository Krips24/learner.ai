// In your Navbar component (navbar.tsx)
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "@/components/auth-button";

interface NavbarProps {
  children?: React.ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full h-20 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 top-0 z-50 backdrop-blur-lg border-b border-gray-800"
    >
      {/* Logo */}
      <Link
        href="/dashboard"
        className="group flex items-center gap-2 flex-shrink-0"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-40 h-14 md:w-44 md:h-14"
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

      {/* Topics Section */}
      <div className="flex-1 mx-4 sm:mx-6 min-w-0">{children}</div>

      {/* Auth Button */}
      <div className="flex-shrink-0">
        <AuthButton />
      </div>
    </motion.nav>
  );
}
