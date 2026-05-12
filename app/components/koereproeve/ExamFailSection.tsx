"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import {
  MessageCircle,
  Target,
  CalendarCheck,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Icons are UI concerns — not translatable, mapped by index
const STEP_ICONS: LucideIcon[] = [MessageCircle, Target, CalendarCheck];
const STEP_NUMBERS = ["01", "02", "03"];

const ExamFailSection = () => {
  const { t } = useTranslation();

  const steps = t("examFail.steps", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  const facts = t("examFail.facts", { returnObjects: true }) as {
    value: string;
    label: string;
  }[];

  return (
    <section
      className="py-20 md:py-28 lg:py-40 "
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: intro + facts */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest pr-4 pt-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              {t("examFail.badge")}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("examFail.title")}
            </h2>

            <p
              className="normal-text text-lg mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("examFail.description")}
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {facts.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl border-2 px-4 py-5 text-center"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg)",
                  }}
                >
                  <span
                    className="block font-display text-2xl font-bold mb-1"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    {f.value}
                  </span>
                  <span
                    className="block text-xs leading-snug"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: step cards */}
          <div className="space-y-4">
            {steps.map((s, index) => {
              const Icon = STEP_ICONS[index];
              const isLast = index === steps.length - 1;

              return (
                <div key={index} className="relative">
                  <div
                    className="rounded-2xl border-2 px-6 py-5 flex items-start gap-4"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--color-yellow)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#fff" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: "var(--color-yellow)" }}
                        >
                          {t("examFail.stepLabel")} {STEP_NUMBERS[index]}
                        </span>
                      </div>
                      <h4
                        className="font-semibold mb-1"
                        style={{ color: "var(--color-text)" }}
                      >
                        {s.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {s.text}
                      </p>
                    </div>
                  </div>

                  {!isLast && (
                    <div
                      className="absolute left-8 -bottom-3 w-0.5 h-4 z-10"
                      style={{ backgroundColor: "var(--color-border)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExamFailSection;