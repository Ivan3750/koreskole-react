"use client";

import React from "react";
import Link from "next/link";
import car from "@/app/assets/gulbil.png";
const cars = [
  {
    name: "Skoda Octavia",
    year: "2024",
    image: "/path-to-skoda-image.png", // Замініть на реальний шлях
    description:
      "Skoda Octavia er vores mest populære undervisningsbil. Komfortabel, sikker og nem at håndtere for elever. Perfekt til at lære de grundlæggende kørefærdigheder. Med dual-kontrol og moderne sikkerhedssystemer er det det ideelle valg for nye bilister. Skoda Octavia kombinerer pålidelighed med en behagelig køreoplevelse, hvilket gør det til det foretrukne valg for mange af vores elever. Den er rummelig, hvilket giver både elever og instruktører god plads under køretimerne, og dens responsive håndtering gør det nemt at navigere i både bytrafik og på landeveje.",
  },
  {
    name: "Volkswagen Taigo",
    year: "2025",
    image: car.src,  
    description:
      "VW Taigo tilbyder moderne teknologi, dual-kontrol og en sikker køreoplevelse. Perfekt til nybegyndere. Med sin kompakte størrelse og responsive håndtering er Taigo ideel til at lære at navigere i bytrafik og på landeveje. Den er udstyret med avancerede sikkerhedsfunktioner, der giver både elever og instruktører ekstra tryghed under køretimerne. VW Taigo er et populært valg for elever, der ønsker en bil, der kombinerer komfort, sikkerhed og moderne teknologi i deres køretimer.",
  },
];

const CarsAlternating = () => {
  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{
              color: "var(--color-yellow)",
              backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
            }}
          >
            Kørelektioner
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Vores køretøjer
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Alle vores biler er moderne, velholdte og udstyret med de nyeste sikkerhedssystemer.  
            Vi tilbyder dual-kontrol for maksimal tryghed under køretimerne.
          </p>
        </div>

        {/* Alternating grid */}
        <div className="space-y-20">
          {cars.map((car, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Car Image */}
                <div
                  className="w-full md:w-1/2 rounded-3xl border-2 overflow-hidden"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg)",
                  }}
                >
                  <div className="aspect-video w-full flex items-center justify-center ">
                    <img
                      src={car.image}
                      alt={`${car.name} ${car.year}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h3
                    className="font-bold text-2xl"
                    style={{ color: "var(--color-text)" }}
                  >
                    {car.name}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    Årgang {car.year}
                  </p>
                  <p
                    className="text-lg text-neutral-600 leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {car.description}
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

export default CarsAlternating;
