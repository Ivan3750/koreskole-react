"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { BASE_URL } from "@/app/lib/api";

export default function ContactFormPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact_page.phoneLabel"),
      value: "20 76 03 33",
      href: "tel:20760333",
    },
    {
      icon: Mail,
      label: t("contact_page.emailLabel"),
      value: "hello@lønbæks.dk",
      href: "mailto:hello@lønbæks.dk",
    },
    {
      icon: MapPin,
      label: t("contact_page.addressLabel"),
      value: "Vestre Engvej 7\n7100 Vejle",
      href: "https://maps.google.com/?q=Vestre+Engvej+7,+7100+Vejle",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/book.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(t("contact_page.successMessage"));
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || t("contact_page.errorMessage"));
      }
    } catch {
      setStatus("error");
      setStatusMessage(t("contact_page.serverError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="py-24 max-w-6xl m-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: Info */}
          <div>
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: "var(--color-yellow)" }}
            >
              {t("contact_page.heading")}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t("contact_page.subheading")}
            </h2>

            <p
              className="leading-relaxed mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("contact_page.description")}
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={
                    item.icon === MapPin ? "noopener noreferrer" : undefined
                  }
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                    style={{ backgroundColor: "var(--color-yellow-bg)" }}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: "var(--color-yellow)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-sm mb-1"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="font-semibold whitespace-pre-line transition-colors group-hover:underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 backdrop-blur-sm p-10 rounded-3xl border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-elevated)",
              }}
            >
              {/* Status messages */}
              {status === "success" && (
                <div className="text-green-600 font-semibold bg-green-50 px-4 py-3 rounded-xl">
                  {statusMessage}
                </div>
              )}
              {status === "error" && (
                <div className="text-red-600 font-semibold bg-red-50 px-4 py-3 rounded-xl">
                  {statusMessage}
                </div>
              )}

              <div>
                <label
                  className="block mb-2 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("contact_page.nameLabel")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact_page.namePlaceholder")}
                  required
                  className="w-full p-4 rounded-xl border"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg-elevated)",
                  }}
                />
              </div>

              <div>
                <label
                  className="block mb-2 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("contact_page.emailLabel")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact_page.emailPlaceholder")}
                  required
                  className="w-full p-4 rounded-xl border"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg-elevated)",
                  }}
                />
              </div>

              <div>
                <label
                  className="block mb-2 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("contact_page.messageLabel")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact_page.messagePlaceholder")}
                  required
                  className="w-full p-4 rounded-xl border h-40"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg-elevated)",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full font-semibold hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ backgroundColor: "var(--color-yellow)", color: "white" }}
              >
                {loading ? t("contact_page.sending") : t("contact_page.submitButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}