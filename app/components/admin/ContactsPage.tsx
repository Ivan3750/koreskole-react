"use client";
import React, { useEffect, useState } from "react";

const API = "http://localhost:8000";

export default function ContactsPage() {
  const [email, setEmail]   = useState("");
  const [phone, setPhone]   = useState("");
  const [csrf, setCsrf]     = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const [sessionRes, contactsRes] = await Promise.all([
        fetch(`${API}/session.php`, { credentials: "include" }),
        fetch(`${API}/contacts.php`, { credentials: "include" }),
      ]);

      const sessionData  = await sessionRes.json();
      const contactsData = await contactsRes.json();

      setCsrf(sessionData.csrf ?? "");

      const first = contactsData.contacts?.[0];
      if (first) {
        setEmail(first.email ?? "");
        setPhone(first.phone ?? "");
      }
    } catch {
      setMessage("Failed to load contacts.");
    }
  };

  const save = async () => {
    setStatus("saving");
    setMessage("");

    try {
      const res = await fetch(`${API}/contacts.php`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrf,
        },
        body: JSON.stringify({ email, phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Could not save.");
        return;
      }

      setStatus("success");
      setMessage("Saved successfully.");
    } catch {
      setStatus("error");
      setMessage("Server error - try again.");
    }
  };

  const cancel = async () => {
    setStatus("idle");
    setMessage("");
    await init();
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className="text-3xl font-semibold" style={{ color: "var(--color-text)" }}>
          Contact Settings
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
          Manage how users can contact you
        </p>
      </div>

      <div
        className="w-full rounded-2xl p-8 shadow-sm grid md:grid-cols-2 gap-6"
        style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}
      >
        <div className="space-y-1">
          <label className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="w-full px-4 py-2 rounded-lg outline-none transition"
            style={{
              border: "1px solid var(--color-border)",
              background: "var(--color-bg)",
              color: "var(--color-text)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
            onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--color-border)")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Phone
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+45 12 34 56 78"
            className="w-full px-4 py-2 rounded-lg outline-none transition"
            style={{
              border: "1px solid var(--color-border)",
              background: "var(--color-bg)",
              color: "var(--color-text)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
            onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--color-border)")}
          />
        </div>

        {message && (
          <div className="md:col-span-2">
            <p
              className="text-sm"
              style={{ color: status === "success" ? "green" : "var(--color-danger, red)" }}
            >
              {message}
            </p>
          </div>
        )}

        <div className="md:col-span-2 flex items-center gap-3 pt-4">
          <button
            onClick={save}
            disabled={status === "saving"}
            className="px-6 py-2 rounded-xl text-white transition disabled:opacity-50"
            style={{ background: "var(--color-primary)" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "var(--color-primary-hover)")}
            onMouseOut={(e)  => (e.currentTarget.style.background = "var(--color-primary)")}
          >
            {status === "saving" ? "Saving..." : "Save"}
          </button>

          <button
            onClick={cancel}
            className="px-5 py-2 rounded-xl"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
              background: "var(--color-bg)",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}