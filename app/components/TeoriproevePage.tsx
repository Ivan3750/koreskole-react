"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function TeoriproevePage() {
  return (
    <>
      <Head>
        <title>Teoriprøve i Vejle | Kørekort B | Bestå første gang</title>
        <meta
          name="description"
          content="Teoriprøve i Vejle – komplet guide til kørekort B. Læs hvordan teoriprøven foregår, hvor den afholdes, fejlgrænse, krav og hvordan du består første gang."
        />
        <meta
          name="keywords"
          content="teoriprøve Vejle, kørekort B Vejle, bestå teoriprøve, Borgerservice Vejle, teoriprøve kørekort"
        />
      </Head>

      <div style={{ background: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

          <section className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="space-y-6">

              <span
                className="px-4 py-1 rounded-full text-sm font-semibold"
                style={{
                  background: "var(--color-yellow-2)",
                  color: "var(--color-yellow-8)",
                }}
              >
                Teoriprøve i Vejle
              </span>

              <h1 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
                Sådan består du teoriprøven i Vejle
              </h1>

              <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Skal du tage teoriprøve til kørekort B i Vejle? Her får du en
                komplet guide til prøvens opbygning, fejlgrænse og de bedste
                strategier til at bestå første gang.
              </p>

              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Teoriprøven er en vigtig del af dit kørekortforløb.
                Med korrekt forberedelse, realistiske øveprøver og forståelse
                for færdselsloven øger du markant dine chancer for succes.
              </p>

              <Link
                href="/koerekort-b/"
                className="inline-block px-8 py-3 rounded-xl font-semibold transition hover:scale-[1.03]"
                style={{
                  background: "var(--color-yellow)",
                  color: "white",
                }}
              >
                Læs mere om kørekort B forløbet →
              </Link>

            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/images/teori-class.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/images/traffic-sign.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden col-span-2">
                <Image src="/images/vejle-city.jpg" alt="" fill className="object-cover" />
              </div>
            </div>

          </section>

          <section className="grid lg:grid-cols-4 gap-8">

            {[
              ["25 spørgsmål", "Spørgsmål om skilte, placering og risikovurdering."],
              ["Max 5 fejl", "Du skal have mindst 20 rigtige svar."],
              ["25 minutter", "Prøven varer 25 minutter."],
              ["Digital eksamen", "Multiple choice med billeder."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="p-6 rounded-2xl space-y-3"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  {text}
                </p>
              </div>
            ))}

          </section>

          <section
            className="p-10 rounded-2xl space-y-6"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 className="text-2xl font-bold">
              Hvordan foregår teoriprøven i Vejle?
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Når du skal til teoriprøven i Vejle, skal du medbringe din ansøgning, lektionsplan og gyldigt billed-ID (pas anbefales). Prøven er digital og varer 25 minutter. Du logger ind med MitID på en PC og besvarer spørgsmål til 25 billeder.
            </p>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Du må maksimalt have 5 fejl for at bestå. Resultatet vises straks på skærmen, så du med det samme kan se, om du har bestået.
            </p>

            <p style={{ color: "var(--color-text-secondary)" }}>
Vi anbefaler at øve dig online og gennemgå lektionsplanen grundigt. Elever, der følger undervisningen, har høj beståelsesrate og er godt forberedte til teoriprøven.
            </p>

          
          </section>

          <section className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Hvor foregår prøven?</h2>

              <p style={{ color: "var(--color-text-secondary)" }}>
                Teoriprøven foregår hos politiet.
                Mød op i god tid og medbring gyldig legitimation.
              </p>

              <p style={{ color: "var(--color-text-secondary)" }}>
                Når du har bestået teoriprøven, kan du fortsætte
                mod den praktiske køreprøve.
              </p>

           

            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image src="/images/location-modern.jpg" alt="" fill className="object-cover" />
            </div>

          </section>

          <section
            className="p-12 rounded-2xl text-center space-y-6"
            style={{
              background: "var(--color-yellow-1)",
              border: "1px solid var(--color-yellow-3)",
            }}
          >
            <h2 className="text-2xl font-bold">
              Klar til at starte dit kørekort i Vejle?
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Vores strukturerede kørekort B forløb hjælper dig sikkert gennem
              både teori og praksis. Vi fokuserer på høj beståelsesrate
              og personlig undervisning.
            </p>

            <Link
              href="/koerekort-b/"
              className="inline-block px-10 py-4 rounded-xl font-semibold transition hover:scale-[1.03]"
              style={{
                background: "var(--color-yellow)",
                color: "white",
              }}
            >
              Læs mere om kørekort B forløbet →
            </Link>
          </section>

        </div>
      </div>
    </>
  );
}
