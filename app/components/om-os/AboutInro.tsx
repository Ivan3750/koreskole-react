"use client";

import React from "react";
import car from "@/app/assets/gulbil.png";
const AboutIntro = () => {
  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* CONTENT (on mobile first) */}
          <div className="max-w-xl mx-auto lg:mx-0 order-1 lg:order-2 text-center lg:text-left">
            <span
              className="font-semibold text-sm uppercase tracking-widest"
              style={{ color: "var(--color-yellow)" }}
            >
              Om os
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              Lønbæks Køreskole – Din køreskole i Vejle
            </h2>

            <p
              className="normal-text mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Hos <strong>Lønbæks Køreskole i Vejle</strong> får du en 
              personlig køreuddannelse med fokus på både læring og trivsel.
              Undervisningen foregår i et roligt tempo, så du føler dig godt
              forberedt til både <strong>teori- og køreprøven</strong>.
            </p>

            <p
              className="normal-text mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Vi har mange års erfaring i Vejle og lokalområdet og har hjulpet
              mange elever sikkert gennem deres kørekortforløb. Vores{" "}
              <strong>lokalkendskab</strong> og{" "}
              <strong>personlige vejledning</strong> giver dig de bedste
              forudsætninger for at bestå.
            </p>

            <p
              className="normal-text"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Bliv en sikker og selvsikker bilist med{" "}
              <strong>Lønbæks Køreskole i Vejle</strong>. Tilmeld dig i dag og
              start din køreuddannelse med det samme!
            </p>
          </div>

          {/* IMAGES */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-5 md:gap-8 items-start">
              
              {/* Image 1 */}
              <div
                className="rounded-3xl overflow-hidden border-2 shadow-xl 
                h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]
               "
                style={{ borderColor: "var(--color-border)" }}
              >
                <img
                  src={car.src}
                  alt="Køreundervisning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 */}
           
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;