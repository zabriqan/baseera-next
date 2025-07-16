

import jwt from "jsonwebtoken";

export function verifyToken(token: string): boolean {
  let isLoggedIn = false;

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof verified !== "string" && "exp" in verified) {
      const hasExpired = new Date() < new Date(verified.exp ?? 0 );
      console.log("hasexpired" , hasExpired)

      if (!hasExpired) {
        isLoggedIn = true;
      }
    }
  } catch (error) {
    console.log("Token verification error:", error);
  }

  return isLoggedIn;
}
