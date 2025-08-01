import React from "react";
import Image from "next/image";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-24 flex justify-between items-center px-6 py-4 top-0 z-50 backdrop-blur-sm bg-white/5 dark:bg-black/5 border-b border-gray-200/20 dark:border-gray-800/20">
      {/* Logo */}
      <Link href="/" className="group flex items-center">
        <div className="relative w-36 h-16 md:w-52 md:h-20">
          <Image
            src="/logo.png"
            alt="Learner.ai Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Navigation Items */}
      <div className="flex items-center gap-4">
        {!hasEnvVars ? (
          <EnvVarWarning />
        ) : (
          <>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              <Link
                href="/features"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                About
              </Link>
            </div>
            <AuthButton />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
