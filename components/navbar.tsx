import React from "react";
import Image from "next/image";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
// import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* Navbar with Auth */}
      <nav className="w-full flex justify-between items-center px-4 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        {/* Gradient Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - See section 2 below for SVG */}
          <Link href="/" className="flex items-center h-full py-1">
            <Image
              src="/logo-dark.png"
              alt="Learner.ai Logo"
              width={126} // Reduced from 136
              height={48} // Constrained height
              className="w-44 h-full object-contain" // Maintain aspect ratio
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {!hasEnvVars ? (
            <EnvVarWarning />
          ) : (
            <>
              <AuthButton />
              {/* <ThemeSwitcher /> */}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
