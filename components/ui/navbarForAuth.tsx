import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarForAuth = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="absolute w-full flex justify-between items-center px-6 py-4 top-0 bg-background/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <Link
          href="/"
          className="relative w-36 h-12 md:w-44 md:h-14 flex items-center py-1"
        >
          <Image
            src="/logo.png"
            alt="Learner.ai Logo"
            fill
            className=" object-contain"
            priority
          />
        </Link>
        <Link
          href="/auth/sign-up"
          className="sm:text-sm text-xs font-medium text-gray-400 hover:text-white transition-colors"
        >
          Don&apos;t have an account?
        </Link>
      </nav>
    </div>
  );
};

export default NavbarForAuth;
