"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget as HTMLFormElement);
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    if (!res.ok) return setError(result.error || "Login failed");

    router.push("/admin-pannel");
  };
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="w-full  max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
}
