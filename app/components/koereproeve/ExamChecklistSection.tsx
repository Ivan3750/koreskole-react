"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import {
  Eye,
  Navigation,
  Gauge,
  TriangleAlert,
  ArrowLeftRight,
  RefreshCw,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Icons are UI concerns - not translatable, mapped by index
const ITEM_ICONS: LucideIcon[] = [
  Eye,
  Navigation,
  Gauge,
  TriangleAlert,
  ArrowLeftRight,
  ShieldCheck,
  RefreshCw,
  Handshake,
];

const ExamChecklistSection = () => {
  const { t } = useTranslation();

  const items = t("examChecklist.items", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <section
      className="py-20 md:py-28 lg:py-40 "
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: sticky heading */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left lg:sticky lg:top-32">
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight text-balance"
              style={{ color: "var(--color-text)" }}
            >
              {t("examChecklist.title")}
            </h2>

            <p
              className="normal-text text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("examChecklist.description")}
            </p>
          </div>

          {/* Right: checklist cards */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const Icon = ITEM_ICONS[index];
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border-2 px-6 py-5"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--color-yellow)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#fff" }} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExamChecklistSection;