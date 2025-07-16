import { supabase } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function checkCredentials(email: string, password: string) {
  const { data: user, error } = await supabase
    .from("admins")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) return false;

  const isValid = await bcrypt.compare(password, user.password);
  return isValid;
}
