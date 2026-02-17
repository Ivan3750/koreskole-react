"use client";

import Link from "next/link";

export const ProcessOverview = () => {
  const steps = [
    {
      step: "01",
      title: "Teoriundervisning",
      text: "Grundig og struktureret teoriundervisning i Vejle med fokus på forståelse.",
    },
    {
      step: "02",
      title: "Køretimer",
      text: "Praktisk træning i bykørsel, motorvej og manøvrer.",
    },
    {
      step: "03",
      title: "Teoriprøve",
      text: "Vi forbereder dig grundigt, så du består første gang.",
    },
    {
      step: "04",
      title: "Køreprøve",
      text: "Afsluttende praktisk prøve i Vejle med fuld støtte fra din kørelærer.",
    },
  ];

  return (
    <section
      className="py-32"
      style={{ backgroundColor: "var(--color-muted)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-24"
          style={{ color: "var(--color-text)" }}
        >
          Sådan tager du kørekort i Vejle
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <div key={i} className="space-y-6">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--color-yellow)" }}
              >
                {s.step}
              </div>

              <h3 className="text-xl font-semibold">{s.title}</h3>

              <p style={{ color: "var(--color-text-secondary)" }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/koerekort-b/"
            className="inline-block px-10 py-4 rounded-full font-semibold"
            style={{
              backgroundColor: "var(--color-yellow)",
              color: "white",
            }}
          >
            Læs mere om kørekort B forløbet →
          </Link>
        </div>
      </div>
    </section>
  );
};
