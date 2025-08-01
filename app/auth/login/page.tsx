import { LoginForm } from "@/components/login-form";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-svh w-full flex items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4">
      <nav className="absolute w-full flex justify-between items-center px-4  top-0 bg-background/80 backdrop-blur-sm z-50">
        {/* Gradient Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - See section 2 below for SVG */}
          <Link href="/" className="flex items-center h-full py-1">
            <Image
              src="/logo.png"
              alt="Learner.ai Logo"
              width={126} // Reduced from 136
              height={48} // Constrained height
              className="w-44 h-full object-contain" // Maintain aspect ratio
              priority
            />
          </Link>
        </div>
      </nav>
      <div className="w-full mt-12 max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
