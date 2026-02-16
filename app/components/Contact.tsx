"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
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

  return (
    <section
      id="kontakt"
      className="py-24 max-w-6xl m-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT */}
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
                    style={{
                      backgroundColor: "var(--color-yellow-bg)",
                    }}
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

            {/* CTA */}
            <a
              href="tel:23748780"
              className="inline-flex items-center justify-center mt-10 px-8 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--color-yellow)",
                color: "var(--color-bg)",
              }}
            >
              Ring nu
            </a>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden border-2 h-72"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12153.2252481922!2d9.534519930379213!3d55.71527382563587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c82509eaaa53d%3A0xfa34ac2a4dc08d4d!2sVestre%20Engvej%207%2C%207100%20Vejle!5e0!3m2!1suk!2sdk!4v1769987195463!5m2!1suk!2sdk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lønbæks Køreskole"
              />
            </div>

            {/* Hours */}
            <div
              className="rounded-2xl border-2 p-6"
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
                  Åbningstider
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Teoriundervisning
                  </span>
                  <span style={{ color: "var(--color-text)" }}>
                    Efter aftale
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Køretimer
                  </span>
                  <span style={{ color: "var(--color-text)" }}>
                    Fleksible tider
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Telefontid
                  </span>
                  <span style={{ color: "var(--color-text)" }}>
                    08:00 – 20:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
