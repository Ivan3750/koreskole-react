"use client";
import React, { useEffect, useState } from "react";

const API = "http://localhost:8000";

export default function PasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [csrf, setCsrf]               = useState("");
  const [status, setStatus]           = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage]         = useState("");

  useEffect(() => {
    fetch(`${API}/session.php`, { credentials: "include" })
      .then((r) => r.json())
      .then((d) => setCsrf(d.csrf ?? ""))
      .catch(() => {});
  }, []);

  const update = async () => {
    setStatus("saving");
    setMessage("");

    if (newPassword.length < 8) {
      setStatus("error");
      setMessage("New password must be at least 8 characters.");
      return;
    }

    try {
      const res = await fetch(`${API}/password.php`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrf,
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Could not update password.");
        return;
      }

      setStatus("success");
      setMessage("Password updated successfully.");
      setOldPassword("");
      setNewPassword("");
    } catch {
      setStatus("error");
      setMessage("Server error - try again.");
    }
  };

  const cancel = () => {
    setOldPassword("");
    setNewPassword("");
    setStatus("idle");
    setMessage("");
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className="text-3xl font-semibold" style={{ color: "var(--color-text)" }}>
          Change Password
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
          Update your account password securely
        </p>
      </div>

      <div
        className="w-full rounded-2xl p-8 shadow-sm grid md:grid-cols-2 gap-6"
        style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}
      >
        <div className="space-y-1">
          <label className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Current password
          </label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="••••••••"
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
            New password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••"
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
            onClick={update}
            disabled={status === "saving"}
            className="px-6 py-2 rounded-xl text-white transition disabled:opacity-50"
            style={{ background: "var(--color-primary)" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "var(--color-primary-hover)")}
            onMouseOut={(e)  => (e.currentTarget.style.background = "var(--color-primary)")}
          >
            {status === "saving" ? "Updating..." : "Update password"}
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