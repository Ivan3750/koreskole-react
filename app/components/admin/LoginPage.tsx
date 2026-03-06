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

      const res = await fetch(`${API}/login.php`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("csrf", data.csrf);

      onLogin();

    } catch (e) {
      setError("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">

      <div className="w-96 bg-white p-8 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          className="w-full border p-3 mb-3"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-3 mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 mb-3">
            {error}
          </p>
        )}

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded"
        >
          {loading ? "Loading..." : "Login"}
        </button>

      </div>

    </div>
  );
}