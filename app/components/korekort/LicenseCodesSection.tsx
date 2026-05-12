"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { Lock, Unlock, UserCheck, ShieldAlert, ArrowRight, Info } from "lucide-react";
import { LucideIcon } from "lucide-react";

// Icon and type are UI concerns — not translatable, kept in component
const CODE_META: Record<string, { icon: LucideIcon; type: string }> = {
  "78":  { icon: Lock,       type: "restriction" },
  "148": { icon: Unlock,     type: "upgrade"     },
  "141": { icon: UserCheck,  type: "condition"   },
  "100": { icon: ShieldAlert, type: "admin"      },
};

const typeStyles: Record<string, { border: string; bg: string; iconBg: string; iconColor: string }> = {
  restriction: {
    border:    "var(--color-yellow)",
    bg:        "rgba(var(--color-yellow-rgb), 0.05)",
    iconBg:    "var(--color-yellow)",
    iconColor: "#fff",
  },
  upgrade: {
    border:    "var(--color-yellow)",
    bg:        "rgba(var(--color-yellow-rgb), 0.05)",
    iconBg:    "var(--color-yellow)",
    iconColor: "#fff",
  },
  condition: {
    border:    "var(--color-border)",
    bg:        "var(--color-bg)",
    iconBg:    "rgba(var(--color-yellow-rgb), 0.1)",
    iconColor: "var(--color-yellow)",
  },
  admin: {
    border:    "var(--color-border)",
    bg:        "var(--color-bg)",
    iconBg:    "rgba(var(--color-yellow-rgb), 0.1)",
    iconColor: "var(--color-yellow)",
  },
};

const LicenseCodesSection = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string>("78");

  const codes = t("licenseCodes.codes", { returnObjects: true }) as {
    code: string;
    label: string;
    description: string;
    note: string;
  }[];

  const selectedCode = codes.find((c) => c.code === selected)!;
  const meta = CODE_META[selected];
  const styles = typeStyles[meta.type];

  return (
    <section
      className="py-20 md:py-28 lg:py-40  mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: detail panel */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              {t("licenseCodes.badge")}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("licenseCodes.title")}
            </h2>

            <p
              className="normal-text mb-10 text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("licenseCodes.description")}
            </p>

            {/* Selected code card */}
            <div
              className="rounded-2xl border-2 overflow-hidden transition-all duration-300"
              style={{ borderColor: styles.border, backgroundColor: styles.bg }}
            >
              <div
                className="px-6 py-5 border-b-2 flex items-center gap-4"
                style={{ borderColor: styles.border }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: styles.iconBg }}
                >
                  {React.createElement(meta.icon, {
                    className: "w-5 h-5",
                    style: { color: styles.iconColor },
                  })}
                </div>
                <div>
                  <span
                    className="block text-2xl font-bold leading-none"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t("licenseCodes.codeLabel")} {selectedCode.code}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {selectedCode.label}
                  </span>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {selectedCode.description}
                </p>

                <div
                  className="flex items-start gap-3 rounded-xl p-4 border-2"
                  style={{
                    borderColor: "rgba(var(--color-yellow-rgb), 0.2)",
                    backgroundColor: "rgba(var(--color-yellow-rgb), 0.05)",
                  }}
                >
                  <Info
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-yellow)" }}
                  />
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {selectedCode.note}
                  </p>
                </div>

                {selected === "78" && (
                  <button
                    onClick={() => setSelected("148")}
                    className="flex items-center gap-2 text-sm font-semibold transition-opacity"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    {t("licenseCodes.link78to148")}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: code list */}
          <div className="space-y-3 content-start">
            {codes.map((c) => {
              const codeMeta = CODE_META[c.code];
              const Icon = codeMeta?.icon ?? Lock;
              const isSelected = selected === c.code;
              const isRelevant = c.code === "78" || c.code === "148";

              return (
                <button
                  key={c.code}
                  onClick={() => setSelected(c.code)}
                  className="w-full rounded-2xl p-5 border-2 text-left transition-all duration-200 flex items-center gap-4"
                  style={{
                    borderColor: isSelected ? "var(--color-yellow)" : "var(--color-border)",
                    backgroundColor: isSelected
                      ? "rgba(var(--color-yellow-rgb), 0.05)"
                      : "var(--color-bg)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: isSelected
                        ? "var(--color-yellow)"
                        : "rgba(var(--color-yellow-rgb), 0.08)",
                      border: isSelected ? "none" : "2px solid var(--color-border)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{
                        color: isSelected ? "#fff" : "var(--color-text-secondary)",
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="font-bold text-base"
                        style={{
                          color: isSelected ? "var(--color-yellow)" : "var(--color-text)",
                        }}
                      >
                        {t("licenseCodes.codeLabel")} {c.code}
                      </span>
                      {isRelevant && (
                        <span
                          className="text-xs font-bold uppercase px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "var(--color-yellow)", color: "#fff" }}
                        >
                          {t("licenseCodes.relevantLabel")}
                        </span>
                      )}
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {c.label}
                    </span>
                  </div>

                  <ArrowRight
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                    style={{
                      color: isSelected ? "var(--color-yellow)" : "var(--color-text-secondary)",
                      transform: isSelected ? "translateX(2px)" : "none",
                    }}
                  />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LicenseCodesSection;