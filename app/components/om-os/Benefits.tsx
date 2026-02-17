"use client";

import { Shield, Clock, Car, Award } from "lucide-react";

export const Benefits = () => {
  const items = [
    {
      icon: Shield,
      title: "Høj beståelsesrate",
      text: "Langt de fleste af vores elever består teori- og køreprøve første gang.",
    },
    {
      icon: Clock,
      title: "Fleksible tider",
      text: "Køretimer i Vejle morgen, eftermiddag og aften.",
    },
    {
      icon: Car,
      title: "Moderne skolebiler",
      text: "Du lærer at køre i nye, sikre og komfortable biler.",
    },
    {
      icon: Award,
      title: "Lokalkendskab",
      text: "Vi kender prøveruter og trafikforhold i Vejle indgående.",
    },
  ];

  return (
    <section
      className="py-28"
      style={{ backgroundColor: "var(--color-muted)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-20"
          style={{ color: "var(--color-text)" }}
        >
          Derfor vælger elever os i Vejle
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border bg-white/60 backdrop-blur-sm"
              style={{ borderColor: "var(--color-border)" }}
            >
              <item.icon
                className="w-8 h-8 mb-6"
                style={{ color: "var(--color-yellow)" }}
              />
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
