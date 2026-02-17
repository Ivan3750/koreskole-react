"use client";

import Image from "next/image";
import Link from "next/link";

 const AboutIntro = () => {
  return (
    <section
      className="py-28 md:py-36 lg:py-44 max-w-7xl mx-auto px-6"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
          <span
            className="font-semibold text-sm uppercase tracking-widest"
            style={{ color: "var(--color-yellow)" }}
          >
            Om os
          </span>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Lønbæks Køreskole – Din erfarne køreskole i Vejle
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Hos <strong>Lønbæks Køreskole i Vejle</strong> får du tryg, personlig og
            moderne køreundervisning. Vi hjælper dig sikkert gennem hele kørekortforløbet,
            fra teori til køreprøve.
          </p>

          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Siden 1984 har vi uddannet tusindvis af elever med fokus på høj kvalitet,
            sikkerhed og høj beståelsesrate. Vores <strong>lokalkendskab</strong> giver
            dig fordelene i Vejle og omegn.
          </p>

          <Link
            href="/koerekort-b/"
            className="inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--color-yellow)",
              color: "white",
            }}
          >
            Læs mere om kørekort B forløbet →
          </Link>
        </div>

        {/* Images */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-5 md:gap-8 items-start">
          
          {/* Image 1 */}
          <div
            className="rounded-3xl overflow-hidden border-2  h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Image
              src="/about-1.jpg"
              alt="Køreskole i Vejle"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div
            className="rounded-3xl overflow-hidden border-2   mt-10 md:mt-16 h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Image
              src="/about-2.jpg"
              alt="Elev i køreskole"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
export default AboutIntro;