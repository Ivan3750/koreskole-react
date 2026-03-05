"use client";

import Image from "next/image";
import school from "../assets/school_inside_2.jpeg"

export default function PriserPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

 


        {/* INFORMATIONS MØDE */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image
              src={school.src}
              alt="Informationsmøde"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">

            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              Gratis informationsmøde
            </span>

            <h2 className="text-4xl font-bold">
              Få overblik over hele kørekortforløbet
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Før du starter dit kørekortforløb inviterer vi dig til et
              gratis informationsmøde. Her gennemgår vi hvordan undervisningen
              fungerer, hvad lovpakken indeholder og hvad du kan forvente
              gennem hele forløbet.
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-4">

              <div className="p-4 rounded-xl border bg-[var(--color-bg-elevated)]">
                <h4 className="font-semibold mb-1">Gennemgang af forløbet</h4>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Vi forklarer hele processen fra teori til køreprøve.
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-[var(--color-bg-elevated)]">
                <h4 className="font-semibold mb-1">Stil spørgsmål</h4>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Du kan spørge om undervisning, tidsplan og krav.
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-[var(--color-bg-elevated)]">
                <h4 className="font-semibold mb-1">Mød kørelæreren</h4>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Du møder din kørelærer og får indblik i undervisningen.
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-[var(--color-bg-elevated)]">
                <h4 className="font-semibold mb-1">Ingen forpligtelser</h4>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Informationsmødet er gratis og uforpligtende.
                </p>
              </div>

            </div>

            <button
              className="px-8 py-4 rounded-xl font-semibold"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
              Tilmeld informationsmøde
            </button>

          </div>

        </section>


        {/* LOVPAKKE */}
        <section className="space-y-16">

          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-bold">
              Hvad indeholder lovpakken?
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Lovpakken indeholder alle de obligatoriske elementer som
              kræves for at få kørekort i Danmark. Undervisningen er
              struktureret efter den officielle undervisningsplan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border bg-[var(--color-bg-elevated)]">
              <h4 className="font-semibold mb-2">Teoriundervisning</h4>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Grundig teoriundervisning hvor du lærer regler,
                trafikforståelse og sikker kørsel.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-[var(--color-bg-elevated)]">
              <h4 className="font-semibold mb-2">Kørelektioner</h4>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Praktiske kørelektioner hvor du lærer at håndtere bilen
                sikkert i trafikken.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-[var(--color-bg-elevated)]">
              <h4 className="font-semibold mb-2">Manøvrebane</h4>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Træning på lukket bane hvor du lærer bilens grundlæggende
                funktioner.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-[var(--color-bg-elevated)]">
              <h4 className="font-semibold mb-2">Glatbane</h4>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Øvelse i glat føre så du lærer at håndtere bilen under
                svære forhold.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-[var(--color-bg-elevated)]">
              <h4 className="font-semibold mb-2">Teoriprøve</h4>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Forberedelse til den officielle teoriprøve.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-[var(--color-bg-elevated)]">
              <h4 className="font-semibold mb-2">Køreprøve</h4>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Den afsluttende praktiske prøve hvor du viser dine
                kørefærdigheder.
              </p>
            </div>

          </div>

        </section>


        {/* GENERHVERVELSE */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">

            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              Generhvervelse
            </span>

            <h2 className="text-4xl font-bold">
              Få dit kørekort tilbage
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Hvis du har mistet dit kørekort og skal generhverve det,
              hjælper vi dig gennem hele processen. Vi forbereder dig
              både til teoriprøve og køreprøve så du kan få dit kørekort
              tilbage hurtigt og sikkert.
            </p>

            <ul className="space-y-3 pt-2">

              <li className="flex gap-3">
                <span className="text-yellow-500">✓</span>
                <span>Individuel undervisning</span>
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-500">✓</span>
                <span>Forberedelse til teoriprøve</span>
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-500">✓</span>
                <span>Praktiske kørelektioner</span>
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-500">✓</span>
                <span>Hjælp gennem hele processen</span>
              </li>

            </ul>

          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/images/payment-modern.jpg"
              alt="Generhvervelse"
              fill
              className="object-cover"
            />
          </div>

        </section>


        {/* CTA */}
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

      </div>
    </div>
  );
}