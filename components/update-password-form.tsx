// app/components/update-password-form.tsx
"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setSuccess(true);
      setTimeout(() => router.push("/protected"), 2000);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {success ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">
            Password updated!
          </h3>
          <p className="mt-2 text-gray-400">
            You&apos;re being redirected to your dashboard...
          </p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleUpdatePassword}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-gray-800 bg-gray-900/50 p-8"
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-400">
                New password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter new password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 transition-colors"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-gray-400">
                Confirm password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 transition-colors"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-sm text-red-400 px-3 py-2 bg-red-400/10 rounded-md border border-red-400/20"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full mt-2 h-11 bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 transition-all shadow-lg hover:shadow-blue-500/20"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Updating...
                </span>
              ) : (
                <span>Update password</span>
              )}
            </Button>
          </div>
        </motion.form>
      )}
    </div>
  );
}
