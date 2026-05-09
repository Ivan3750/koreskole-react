"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const checklist = [
  "Du har forstået vigepligt og placering i vejkryds",
  "Du har genkendt og øvet situationsbilleder",
  "Du har taget mindst 3 øveprøver uden tidspres",
];

const TheoryTransitionSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: "var(--color-bg-secondary, var(--color-bg))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="rounded-3xl border-2 overflow-hidden"
          style={{ borderColor: "var(--color-yellow)" }}
        >
          <div className="grid lg:grid-cols-2">

            <div
              className="px-8 py-10 md:px-12 md:py-14"
              style={{ backgroundColor: "var(--color-bg)" }}
            >
              <p
                className="font-semibold text-sm uppercase tracking-widest mb-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Tjek inden du booker prøven
              </p>

              <div className="space-y-4 mb-8">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--color-yellow)" }}
                    >
                      <CheckCircle className="w-3.5 h-3.5" style={{ color: "#fff" }} />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl border-2 px-5 py-4"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.03)",
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  <span className="font-semibold" style={{ color: "var(--color-text)" }}>Husk: </span>
                  Du skal have bestået teoriprøven inden du kan booke din endelige køreprøve. Gyldigt i 18 måneder efter beståelse.
                </p>
              </div>
            </div>

            <div
              className="px-8 py-10 md:px-12 md:py-14 border-t-2 lg:border-t-0 lg:border-l-2 flex flex-col justify-center"
              style={{
                borderColor: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.04)",
              }}
            >
              <span
                className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6 self-start"
                style={{
                  color: "var(--color-yellow)",
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
                }}
              >
                Næste skridt
              </span>

              <h2
                className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4"
                style={{ color: "var(--color-text)" }}
              >
                Bestået teorien?
              </h2>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Godt klaret. Nu begynder den praktiske del - og her gælder helt andre regler. Læs hvad du kan forvente til selve køreprøven i Vejle.
              </p>

              <Link
                href="/koerekort-b/koerekort"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:opacity-90 self-start"
                style={{
                  backgroundColor: "var(--color-yellow)",
                  color: "#fff",
                  boxShadow: "0 4px 24px rgba(var(--color-yellow-rgb), 0.3)",
                }}
              >
                Læs om køreprøven
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TheoryTransitionSection;
