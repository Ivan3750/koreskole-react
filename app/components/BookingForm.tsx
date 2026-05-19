"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import Link from "next/link";
import "@/app/i18n";
import { BASE_URL } from "@/app/lib/api";

interface BookingFormProps {
  holdId: number;
  holdDate: string;
  holdTime: string;
  holdDays: string;
  onClose: () => void;
}

interface Toast {
  type: "success" | "error";
  message: string;
}

const validateName = (name: string, t: TFunction): string | null => {
  if (!name.trim()) return null;
  if (name.trim().length < 2) return t("validation.nameTooShort");
  if (!/^[\p{L}\s'-]+$/u.test(name.trim())) return t("validation.nameInvalidChars");
  return null;
};

const validateEmail = (email: string, t: TFunction): string | null => {
  if (!email.trim()) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return t("validation.emailInvalid");
  return null;
};

const validatePhone = (phone: string, t: TFunction): string | null => {
  if (!phone.trim()) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return t("validation.phoneTooShort");
  if (!/^[+\d\s\-()]+$/.test(phone.trim())) return t("validation.phoneInvalidFormat");
  return null;
};

const validateBirthday = (birthday: string, t: TFunction): string | null => {
  if (!birthday) return null;
  const dob = new Date(birthday);
  if (isNaN(dob.getTime())) return t("validation.dateInvalid");
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  if (age < 16) return t("validation.ageTooYoung");
  if (age > 120) return t("validation.dateOutOfRange");
  return null;
};

const ToastNotification: React.FC<{ toast: Toast; onDismiss: () => void }> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4500);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          padding: "16px 20px",
          borderRadius: "12px",
          maxWidth: "360px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
          background: toast.type === "success" ? "#0f2a1a" : "#2a0f0f",
          border: `1px solid ${toast.type === "success" ? "#22c55e44" : "#ef444444"}`,
          animation: "slideInRight 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <span style={{ fontSize: "20px", flexShrink: 0, marginTop: "1px" }}>
          {toast.type === "success" ? "✓" : "✕"}
        </span>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontWeight: 600, fontSize: "14px", color: toast.type === "success" ? "#4ade80" : "#f87171" }}>
            {toast.type === "success" ? "Success" : "Error"}
          </p>
          <p style={{ margin: "2px 0 0", fontSize: "13px", color: "#ccc", lineHeight: 1.4 }}>
            {toast.message}
          </p>
        </div>
        <button
          onClick={onDismiss}
          style={{ background: "none", border: "none", color: "#666", cursor: "pointer", fontSize: "16px", padding: "0", lineHeight: 1, flexShrink: 0 }}
        >
          ×
        </button>
      </div>
    </>
  );
};

