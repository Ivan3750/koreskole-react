"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "@/app/i18n";

function PackageSection() {
  const { t } = useTranslation();
  const packageItems = t("prices.package.items", { returnObjects: true }) as { title: string; text: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      <div className="space-y-5">
        <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "var(--color-yellow)" }}>
          {t("prices.package.badge", "Lovpakken")}
        </span>
        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
          style={{ color: "var(--color-text)" }}
        >
          {t("prices.package.title")}
        </h2>
        <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
          {t("prices.package.text")}
        </p>
        <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
          {t("prices.package.seo")}
        </p>
      </div>

      <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>
        {packageItems.map((item, i) => (
          <div key={i} className="py-1">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left"
            >
              <div className="flex items-center gap-4">
                <span
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: openIndex === i ? "var(--color-yellow)" : "var(--color-bg-elevated)",
                    color: openIndex === i ? "#000" : "var(--color-text-secondary)",
                    border: openIndex === i ? "none" : "2px solid var(--color-border)",
                  }}
                >
                  {i + 1}
                </span>
                <span className="font-semibold text-base" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </span>
              </div>
              <span
                className="text-xl flex-shrink-0 transition-transform duration-200"
                style={{ color: "var(--color-yellow)", transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            {openIndex === i && (
              <p className="pb-4 pl-12 normal-text" style={{ color: "var(--color-text-secondary)" }}>
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default PackageSection;