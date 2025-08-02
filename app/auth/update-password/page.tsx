// app/auth/update-password/page.tsx
import { UpdatePasswordForm } from "@/components/update-password-form";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative min-h-svh w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-green-500/10 blur-[100px]"></div>
      <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"></div>

      {/* Navbar */}
      <nav className="absolute w-full flex justify-between items-center px-6 py-4 top-0 bg-background/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <Link href="/" className="flex items-center h-full py-1">
          <Image
            src="/logo.png"
            alt="Learner.ai Logo"
            width={126}
            height={48}
            className="w-44 h-full object-contain"
            priority
          />
        </Link>
      </nav>

      {/* Main content */}
      <div className="container relative flex h-svh flex-col items-center justify-center px-6 pt-16">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Create new password
            </h1>
            <p className="text-sm text-gray-400">
              Your new password must be different from previous ones
            </p>
          </div>
          <UpdatePasswordForm />
        </div>
      </div>
    </div>
  );
}
