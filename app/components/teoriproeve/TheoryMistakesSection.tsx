"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { Eye, Clock, MapPin, FileText, AlertTriangle, Navigation } from "lucide-react";
import { LucideIcon } from "lucide-react";

// Icons are UI concerns — not translatable, mapped by index
const MISTAKE_ICONS: LucideIcon[] = [Eye, Clock, MapPin, FileText, Navigation, AlertTriangle];
const MISTAKE_NUMBERS = ["01", "02", "03", "04", "05", "06"];

const TheoryMistakesSection = () => {
  const { t } = useTranslation();

  const mistakes = t("theoryMistakes.mistakes", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section
      className="py-20 md:py-28 lg:py-40"
      style={{ backgroundColor: "var(--color-bg-secondary, var(--color-bg))" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{
              color: "var(--color-yellow)",
              backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
            }}
          >
            {t("theoryMistakes.badge")}
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {t("theoryMistakes.title")}
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("theoryMistakes.description")}
          </p>
        </div>

        {/* Mistake cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mistakes.map((m, index) => {
            const Icon = MISTAKE_ICONS[index];

            return (
              <div
                key={index}
                className="rounded-2xl border-2 p-6 flex flex-col gap-4"
                style={{
                  borderColor:  "var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "rgba(var(--color-yellow-rgb), 0.08)",
                      border: "2px solid var(--color-border)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color:  "var(--color-text-secondary)" }}
                    />
                  </div>
                  <span
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{
                      color:"var(--color-text-secondary)",
                    }}
                  >
                    {MISTAKE_NUMBERS[index]}
                  </span>
                </div>

                <div>
                  <h3
                    className="font-bold text-base mb-2 leading-snug"
                    style={{ color: "var(--color-text)" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {m.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TheoryMistakesSection;