"use client";

import { useEffect, useState } from "react";
import CoursesPage from "../components/admin/CoursesPage";
import BlogPage from "../components/admin/BlogPage";
import ContactsPage from "../components/admin/ContactsPage";
import PasswordPage from "../components/admin/PasswordPage";

const API = "http://localhost:8000";
 
type Page = "courses" | "blog" | "contacts" | "password";

export default function Page() {
  const [activePage, setActivePage] = useState<Page>("courses");
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

 

 
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /* ---------------- CHECK SESSION ---------------- */
  const checkAuth = async () => {
    const res = await fetch(`${API}/check-auth.php`, {
      credentials: "include",
    });
    const data = await res.json();
    setLoggedIn(data.logged_in);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  /* ---------------- LOGIN ---------------- */
  const login = async () => {
    setError("");

    const res = await fetch(`${API}/login.php`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    if (res.ok) {
      setLoggedIn(true);
    } else {
      const data = await res.json();
      setError(data.error || "Login failed");
    }
  };

  /* ---------------- LOGOUT ---------------- */
  const logout = async () => {
    await fetch(`${API}/logout.php`, {
      credentials: "include",
    });
    setLoggedIn(false);
  };

  /* ---------------- LOADING ---------------- */
  if (loggedIn === null) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  /* ======================================================
      LOGIN VIEW
  ====================================================== */
  if (!loggedIn) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-96 bg-white p-8 rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

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

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <button
            onClick={login}
            className="w-full bg-black text-white p-3 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  /* ======================================================
      ADMIN PANEL VIEW
  ====================================================== */
  const renderPage = () => {
    switch (activePage) {
      case "courses":
        return <CoursesPage />;
      case "blog":
        return <BlogPage />;
      case "contacts":
        return <ContactsPage />;
      case "password":
        return <PasswordPage />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <div className="w-64 bg-black text-white p-6">
        <h2 className="text-xl mb-6">Admin Panel</h2>

        {(["courses", "blog", "contacts", "password"] as Page[]).map(
          (page) => (
            <div
              key={page}
              onClick={() => setActivePage(page)}
              className={`cursor-pointer mb-3 ${
                activePage === page ? "font-bold" : ""
              }`}
            >
              {page}
            </div>
          )
        )}

        <button
          onClick={logout}
          className="mt-10 bg-red-600 w-full p-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-10 bg-gray-50">{renderPage()}</div>
    </div>
  );
}