// app/admin-pannel/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from 'jsonwebtoken';
import { verifyToken } from "@/lib/verifytoken";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("admin_token")?.value || '';
  let isLoggedIn = verifyToken(token)

  if (!isLoggedIn) {
    redirect("/login");
  }

  return children;
}
