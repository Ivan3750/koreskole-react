"use client";

import React from "react";
import { CheckCircle, Clock, Book, Car, MapPin, Snowflake } from "lucide-react";

const KoerekortB = () => {
  const lovpakkeItems = [
    {
      id: 1,
      icon: Book,
      title: "Teoriundervisning",
      subtitle: "28 lektioner",
      items: [
        "Trafikregler",
        "Hastighedsgrænser",
        "Vigepligt",
        "Færdselssikkerhed",
      ],
    },
    {
      id: 2,
      icon: Car,
      title: "Kørelektioner",
      subtitle: "24 lektioner à 45 min",
      items: [
        "Grundlæggende bilføring",
        "Parkering",
        "Kørsel i tæt trafik",
        "Motorvejskørsel",
      ],
    },
    {
      id: 3,
      icon: MapPin,
      title: "Manøvrebane",
      subtitle: "Praktisk træning",
      items: ["Baglæns parkering", "Vendinger", "Nødbremsning"],
    },
    {
      id: 4,
      icon: Snowflake,
      title: "Glatbane",
      subtitle: "Vinterføreforhold",
      items: ["Underkøling", "Aquaplaning", "Kontrol ved sne/is"],
    },
  ];

  const timeline = [
    {
      step: 1,
      title: "Start teoriundervisning",
      duration: "4 uger",
    },
    {
      step: 2,
      title: "Tag teoriprøve",
      duration: "Book så snart du er klar",
    },
    {
      step: 3,
      title: "Intensiv kørelektioner",
      duration: "6-8 uger",
    },
    {
      step: 4,
      title: "Køreprøve",
      duration: "Når du er fuldt forberedt",
    },
  ];

  const benefits = [
    "15 års erfaring i Vejle",
    "Lokale instruktører",
    "92% beståprocent",
    "Moderne biler",
    "Fleksible tider",
    "Afbetaling mulig",
  ];

  return (
    <div style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Hero Section */}
      <section className="py-24 max-w-6xl m-auto">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: "var(--color-yellow)" }}
            >
              Kørekort kategori B
            </span>
            <h1
              className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Hvad er kørekort B?
            </h1>
            <p
              className="normal-text text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Kørekort kategori B giver dig lov til at køre personbil op til
              3.500 kg med plads til maksimalt 9 personer inklusiv føreren. Det
              er det mest almindelige kørekort i Danmark og giver dig frihed
              til at køre almindelige personbiler, små varevogne og biler med
              påhængsvogn op til 750 kg.
            </p>
          </div>
        </div>
      </section>

      {/* Lovpakke */}
      <section className="py-16 max-w-6xl m-auto">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Hvad indeholder vores lovpakke?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lovpakkeItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border-2 p-6"
                  style={{
                    backgroundColor: "var(--color-bg-elevated)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "rgba(250, 204, 21, 0.15)",
                      color: "var(--color-yellow)",
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.subtitle}
                  </p>
                  <ul className="space-y-2">
                    {item.items.map((listItem, idx) => (
                      <li
                        key={idx}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span
                          className="mt-0.5"
                          style={{ color: "var(--color-yellow)" }}
                        >
                          •
                        </span>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     

      {/* Tidslinje */}
      <section className="py-16 max-w-6xl m-auto">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Hvor lang tid tager det at få kørekort?
            </h2>
            <p
              className="normal-text"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Gennemsnitligt forløb: <strong>3-4 måneder</strong>
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, idx) => (
              <div
                key={item.step}
                className="rounded-2xl border-2 p-6 flex items-start gap-6"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg"
                  style={{
                    backgroundColor: "var(--color-yellow)",
                    color: "var(--color-bg)",
                  }}
                >
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p
              className="normal-text"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Vores rekord: <strong>8 uger (intensivt forløb)</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Hvorfor vælge os */}
      <section className="py-16 max-w-6xl m-auto">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Hvorfor vælge Køreskole Vejle?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-2xl border-2 p-6 flex items-center gap-4"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                <CheckCircle
                  className="w-6 h-6 flex-shrink-0"
                  style={{ color: "var(--color-yellow)" }}
                />
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#booking"
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold text-lg transition hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--color-yellow)",
                color: "var(--color-bg)",
              }}
            >
              Tilmeld dig i dag
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KoerekortB;