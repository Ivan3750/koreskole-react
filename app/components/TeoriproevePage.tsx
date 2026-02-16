"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function TeoriproevePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const proveDetails = [
    { title: "25 spørgsmål", description: "Forskellige emner fra færdselsloven" },
    { title: "Max 5 fejl", description: "Du skal have mindst 20 rigtige" },
    { title: "20 minutter", description: "Tid nok til at tænke over svarene" },
    { title: "Multiple choice", description: "Vælg det korrekte svar" },
  ];

  const tips = [
    "Læs hvert spørgsmål grundigt",
    "Øv online prøver mindst 1-2 uger",
    "Fokusér på skilte og vigepligt",
    "Forstå regler — lær ikke udenad",
    "Kom i god tid til prøven",
    "Sov godt natten før",
  ];

  const faqs = [
    {
      question: "Hvad koster teoriprøven?",
      answer: "Prøven koster 170 kr. og er inkluderet første gang.",
    },
    {
      question: "Hvornår kan jeg tage prøven?",
      answer: "Når du har gennemført teorien og føler dig klar.",
    },
    {
      question: "Får jeg svar med det samme?",
      answer: "Ja — du får resultatet lige efter prøven.",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--color-bg)" }}>

      {/* HERO */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
          Teoriprøve i Vejle
        </h1>
        <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
          Alt du skal vide for at bestå første gang.
        </p>
      </section>

      {/* MAIN CONTENT FLOW */}
      <section className="max-w-6xl mx-auto px-6 space-y-16 pb-24">

        {/* INFO GRID */}
        <div className="grid md:grid-cols-4 gap-6">
          {proveDetails.map((item, i) => (
            <div key={i} className="rounded-2xl border p-6 text-center"
              style={{ borderColor: "var(--color-border)" }}>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* LOCATION */}
        <div className="rounded-2xl border p-8"
          style={{ borderColor: "var(--color-border)" }}>
          <h2 className="text-2xl font-bold mb-4">Hvor foregår prøven?</h2>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Borgerservice Vejle — Kirketorvet 10, 7100 Vejle.
          </p>
        </div>

        {/* TIPS */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Gode råd</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-3 border rounded-xl p-4"
                style={{ borderColor: "var(--color-border)" }}>
                <div className="font-bold">{i + 1}</div>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-xl"
                style={{ borderColor: "var(--color-border)" }}>
                <button
                  className="w-full p-5 text-left font-semibold"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.question}
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-sm"
                    style={{ color: "var(--color-text-secondary)" }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/koerekort-b"
            className="px-10 py-4 rounded-full font-bold inline-block"
            style={{ backgroundColor: "var(--color-yellow)", color: "white" }}>
            Se kørekort B forløb
          </Link>
        </div>

      </section>
    </div>
  );
}