"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

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
      href: "https://maps.google.com/?q=Lønbæks+Køreskole,+Vestre+Engvej+7,+7100+Vejle",
      
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="kontakt"
      className="py-24 max-w-6xl m-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto px-6">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT CONTACT INFO */}
          <div>
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: "var(--color-yellow)" }}
            >
              {t("contact.label")}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t("contact.heading")}
            </h2>

            <p
              className="leading-relaxed mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
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
                      className="font-semibold whitespace-pre-line group-hover:underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 backdrop-blur-sm p-10 rounded-3xl border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-elevated)",
              }}
            >
              {success && (
                <div className="text-green-600 font-semibold">
                  {t("contact_page.successMessage")}
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
                className="w-full py-4 rounded-full font-semibold hover:scale-[1.02] transition"
                style={{
                  backgroundColor: "var(--color-yellow)",
                  color: "white",
                }}
              >
                {t("contact_page.submitButton")}
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* MAP */}
          <div
            className="rounded-2xl overflow-hidden border-2 h-80"
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              borderColor: "var(--color-border)",
            }}
          >
            <iframe
              src="https://maps.google.com/?q=Lønbæks+Køreskole+Vejle&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* HOURS */}
          <div
            className="rounded-2xl border-2 p-6 flex flex-col justify-around"
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock
                className="w-5 h-5"
                style={{ color: "var(--color-yellow)" }}
              />
              <h3
                className="font-semibold text-lg"
                style={{ color: "var(--color-text)" }}
              >
                {t("contact.hoursTitle")}
              </h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-secondary)" }}>
                  Teoriundervisning
                </span>
                <span style={{ color: "var(--color-text)" }}>
                  {t("contact.hours.theory")}
                </span>
              </div>

              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-secondary)" }}>
                  Køretimer
                </span>
                <span style={{ color: "var(--color-text)" }}>
                  {t("contact.hours.driving")}
                </span>
              </div>

              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-secondary)" }}>
                  Telefontid
                </span>
                <span style={{ color: "var(--color-text)" }}>
                  {t("contact.hours.phone")}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;