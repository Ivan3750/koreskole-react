"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { Check, X } from "lucide-react";

const GearSection = () => {
  const { t } = useTranslation();

  const rows = t("gear.rows", { returnObjects: true }) as {
    topic: string;
    manual: { value: string; note: string; ok?: boolean };
    auto: { value: string; note: string; ok?: boolean };
  }[];

   const okFlags = [
    { manual: false, auto: true },
    { manual: true, auto: false },
    { manual: false, auto: true },
    { manual: false, auto: true },
    { manual: true, auto: false },
  ];

  const choosers = t("gear.choosers", { returnObjects: true }) as {
    type: string;
    fits: string[];
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
            {t("gear.badge")}
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {t("gear.title")}
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("gear.description")}
          </p>
        </div>

        {/* Comparison table */}
        <div
          className="rounded-2xl border-2 overflow-hidden mb-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-[1fr_1fr_1fr] border-b-2 px-6 py-3"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "rgba(var(--color-yellow-rgb), 0.05)",
            }}
          >
            {(["topic", "manual", "auto"] as const).map((key) => (
              <span
                key={key}
                className={`text-xs font-bold uppercase tracking-widest ${key !== "topic" ? "text-center" : ""}`}
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t(`gear.tableHeaders.${key}`)}
              </span>
            ))}
          </div>

          {/* Table rows */}
          {rows.map((row, i) => {
            const isLast = i === rows.length - 1;
            const flags = okFlags[i];
            const cols = [
              { ...row.manual, ok: flags.manual },
              { ...row.auto, ok: flags.auto },
            ];

            return (
              <div
                key={i}
                className="grid grid-cols-[1fr_1fr_1fr] items-start gap-4 px-6 py-4"
                style={{
                  borderBottom: isLast ? "none" : "2px solid var(--color-border)",
                  backgroundColor:
                    i % 2 === 0
                      ? "var(--color-bg)"
                      : "rgba(var(--color-yellow-rgb), 0.015)",
                }}
              >
                <span
                  className="font-semibold text-sm pt-0.5"
                  style={{ color: "var(--color-text)" }}
                >
                  {row.topic}
                </span>

                {cols.map((col, j) => (
                  <div key={j} className="flex flex-col items-center text-center gap-1">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: col.ok
                            ? "rgba(var(--color-yellow-rgb), 0.1)"
                            : "rgba(150,150,150,0.1)",
                        }}
                      >
                        {col.ok ? (
                          <Check className="w-3 h-3" style={{ color: "var(--color-yellow)" }} />
                        ) : (
                          <X className="w-3 h-3" style={{ color: "var(--color-text-secondary)" }} />
                        )}
                      </div>
                      <span
                        className="font-semibold text-sm"
                        style={{
                          color: col.ok
                            ? "var(--color-text)"
                            : "var(--color-text-secondary)",
                        }}
                      >
                        {col.value}
                      </span>
                    </div>
                    <span
                      className="text-xs leading-snug"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {col.note}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Chooser cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {choosers.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 p-6"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg)",
              }}
            >
              <p className="font-bold text-base mb-4" style={{ color: "var(--color-text)" }}>
                {t("gear.chooserLabel", { type: "" }).split("{{type}}")[0]}
                <span style={{ color: "var(--color-yellow)" }}>{c.type}</span>
                {t("gear.chooserLabel", { type: "" }).split("{{type}}")[1]}
              </p>
              <div className="space-y-2.5">
                {c.fits.map((fit, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--color-yellow)" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#fff" }} />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {fit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GearSection;