"use client";

import React from "react";

const Timeline = () => {
  const steps = [
    {
      number: "01",
      title: "Intromøde og tilmelding",
      description:
        "Start med et uforpligtende møde, hvor du lærer forløbet at kende. Efter tilmelding får du din lektionsplan og kørelærer.",
    },
    {
      number: "02",
      title: "Teoriundervisning",
      description:
        "Teori én gang om ugen med ubegrænset adgang — så du kan blive helt tryg og klar til prøven.",
    },
    {
      number: "03",
      title: "Førstehjælp & lægeerklæring",
      description:
        "8 timers færdselsrelateret førstehjælp samt lægeerklæring inden teoriprøven.",
    },
    {
      number: "04",
      title: "Manøvregård",
      description:
        "Første kørsel på lukket bane, hvor du lærer bilens grundlæggende kontrol.",
    },
    {
      number: "05",
      title: "Køretimer i trafikken",
      description:
        "Du kører i rigtig trafik og omsætter teori til praksis sammen med din lærer.",
    },
    {
      number: "06",
      title: "Køreteknisk anlæg",
      description:
        "Træn bremsning, kontrol og risikosituationer i sikre omgivelser.",
    },
    {
      number: "07",
      title: "Teoriprøve",
      description:
        "Online øvelser og afsluttende prøve hos politiet.",
    },
    {
      number: "08",
      title: "Køreprøve",
      description:
        "Den sidste test — bestå og få dit kørekort i hånden.",
    },
  ];

  return (
    <section
      className="py-20"
      style={{ background: "var(--color-bg-layout)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Din vej til kørekortet
          </h2>

          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            8 klare trin fra første møde til kørekortet i hånden.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "var(--color-border)" }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-16">

                {/* Dot */}
                <div
                  className="absolute left-0 top-1 w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                  style={{
                    background: "var(--color-yellow)",
                    color: "white",
                  }}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="p-6 rounded-2xl border"
                  style={{
                    background: "var(--color-bg)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;