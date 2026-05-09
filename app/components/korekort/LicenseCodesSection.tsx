"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { Lock, Unlock, UserCheck, ShieldAlert, ArrowRight, Info } from "lucide-react";

const codes = [
  {
    code: "78",
    label: "Kun automatgear",
    icon: Lock,
    description:
      "Tildeles når du har bestået køreprøven i en bil med automatgear. Kørekortet begrænser dig til kun at føre køretøjer med automatisk transmission.",
    note: "Dette er standardkoden for alle elever hos os - du kører i en VW Golf GTE.",
    type: "restriction",
  },
  {
    code: "148",
    label: "Ret til manuelt gear",
    icon: Unlock,
    description:
      "Giver dig ret til at køre manuelt gear, selvom du oprindeligt bestod prøven i en automatbil. Kræver 7 timers supplerende undervisning hos en godkendt kørelærer.",
    note: "Ønsker du fuld frihed - både automatbil og manuelbil - kan du tilføje kode 148 bagefter.",
    type: "upgrade",
  },
  {
    code: "141",
    label: "Ledsagerkørsel (17 år)",
    icon: UserCheck,
    description:
      "Påføres 17-årige der har bestået køreprøven. Koden angiver krav om ledsager under kørsel - indtil den unge fylder 18 år.",
    note: "Gælder kun for elever der starter kørekortet som 17-årige.",
    type: "condition",
  },
  {
    code: "100",
    label: "Administrativ begrænsning",
    icon: ShieldAlert,
    description:
      "En administrativ kode der kan forekomme i særlige tilfælde. Indholdet afhænger af den konkrete sag og fastsættes af politiet eller Færdselsstyrelsen.",
    note: "Denne kode er sjælden og vil altid blive forklaret ved udstedelse.",
    type: "admin",
  },
];

const typeStyles: Record<string, { border: string; bg: string; iconBg: string; iconColor: string }> = {
  restriction: {
    border: "var(--color-yellow)",
    bg: "rgba(var(--color-yellow-rgb), 0.05)",
    iconBg: "var(--color-yellow)",
    iconColor: "#fff",
  },
  upgrade: {
    border: "var(--color-yellow)",
    bg: "rgba(var(--color-yellow-rgb), 0.05)",
    iconBg: "var(--color-yellow)",
    iconColor: "#fff",
  },
  condition: {
    border: "var(--color-border)",
    bg: "var(--color-bg)",
    iconBg: "rgba(var(--color-yellow-rgb), 0.1)",
    iconColor: "var(--color-yellow)",
  },
  admin: {
    border: "var(--color-border)",
    bg: "var(--color-bg)",
    iconBg: "rgba(var(--color-yellow-rgb), 0.1)",
    iconColor: "var(--color-yellow)",
  },
};

const LicenseCodesSection = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string>("78");

  const selectedCode = codes.find((c) => c.code === selected)!;
  const styles = typeStyles[selectedCode.type];

  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              Officielle koder
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              Hvad betyder koderne på dit kørekort?
            </h2>

            <p
              className="normal-text mb-10 text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Dit danske kørekort kan indeholde koder der beskriver rettigheder, betingelser eller begrænsninger. Klik på en kode for at forstå hvad den betyder for dig.
            </p>

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
                  {React.createElement(selectedCode.icon, {
                    className: "w-5 h-5",
                    style: { color: styles.iconColor },
                  })}
                </div>
                <div>
                  <span
                    className="block text-2xl font-bold leading-none"
                    style={{ color: "var(--color-text)" }}
                  >
                    Kode {selectedCode.code}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                    {selectedCode.label}
                  </span>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {selectedCode.description}
                </p>

                <div
                  className="flex items-start gap-3 rounded-xl p-4 border-2"
                  style={{
                    borderColor: "rgba(var(--color-yellow-rgb), 0.2)",
                    backgroundColor: "rgba(var(--color-yellow-rgb), 0.05)",
                  }}
                >
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--color-yellow)" }} />
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {selectedCode.note}
                  </p>
                </div>

                {selectedCode.code === "78" && (
                  <button
                    onClick={() => setSelected("148")}
                    className="flex items-center gap-2 text-sm font-semibold transition-opacity  "
                    style={{ color: "var(--color-yellow)" }}
                  >
                    Vil du have ret til manuelt gear? Se kode 148
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-3 content-start">
            {codes.map((c) => {
              const Icon = c.icon;
              const isSelected = selected === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => setSelected(c.code)}
                  className="w-full rounded-2xl p-5 border-2 text-left transition-all duration-200 flex items-center gap-4  "
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
                      style={{ color: isSelected ? "#fff" : "var(--color-text-secondary)" }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="font-bold text-base"
                        style={{ color: isSelected ? "var(--color-yellow)" : "var(--color-text)" }}
                      >
                        Kode {c.code}
                      </span>
                      {(c.code === "78" || c.code === "148") && (
                        <span
                          className="text-xs font-bold uppercase px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "var(--color-yellow)", color: "#fff" }}
                        >
                          Relevant
                        </span>
                      )}
                    </div>
                    <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
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