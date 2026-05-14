"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { MonitorPlay, BookOpen, RotateCcw, ExternalLink } from "lucide-react";

// Icons are UI concerns - not translatable, mapped by index
const FEATURE_ICONS = [BookOpen, MonitorPlay, RotateCcw];

const TheoryPracticeSection = () => {
  const { t } = useTranslation();

  const features = t("theoryPractice.features", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <section
      className="py-20 md:py-28 lg:py-40   mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: text */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              {t("theoryPractice.badge")}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("theoryPractice.title")}
            </h2>

            <p
              className="normal-text text-lg mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("theoryPractice.text1")}
            </p>

            <p
              className="normal-text text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("theoryPractice.text2")}
            </p>
          </div>

          {/* Right: feature cards + link */}
          <div className="order-2 space-y-4">
            {features.map((f, index) => {
              const Icon = FEATURE_ICONS[index];
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
                    <Icon className="w-5 h-5" style={{ color: "#fff" }} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ color: "var(--color-text)" }}
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {f.text}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* External link card */}
            <a
              href="https://dtp.fstyr.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl border-2 px-6 py-5 transition-all duration-200 hover:shadow-md group"
              style={{
                borderColor: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.04)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                >
                  <ExternalLink className="w-5 h-5" style={{ color: "#fff" }} />
                </div>
                <div>
                  <span
                    className="block font-bold text-base"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t("theoryPractice.officialLink.title")}
                  </span>
                  <span
                    className="block text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {t("theoryPractice.officialLink.subtitle")}
                  </span>
                </div>
              </div>
              <ExternalLink
                className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "var(--color-yellow)" }}
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheoryPracticeSection;