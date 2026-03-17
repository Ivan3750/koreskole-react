"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

export default function PriserPage() {
  const { t } = useTranslation();

  const packageItems = t("prices_section.package.items", {
    returnObjects: true,
  }) as string[];

  const extras = t("prices_section.extras.items", {
    returnObjects: true,
  }) as { name: string; price: string }[];

  const benefits = t("prices_section.benefits.items", {
    returnObjects: true,
  }) as string[];

  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* ===== MAIN PACKAGE ===== */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="/images/driving-modern.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="/images/student-modern.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-2xl overflow-hidden col-span-2">
              <Image src="/images/payment-modern.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">

            <span
              className="px-4 py-1 rounded-full text-sm font-semibold"
              style={{
                background: "var(--color-yellow-2)",
                color: "var(--color-yellow-8)",
              }}
            >
              {t("prices_section.package.badge")}
            </span>

            <h1 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
              {t("prices_section.package.title")}
            </h1>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {t("prices_section.package.description")}
            </p>

            <div className="text-5xl font-bold" style={{ color: "var(--color-yellow)" }}>
              {t("prices_section.package.price")}
            </div>

            <ul className="space-y-2 text-base">
              {packageItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: "var(--color-yellow)" }}>✓</span>
                  <span style={{ color: "var(--color-text)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/koerekort-b/forloeb/"
              className="px-8 py-3 rounded-xl font-semibold transition hover:scale-[1.03]"
              style={{
                background: "var(--color-yellow)",
                color: "white",
              }}
            >
              {t("prices_section.package.cta")}
            </a>

          </div>
        </section>

        {/* ===== EXTRA / PAYMENT / VALUE ===== */}
        <section className="grid lg:grid-cols-3 gap-8">

          {/* Extras */}
          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3 className="text-xl font-bold">
              {t("prices_section.extras.title")}
            </h3>

            {extras.map((item) => (
              <div key={item.name} className="flex justify-between">
                <span style={{ color: "var(--color-text-secondary)" }}>
                  {item.name}
                </span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Payment */}
          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              background: "var(--color-yellow-1)",
              border: "1px solid var(--color-yellow-3)",
            }}
          >
            <h3 className="text-xl font-bold">
              {t("prices_section.payment.title")}
            </h3>

            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("prices_section.payment.description")}
            </p>

            <div className="space-y-2 font-semibold">
              <div>{t("prices_section.payment.option1")}</div>
              <div>{t("prices_section.payment.option2")}</div>
            </div>
          </div>

          {/* Benefits */}
          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3 className="text-xl font-bold">
              {t("prices_section.benefits.title")}
            </h3>

            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("prices_section.benefits.description")}
            </p>

            <ul className="space-y-2">
              {benefits.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>
          </div>

        </section>
      </div>
    </div>
  );
}