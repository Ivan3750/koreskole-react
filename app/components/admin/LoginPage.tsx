"use client";

import { useState } from "react";

const API = "http://localhost:8000";

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setError("");
    setLoading(true);

    try {
      // 1. Get CSRF token first
      const sessionRes = await fetch(`${API}/session.php`, {
        credentials: "include",
      });

      const sessionData = await sessionRes.json();
      const csrf = sessionData.csrf ?? "";

      // 2. POST login with CSRF header
      const res = await fetch(`${API}/login.php`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrf,
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login mislykkedes");
        setLoading(false);
        return;
      }

      onLogin();

    } catch (e) {
      setError("Serverfejl - prøv igen");
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

        <input
          className="w-full border p-3 mb-3 rounded"
          placeholder="Brugernavn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && login()}
        />

        <input
          type="password"
          className="w-full border p-3 mb-4 rounded"
          placeholder="Adgangskode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && login()}
        />

        {error && (
          <p className="text-red-500 mb-3">{error}</p>
        )}

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded disabled:opacity-50"
        >
          {loading ? "Logger ind..." : "Log ind"}
        </button>

      </div>
    </div>
  );
}