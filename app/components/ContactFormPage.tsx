"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "25 00 00 00",
      href: "tel:25000000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "lønbæks@gmail.com",
      href: "mailto:lønbæks@gmail.com",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Vestre Engvej 7\n7100 Vejle",
      href: "https://maps.google.com/?q=Vestre+Engvej+7,+7100+Vejle",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
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
              Kontakt
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Lad os tage en snak
            </h2>

            <p
              className="leading-relaxed mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Har du spørgsmål om køreuddannelse, priser eller tilmelding?
              Ring eller skriv — vi svarer hurtigt og ærligt.
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
              className="space-y-6  backdrop-blur-sm p-10 rounded-3xl border"
              style={{ borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-elevated)",
             }}
            >
              {success && (
                <div className="text-green-600 font-semibold mb-4">
                  Tak! Din besked er sendt.
                </div>
              )}

              <div>
                <label
                  className="block mb-2 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Navn
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dit navn"
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
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Din e-mail"
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
                  Besked
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Skriv din besked her"
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
                style={{ backgroundColor: "var(--color-yellow)", color: "white" }}
              >
                Send besked
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
