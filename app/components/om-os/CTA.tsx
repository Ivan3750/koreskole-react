"use client";

import Link from "next/link";

export const CTA = () => {
  return (
    <section
      className="py-32 text-center"
      style={{ backgroundColor: "var(--color-yellow)" }}
    >
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Klar til at tage dit kørekort i Vejle?
        </h2>

        <p className="text-black/80 text-lg">
          Start dit kørekort B forløb hos en erfaren køreskole i Vejle.
          Vi guider dig sikkert gennem teori, manøvrer og køreprøve.
        </p>

        <Link
          href="/koerekort-b/"
          className="inline-block px-12 py-5 rounded-full font-semibold bg-black text-white"
        >
          Læs mere om kørekort B forløbet →
        </Link>
      </div>
    </section>
  );
};
