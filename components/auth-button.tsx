"use client";

import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";
import { LogIn, User as UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

export function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const supabase = createClient(); // Use the imported supabase client

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  if (loading) {
    return <div className="h-10 w-24 rounded-lg bg-gray-800 animate-pulse" />;
  }

  return user ? (
    <Button
      variant="outline"
      size="sm"
      className="border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-white"
      onClick={handleSignOut}
    >
      <UserIcon className="h-4 w-4 mr-2" />
      Sign Out
    </Button>
  ) : (
    <Button
      size="sm"
      className="bg-gradient-to-r from-blue-500 to-[#99FF33] text-white"
      onClick={() => router.push("/auth/login")}
    >
      <LogIn className="h-4 w-4 mr-2" />
      Sign In
    </Button>
  );
}
