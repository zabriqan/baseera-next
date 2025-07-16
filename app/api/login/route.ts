import { NextResponse } from "next/server";
import { checkCredentials } from "@/lib/auth";
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const isValid = await checkCredentials(email, password);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Fetch the user's id, and email only and replace the following
  const user = { id: "123", email: "admin@baseera.com" }

  const response = NextResponse.json({ success: true });

  const accessToken = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: '1h' })

  response.cookies.set("admin_token", accessToken, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
