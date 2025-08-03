import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getSession() {
  const supabase = createServerComponentClient({ cookies });
  return supabase.auth.getSession();
}

export async function getUser() {
  const supabase = createServerComponentClient({ cookies });
  return supabase.auth.getUser();
}
