"use client";

import { useTranslation } from "react-i18next";
import "@/app/i18n";
 
const CTA = () => {
  const { t } = useTranslation();


  return (
     <section className="bg-[var(--color-bg-elevated)] rounded-3xl p-16 text-center space-y-6">

          <h2 className="text-4xl font-bold">
            Klar til at starte dit kørekort?
          </h2>

          <p
            className="max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Tilmeld dig vores gratis informationsmøde og få et klart
            overblik over hvordan du kommer i gang med dit kørekort.
          </p>

          <button
            className="px-10 py-4 rounded-xl font-semibold"
            style={{ background: "var(--color-yellow)", color: "#000" }}
          >
            Book informationsmøde
          </button>

        </section>
  );
};

export default CTA;