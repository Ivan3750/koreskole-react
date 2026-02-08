"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section
      className="py-24 max-w-6xl m-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl border-2 overflow-hidden"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Replace with real image */}
              <div className="w-full h-full flex items-center justify-center text-center p-8">
                <span
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Foto fra køreundervisningen
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: "var(--color-yellow)" }}
            >
              Om os
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Lønbæks Køreskole – Din køreskole i Vejle
            </h2>

            <p
              className="leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Hos <strong>Lønbæks Køreskole i Vejle</strong> får du en tryg og personlig
              køreuddannelse, hvor der er fokus på både læring og trivsel. 
              Undervisningen foregår i et roligt tempo, så du føler dig godt forberedt
              til både <strong>teori- og køreprøven</strong>.
            </p>

            <p
              className="leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Vi har mange års erfaring i Vejle og lokalområdet og har hjulpet mange elever
              sikkert gennem deres kørekortforløb. Vores <strong>lokalkendskab</strong> og
              <strong>personlige vejledning</strong> giver dig de bedste forudsætninger
              for at bestå.
            </p>
 

            <p
              className="leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Bliv en sikker og selvsikker bilist med <strong>Lønbæks Køreskole i Vejle</strong>.
              Tilmeld dig i dag og start din køreuddannelse med det samme!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
