"use client";

import { useTranslation } from "react-i18next";
import "@/app/i18n";
import {
  BookOpen,
  Car,
  Gauge,
  Snowflake,
  KeyRound,
  FileText,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

const items = [
  {
    icon: BookOpen,
    titleKey: "prices.package.itemsData.theory.title",
    descriptionKey: "prices.package.itemsData.theory.description",
    detailKey: "prices.package.itemsData.theory.detail",
  },
  {
    icon: Car,
    titleKey: "prices.package.itemsData.manovre.title",
    descriptionKey: "prices.package.itemsData.manovre.description",
    detailKey: "prices.package.itemsData.manovre.detail",
  },
  {
    icon: Gauge,
    titleKey: "prices.package.itemsData.lessons.title",
    descriptionKey: "prices.package.itemsData.lessons.description",
    detailKey: "prices.package.itemsData.lessons.detail",
  },
  {
    icon: Snowflake,
    titleKey: "prices.package.itemsData.snow.title",
    descriptionKey: "prices.package.itemsData.snow.description",
    detailKey: "prices.package.itemsData.snow.detail",
  },
  {
    icon: KeyRound,
    titleKey: "prices.package.itemsData.car.title",
    descriptionKey: "prices.package.itemsData.car.description",
    detailKey: "prices.package.itemsData.car.detail",
  },
  {
    icon: FileText,
    titleKey: "prices.package.itemsData.theoryFee.title",
    descriptionKey: "prices.package.itemsData.theoryFee.description",
    detailKey: "prices.package.itemsData.theoryFee.detail",
  },
  {
    icon: ClipboardList,
    titleKey: "prices.package.itemsData.application.title",
    descriptionKey: "prices.package.itemsData.application.description",
    detailKey: "prices.package.itemsData.application.detail",
  },
];

function PackageSection() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="text-center mb-12">
        <span
          className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          style={{
            color: "var(--color-yellow)",
            backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
          }}
        >
          {t("prices.package.badge", "Dit forløb")}
        </span>

        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          style={{ color: "var(--color-text)" }}
        >
          {t("prices.package.title", "Hvad indeholder lovpakken?")}
        </h2>

        <p
          className="mt-4 text-lg max-w-2xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {t("prices.package.text")}
        </p>
      </div>

      <div
        className="rounded-2xl border-2 overflow-hidden"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="grid grid-cols-[auto_1fr_auto] gap-0 px-6 py-3 border-b-2"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "rgba(var(--color-yellow-rgb), 0.06)",
          }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest col-start-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("prices.package.headers.included", "Hvad er inkluderet")}
          </span>

          <span
            className="text-xs font-bold uppercase tracking-widest text-right"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("prices.package.headers.amount", "Mængde")}
          </span>
        </div>

        {items.map((item, i) => {
          const Icon = item.icon;
          const isLast = i === items.length - 1;

          return (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4"
              style={{
                borderBottom: isLast ? "none" : "2px solid var(--color-border)",
                backgroundColor:
                  i % 2 === 0
                    ? "var(--color-bg)"
                    : "rgba(var(--color-yellow-rgb), 0.015)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.08)",
                  border: "2px solid var(--color-border)",
                }}
              >
                <Icon className="w-4 h-4" style={{ color: "var(--color-yellow)" }} />
              </div>

              <div className="min-w-0">
                <span
                  className="block font-semibold text-sm"
                  style={{ color: "var(--color-text)" }}
                >
                  {t(item.titleKey)}
                </span>

                <span
                  className="block text-xs mt-0.5 leading-snug"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t(item.descriptionKey)}
                </span>
              </div>

              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  backgroundColor: "var(--color-yellow)",
                  color: "#fff",
                }}
              >
                {t(item.detailKey)}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PackageSection;