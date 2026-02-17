"use client";

import Image from "next/image";

export const DrivingExperience = () => {
  return (
    <section
      className="py-32"
      style={{ backgroundColor: "var(--color-muted)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/driving.jpg"
            alt="Køretime i Vejle"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-text)" }}
          >
            En moderne køreoplevelse
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Når du tager kørekort i Vejle hos os, lærer du at køre i moderne,
            sikre og komfortable biler med den nyeste teknologi.
          </p>

          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Vi træner dig i realistiske trafiksituationer i Vejle, så du er
            fuldt forberedt til både køreprøven og selvstændig kørsel.
          </p>
        </div>
      </div>
    </section>
  );
};
