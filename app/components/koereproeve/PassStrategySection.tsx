"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { User, Map, Eye, Heart } from "lucide-react";

const icons = [User, Map, Eye, Heart];

const PassStrategySection = () => {
  const { t } = useTranslation();

  const strategies = t("strategy.steps", { returnObjects: true }) as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="py-20 md:py-28 lg:py-40" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left lg:sticky lg:top-32">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              {t("strategy.eyebrow", "Strategi")}
            </span>
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("strategy.title")}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {t("strategy.subtitle")}
            </p>
          </div>

          <div className="space-y-3">
            {strategies.map((strategy, index) => {
              const Icon = icons[index] ?? User;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border-2 px-6 py-5"
                  style={{
                    borderColor: index === 0 ? "var(--color-yellow)" : "var(--color-border)",
                    backgroundColor: index === 0
                      ? "rgba(var(--color-yellow-rgb), 0.03)"
                      : "var(--color-bg)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: index === 0
                        ? "var(--color-yellow)"
                        : "rgba(var(--color-yellow-rgb), 0.08)",
                      border: index === 0 ? "none" : "2px solid var(--color-border)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: index === 0 ? "#fff" : "var(--color-text-secondary)" }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: index === 0 ? "var(--color-yellow)" : "var(--color-text-secondary)" }}
                      >
                        {strategy.number}
                      </span>
                    </div>
                    <h4
                      className="font-bold text-base mb-1 leading-tight"
                      style={{ color: "var(--color-text)" }}
                    >
                      {strategy.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {strategy.description}
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

export default PassStrategySection;