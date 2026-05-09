"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { Settings, Car, ShieldCheck, Zap, Brain, Wallet } from "lucide-react";

const manualPoints = [
  {
    icon: ShieldCheck,
    title: "Bredt kørekort",
    text: "Du må køre alle biler — både manuel og automatisk — med ét kørekort.",
  },
  {
    icon: Settings,
    title: "Fuld kontrol",
    text: "Du styrer gear selv og føler køretøjet mere direkte — foretrukket af mange erfarne bilister.",
  },
  {
    icon: Car,
    title: "Større biludvalg",
    text: "Ældre og billigere biler er oftest manuelle — nyttigt hvis du køber brugt.",
  },
];

const autoPoints = [
  {
    icon: Brain,
    title: "Lettere at lære",
    text: "Ingen kobling eller gearskift — du bruger mere opmærksomhed på trafik og teknik.",
  },
  {
    icon: Zap,
    title: "Moderne teknologi",
    text: "Elbiler og hybridbiler er automatiske. Fremtidens biler kræver ikke manuelt gear.",
  },
  {
    icon: Wallet,
    title: "Hurtigt til målet",
    text: "Færre ting at mestre betyder typisk kortere forløb og hurtigere beståelse.",
  },
];

type Col = { title: string; points: typeof manualPoints };

const Column = ({ title, points, highlighted }: Col & { highlighted: boolean }) => (
  <div
    className="rounded-2xl border-2 overflow-hidden"
    style={{ borderColor: highlighted ? "var(--color-yellow)" : "var(--color-border)" }}
  >
    <div
      className="px-6 py-5 border-b-2"
      style={{
        borderColor: highlighted ? "var(--color-yellow)" : "var(--color-border)",
        backgroundColor: highlighted ? "rgba(var(--color-yellow-rgb), 0.05)" : "var(--color-bg)",
      }}
    >
      <h3 className="font-bold text-lg" style={{ color: "var(--color-text)" }}>
        {title}
      </h3>
    </div>

    <div className="divide-y-2" style={{ borderColor: highlighted ? "rgba(var(--color-yellow-rgb), 0.12)" : "var(--color-border)" }}>
      {points.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex items-start gap-4 px-6 py-5"
            style={{ backgroundColor: highlighted ? "rgba(var(--color-yellow-rgb), 0.02)" : "var(--color-bg)" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                backgroundColor: highlighted ? "var(--color-yellow)" : "rgba(var(--color-yellow-rgb), 0.08)",
                border: highlighted ? "none" : "2px solid var(--color-border)",
              }}
            >
              <Icon className="w-4 h-4" style={{ color: highlighted ? "#fff" : "var(--color-text-secondary)" }} />
            </div>
            <div>
              <h4 className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const GearSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 md:py-28 lg:py-40"
      style={{ backgroundColor: "var(--color-bg-secondary, var(--color-bg))" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{
              color: "var(--color-yellow)",
              backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
            }}
          >
            Bil & Gear
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Manuel vs. Automatgear
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Begge typer har fordele. Her er hvad der adskiller dem — så du kan vælge det der passer dig bedst.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Column title="Manuelt gear" points={manualPoints} highlighted={false} />
          <Column title="Automatgear" points={autoPoints} highlighted={false} />
        </div>

      </div>
    </section>
  );
};

export default GearSection;