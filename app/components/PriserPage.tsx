"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

export default function PriserPage() {
  const { t } = useTranslation();

  const packageFeatures = t("prices.package.features", { returnObjects: true }) as string[];
  const packageTable = t("prices.package.table", { returnObjects: true }) as any[];
  const extraPayments = t("prices.extra.table", { returnObjects: true }) as any[];
  const regainFeatures = t("prices.regain.features", { returnObjects: true }) as string[];
  const regainTypes = t("prices.regain.types", { returnObjects: true }) as any[];

  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* HERO / LOVPAKKE */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              {t("prices.package.badge")}
            </span>

            <h1 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
              {t("prices.package.title")}
            </h1>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {t("prices.package.description")}
            </p>

            <div className="text-5xl font-bold" style={{ color: "var(--color-yellow)" }}>
              {t("prices.package.price")}
            </div>

            <button
              className="px-6 py-3 rounded-xl font-semibold"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
              {t("prices.package.cta")}
            </button>

            <ul className="space-y-2 text-base pt-4">
              {packageFeatures.map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: "var(--color-yellow)" }}>✓</span>
                  <span style={{ color: "var(--color-text)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

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
        </section>

        {/* LOVPAKKE TABEL */}
        <section className="space-y-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold">{t("prices.package.includesTitle")}</h2>
            <p>{t("prices.package.includesSubtitle")}</p>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-[var(--color-bg-elevated)]">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-4">{t("prices.table.service")}</th>
                  <th className="p-4 text-right">{t("prices.table.price")}</th>
                </tr>
              </thead>
              <tbody>
                {packageTable.map((row) => (
                  <tr key={row.name}>
                    <td className="p-4">{row.name}</td>
                    <td className="p-4 text-right font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* EXTRA BETALINGER */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{t("prices.extra.title")}</h3>

            <div className="rounded-2xl overflow-hidden border bg-[var(--color-bg-elevated)]">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4">{t("prices.table.service")}</th>
                    <th className="p-4 text-right">{t("prices.table.price")}</th>
                  </tr>
                </thead>
                <tbody>
                  {extraPayments.map((row) => (
                    <tr key={row.name}>
                      <td className="p-4">{row.name}</td>
                      <td className="p-4 text-right font-semibold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* GENERHVERVELSE */}
        <section className="space-y-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{t("prices.regain.title")}</h2>

              <p className="text-lg">{t("prices.regain.description")}</p>

              <div className="text-5xl font-bold text-yellow-500">
                {t("prices.regain.price")}
              </div>

              <ul className="space-y-2">
                {regainFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-yellow-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image src="/images/driving-modern.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          {/* TYPER */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">{t("prices.regain.typesTitle")}</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {regainTypes.map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border bg-[var(--color-bg-elevated)]">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}