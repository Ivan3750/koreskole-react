"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import {
  MessageCircle,
  Target,
  CalendarCheck,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Forstå hvad der gik galt",
    text: "Censoren giver en mundtlig tilbagemelding direkte efter prøven. Lyt nøje - det er præcist de punkter vi arbejder videre med.",
  },
  {
    icon: Target,
    step: "02",
    title: "Fokuseret gennemgang med din kørelærer",
    text: "Vi gennemgår fejlene konkret og laver en plan for de næste lektioner. Ingen generel kørsel - kun det der manglede.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Book en ny prøve og kør den roligt",
    text: "Du kan booke en ny prøve inden for få uger. De fleste elever består ved anden forsøg - med den rette forberedelse.",
  },
];

const facts = [
  { value: "~40%", label: "dumper første gang" },
  { value: "2–3 uger", label: "til næste prøve" },
  { value: "1–3", label: "ekstra lektioner typisk nok" },
];

const ExamFailSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest pr-4 pt-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              Ingen panik
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              Ikke bestået?
            </h2>

            <p
              className="normal-text text-lg mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Det sker for mange - og det er ikke enden på verden. Næsten 40% dumper til køreprøven første gang. Det vigtigste er at forstå præcist hvad der gik galt og rette det målrettet.
            </p>

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

          <div className="space-y-4">
            {steps.map((s, index) => {
              const Icon = s.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={s.step} className="relative">
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
                          Trin {s.step}
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
