import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Incoming form data:", data);

    const { firstName, lastName, email, subject, message } = data;

    // Validate input
    if (!firstName || !lastName || !email || !subject || !message) {
      console.error("Validation failed: Missing fields");
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // Insert into Supabase
    const { error } = await supabase.from("userdata").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        subject,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json({ error: "Insert failed" }, { status: 500 });
    }

    console.log("Message saved successfully.");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
