// app/components/forgot-password-form.tsx
"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-radium-500/10">
            <CheckCircle className="h-8 w-8 text-radium-400" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">
            Check your email
          </h3>
          <p className="mt-2 text-gray-400">
            We&apos;ve sent password reset instructions to your email address.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Didn&apos;t receive the email?{" "}
            <button
              onClick={() => setSuccess(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Try again
            </button>
          </p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleForgotPassword}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-gray-800 bg-gray-900/50 p-8"
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-400">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              className="w-full mt-2 h-11 bg-gradient-to-r from-blue-500 to-radium-500 text-white hover:from-blue-600 hover:to-radium-600 transition-all shadow-lg hover:shadow-blue-500/20"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span>Send reset link</span>
              )}
            </Button>
          </div>
        </motion.form>
      )}

      <p className="px-8 text-center text-sm text-gray-500">
        Remember your password?{" "}
        <Link
          href="/auth/login"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Login here
        </Link>
      </p>
    </div>
  );
}
