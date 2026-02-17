"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

const faqs = [
  {
    question: "Hvor lang tid tager det at tage kørekort?",
    answer:
      "Det afhænger af hvor hurtigt du gennemfører teori- og kørelektioner, men de fleste får kørekort på 3–6 måneder.",
  },
  {
    question: "Tilbyder I både manuel og automatgear?",
    answer:
      "Ja, vi har undervisning i både manuel gear og automatgear",
  },
  {
    question: "Kan jeg tage kørekort, hvis jeg er under 18?",
    answer:
      "Ja, du kan starte med teori og kørelektioner fra 17 år, men den praktiske prøve kan først tages ved 18 år.",
  },
  {
    question: "Hvilke dokumenter skal jeg medbringe til første lektion?",
    answer:
      "Medbring gyldigt ID, et billede til kørekortet og dit sundhedskort. Hvis du har tidligere kørekort eller certifikater, tag dem også med.",
  },
  {
    question: "Hvordan fungerer prøverne?",
    answer:
      "Du skal bestå både en teoretisk prøve og en praktisk køreprøve. Vi hjælper dig med forberedelse til begge dele.",
  },
  {
    question: "Kan jeg betale i rater?",
    answer:
      "Ja, vi tilbyder fleksible betalingsplaner, så du kan betale kørekortet over flere rater uden ekstra gebyr.",
  },
  {
    question: "Hvad sker der, hvis jeg ikke består første gang?",
    answer:
      "Ingen panik! Du kan tilmelde dig omprøven,  vi tilbyder ekstra lektioner for at sikre, at du er klar næste gang.",
  },
  {
    question: "Tilbyder I kørelektioner i weekenden?",
    answer:
      "Ja, vi har weekendhold, så du kan tage lektioner, selvom du har skole eller arbejde i hverdagen.",
  },
];


  return (
    <section
      className="py-28"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
         <div className="text-center max-w-2xl mx-auto mb-20">
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-yellow)" }}
          >
            FAQ
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-text)" }}
          >
            Ofte stillede spørgsmål
          </h2>
          <p
            className="mt-6 text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Hurtige svar på de mest almindelige spørgsmål.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-3xl border transition-all focus:outline-none cursor-pointer"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: isOpen
                    ? "var(--color-yellow)"
                    : "var(--color-border)",
                }}
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-6 px-4 py-2 text-left"
                >
                  <span
                    className="normal-text font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-yellow)",
                    }}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-4 pb-4 normal-text leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