const BookingForm: React.FC<BookingFormProps> = ({ holdId, holdDate, holdTime, holdDays, onClose }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "da";

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", birthday: "" });
  const [touched, setTouched] = useState({ name: false, email: false, phone: false, birthday: false });
  const [consent, setConsent] = useState(false);
  const [consentTouched, setConsentTouched] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [loading, setLoading] = useState(false);

  const errors = {
    name: validateName(formData.name, t),
    email: validateEmail(formData.email, t),
    phone: validatePhone(formData.phone, t),
    birthday: validateBirthday(formData.birthday, t),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (name: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, birthday: true });
    setConsentTouched(true);

    if (!formData.name.trim()) { showToast("error", t("bookingForm.nameRequired")); return; }
    if (errors.name) { showToast("error", errors.name); return; }
    if (!formData.email.trim()) { showToast("error", t("bookingForm.emailRequired")); return; }
    if (errors.email) { showToast("error", errors.email); return; }
    if (errors.phone) { showToast("error", errors.phone); return; }
    if (errors.birthday) { showToast("error", errors.birthday); return; }
    if (!consent) { showToast("error", t("bookingForm.consentRequired")); return; }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/book.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hold_id: holdId, hold_date: holdDate, hold_time: holdTime, hold_days: holdDays, ...formData }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast("success", t("bookingForm.success"));
        setTimeout(onClose, 2000);
      } else {
        showToast("error", data.error || t("bookingForm.error"));
      }
    } catch {
      showToast("error", t("bookingForm.serverError"));
    } finally {
      setLoading(false);
    }
  };

  const maxBirthdayDate = (() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 16);
    return d.toISOString().split("T")[0];
  })();

  return (
    <>
      {toast && <ToastNotification toast={toast} onDismiss={() => setToast(null)} />}

      <div
        className="fixed inset-0 flex justify-center items-center z-50 px-4"
        style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      >
        <div
          className="relative w-full max-w-md p-8"
          style={{
            background: "var(--color-bg)",
            color: "var(--color-text)",
            borderRadius: "var(--radius)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-2)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl transition-opacity hover:opacity-70"
            style={{ color: "var(--color-text-secondary)" }}
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-3">{t("bookingForm.heading")}</h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <FormField
              label={`${t("bookingForm.name")} *`}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onFieldBlur={() => handleBlur("name")}
              error={touched.name ? errors.name : null}
            />
            <FormField
              label={`${t("bookingForm.email")} *`}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onFieldBlur={() => handleBlur("email")}
              error={touched.email ? errors.email : null}
            />
            <FormField
              label={t("bookingForm.phone")}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onFieldBlur={() => handleBlur("phone")}
              error={touched.phone ? errors.phone : null}
            />
            <FormField
              label={t("bookingForm.birthday")}
              name="birthday"
              type="date"
              value={formData.birthday}
              onChange={handleChange}
              onFieldBlur={() => handleBlur("birthday")}
              error={touched.birthday ? errors.birthday : null}
              max={maxBirthdayDate}
            />

            <label className="flex items-start gap-3 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => { setConsent(e.target.checked); setConsentTouched(true); }}
                className="mt-1 shrink-0 w-4 h-4 cursor-pointer accent-yellow-400"
              />
              <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {t("bookingForm.consentPrefix")}{" "}
                <Link href={`/${locale}/privatlivspolitik`} target="_blank" className="underline underline-offset-2 transition-opacity hover:opacity-70" style={{ color: "var(--color-text)" }}>
                  {t("bookingForm.consentPrivacy")}
                </Link>{" "}
                {t("bookingForm.consentAnd")}{" "}
                <Link href={`/${locale}/handelsbetingelser`} target="_blank" className="underline underline-offset-2 transition-opacity hover:opacity-70" style={{ color: "var(--color-text)" }}>
                  {t("bookingForm.consentTerms")}
                </Link>
                .
              </span>
            </label>

            {consentTouched && !consent && (
              <p className="text-xs" style={{ color: "var(--color-danger)", marginTop: "2px" }}>
                {t("bookingForm.consentRequired")}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
              style={{
                background: loading ? "var(--color-border)" : "var(--color-primary)",
                color: "#111",
                borderRadius: "calc(var(--radius) - 6px)",
                boxShadow: "var(--shadow-1)",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "..." : t("bookingForm.submit")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFieldBlur: () => void;
  error: string | null;
  max?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, onChange, onFieldBlur, error, max }) => {
  const [focused, setFocused] = useState(false);

  const borderColor = focused
    ? error ? "var(--color-danger)" : "var(--color-primary)"
    : error ? "var(--color-danger)" : "var(--color-border)";

  const boxShadow = focused
    ? error ? "0 0 0 3px rgba(239,68,68,0.15)" : "0 0 0 3px rgba(242,183,5,0.15)"
    : "none";

  return (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        max={max}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => { setFocused(false); onFieldBlur(); }}
        className="w-full px-4 py-3 outline-none transition-all duration-200"
        style={{
          background: "var(--color-input-bg)",
          color: "var(--color-text)",
          border: `1px solid ${borderColor}`,
          borderRadius: "calc(var(--radius) - 8px)",
          boxShadow,
        }}
      />
      {error && (
        <p className="text-xs mt-1" style={{ color: "var(--color-danger)" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default BookingForm;