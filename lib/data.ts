"use server";

// lib/data.ts
import { supabase } from "./db";

import { verifyToken } from "./verifytoken";
import { cookies } from "next/headers";

export async function getUserData() {

  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value || "";

  const isLoggedIn = verifyToken(token); // ✅ secure

  if (!isLoggedIn) {
    throw new Error("Unauthorized access. Invalid token.");
  }

  
  const { data, error } = await supabase
    .from("contact_queries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch user data: " + error.message);
  }

  return data;
}
export async function findUserByEmail(email: string) {
    const { data, error } = await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .single();
  
    if (error || !data) return null;
    return data;
  }