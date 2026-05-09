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

const items = [
  {
    icon: Eye,
    title: "Spejlbrug og skulder-kig",
    text: "Aktiv brug af alle spejle og drejet skulder ved vognbaneskift og svingning.",
  },
  {
    icon: Navigation,
    title: "Placering på vejen",
    text: "Korrekt placering inden sving, i rundkørsler og på flerstrækede veje.",
  },
  {
    icon: Gauge,
    title: "Hastighedstilpasning",
    text: "Hold grænsen — og sæt farten ned i tide ved kryds og usikre situationer.",
  },
  {
    icon: TriangleAlert,
    title: "Reaktion på det uventede",
    text: "Opdager og reagerer du korrekt på cyklister, fodgængere og biler der bremser pludseligt?",
  },
  {
    icon: ArrowLeftRight,
    title: "Blinklys i tide",
    text: "Tegn gives i god tid — ikke samtidig med at du svinger. Tydelig og rettidig signalering.",
  },
  {
    icon: ShieldCheck,
    title: "Vigepligt og krydsadfærd",
    text: "Fejl i kryds er den hyppigste årsag til dumpning. Censoren følger hvert kryds nøje.",
  },
  {
    icon: RefreshCw,
    title: "Vendinger og bakkemanøvrer",
    text: "Rolig og kontrolleret udførelse tæller mere end hastighed. Typisk en trepunktsvendig.",
  },
  {
    icon: Handshake,
    title: "Samspil med trafikanter",
    text: "Hensynsfuld og tydelig adfærd overfor cyklister, fodgængere og andre bilister.",
  },
];

const ExamChecklistSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left lg:sticky lg:top-32">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              Køreprøven
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              8 ting censoren kigger efter
            </h2>

            <p
              className="normal-text text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Censoren bruger en fast tjekliste under hele køreprøven. Kend punkterne inden du sætter dig bag rattet — så ved du præcist hvad der vurderes.
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => {
              const Icon = item.icon;
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
                    style={{
                      backgroundColor: "var(--color-yellow)",
                    }}
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
