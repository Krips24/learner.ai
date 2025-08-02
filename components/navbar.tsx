"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { LogIn, User as UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

// AuthButton component
function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  if (loading) {
    return <Skeleton className="h-10 w-24 rounded-lg" />;
  }

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-white"
        >
          <UserIcon className="h-4 w-4 mr-2" />
          Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-gray-800 bg-gray-900">
        <DropdownMenuItem
          className="cursor-pointer text-gray-300 hover:bg-gray-800 focus:text-white"
          onClick={handleSignOut}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button
      size="sm"
      className="bg-gradient-to-r from-blue-500 to-radium-500 text-white hover:from-blue-600 hover:to-radium-600 shadow-lg hover:shadow-blue-500/20"
      onClick={() => router.push("/auth/login")}
    >
      <LogIn className="h-4 w-4 mr-2" />
      Sign in
    </Button>
  );
}

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
          className="relative w-36 h-12 md:w-44 md:h-14"
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

      {/* Navigation Items */}
      <div className="flex items-center gap-6">
        <AuthButton />
      </div>
    </motion.nav>
  );
}
