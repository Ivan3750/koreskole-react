"use client";

import { useEffect, useState } from "react";
import CoursesPage from "../components/admin/CoursesPage";
import BlogPage from "../components/admin/BlogPage";
import ContactsPage from "../components/admin/ContactsPage";
import PasswordPage from "../components/admin/PasswordPage";
import LoginPage from "../components/admin/LoginPage";

const API = "http://localhost:8000";
type Page = "courses" | "blog" | "contacts" | "password";

export default function AdminPage() {
  const [activePage, setActivePage] = useState<Page>("courses");
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch(`${API}/check-auth.php`, { credentials: "include" });
      const data = await res.json();
      setLoggedIn(data.logged_in === true);
    } catch {
      setLoggedIn(false);
    }
  };

  const logout = async () => {
    try {
      await fetch(`${API}/logout.php`, { credentials: "include" });
    } finally {
      setLoggedIn(false);
    }
  };

  if (loggedIn === null) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-400">
        Indlæser...
      </div>
    );
  }

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  const pageLabels: Record<Page, string> = {
    courses:  "Kurser",
    blog:     "Blog",
    contacts: "Kontakter",
    password: "Adgangskode",
  };

  const renderPage = () => {
    switch (activePage) {
      case "courses":  return <CoursesPage onLogout={logout} />;
      case "blog":     return <BlogPage />;
      case "contacts": return <ContactsPage />;
      case "password": return <PasswordPage />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-black text-white p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

        <nav className="flex-1 space-y-2">
          {(["courses", "blog", "contacts", "password"] as Page[]).map((page) => (
            <div
              key={page}
              onClick={() => setActivePage(page)}
              className={`cursor-pointer px-3 py-2 rounded transition-colors ${
                activePage === page
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-gray-800"
              }`}
            >
              {pageLabels[page]}
            </div>
          ))}
        </nav>

        <button
          onClick={logout}
          className="mt-auto bg-red-600 hover:bg-red-700 w-full p-2 rounded transition-colors"
        >
          Log ud
        </button>
      </div>

      <div className="flex-1 p-10 bg-gray-50 overflow-auto">
        {renderPage()}
      </div>
    </div>
  );
}