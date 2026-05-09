"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { Eye, Clock, MapPin, FileText, AlertTriangle, Navigation } from "lucide-react";

const mistakes = [
  {
    icon: Eye,
    number: "01",
    title: "Fejllæsning af situationsbilleder",
    description:
      "Du ser billedet men overser cyklisten i kanten, barnet bag den parkerede bil eller skiltet delvist skjult af grene. Scan hele billedet - ikke bare midten.",
  },
  {
    icon: Clock,
    number: "02",
    title: "For hurtige svar under tidspres",
    description:
      "Du ved svaret - men klikker forkert. Teoriprøven har god tid per spørgsmål. Læs altid alle svarmuligheder igennem, selv hvis det første virker oplagt.",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Vigepligt i vejkryds",
    description:
      "Mange kan reglerne isoleret, men fejler når de kombineres i en konkret situation. Hajtænder, stiplede linjer og placering i rundkørsler testes ofte sammen.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Fejlfortolkning af færdselstavler",
    description:
      "Tavler der ligner hinanden visuelt kan have vidt forskellig betydning. Især supplerende tavler under hovedtavlen overses ofte og ændrer budskabet fuldstændig.",
  },
  {
    icon: Navigation,
    number: "05",
    title: "Placering og svingning",
    description:
      "Spørgsmål om korrekt placering inden sving, vognbaneskift og særligt ved flerstrækede veje er klassiske fælder - reglerne er præcise og kræver forståelse.",
  },
  {
    icon: AlertTriangle,
    number: "06",
    title: "Alkohol- og promillegrænser",
    description:
      "Mange husker ikke de nøjagtige grænser for nye og erfarne bilister, eller hvornår kørselsforbud træder i kraft. Det er konkret viden der testes direkte.",
  },
];

const TheoryMistakesSection = () => {
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
            Undgå fejlene
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            De mest almindelige fejl til teoriprøven
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            De fleste fejl handler ikke om manglende viden - men om opmærksomhed, tempo og forståelse af kombinerede situationer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mistakes.map((m, index) => {
            const Icon = m.icon;
            const isFirst = index === 0;

            return (
              <div
                key={m.number}
                className="rounded-2xl border-2 p-6 flex flex-col gap-4"
                style={{
                  borderColor: isFirst ? "var(--color-yellow)" : "var(--color-border)",
                  backgroundColor: isFirst ? "rgba(var(--color-yellow-rgb), 0.03)" : "var(--color-bg)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: isFirst ? "var(--color-yellow)" : "rgba(var(--color-yellow-rgb), 0.08)",
                      border: isFirst ? "none" : "2px solid var(--color-border)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: isFirst ? "#fff" : "var(--color-text-secondary)" }}
                    />
                  </div>
                  <span
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: isFirst ? "var(--color-yellow)" : "var(--color-text-secondary)" }}
                  >
                    {m.number}
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
