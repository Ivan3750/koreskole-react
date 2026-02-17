"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function KoereproevePage() {
  return (
    <>
      <Head>
        <title>Køreprøve i Vejle | Praktisk prøve | Kørekort B</title>
        <meta
          name="description"
          content="Køreprøve i Vejle – komplet guide til den praktiske prøve til kørekort B. Læs hvad du bliver testet i, hvor prøven foregår og hvordan du består første gang."
        />
        <meta
          name="keywords"
          content="køreprøve Vejle, praktisk prøve Vejle, kørekort B Vejle, bestå køreprøve, køreskole Vejle"
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
                Køreprøve i Vejle
              </span>

              <h1 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
                Sådan består du køreprøven første gang
              </h1>

              <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Skal du til køreprøve i Vejle? Her får du en komplet guide til den
                praktiske prøve til kørekort B – hvad du bliver testet i,
                hvordan prøven foregår og hvordan du øger dine chancer for at bestå.
              </p>

              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Køreprøven er den sidste del af dit kørekortforløb.
                Med korrekt træning, ro og overblik kan du bestå allerede i første forsøg.
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
                <Image src="/images/driving-modern.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/images/car-interior.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden col-span-2">
                <Image src="/images/vejle-city.jpg" alt="" fill className="object-cover" />
              </div>
            </div>

          </section>

          <section className="grid lg:grid-cols-4 gap-8">

            {[
              ["30-45 minutter", "Den praktiske prøve varer typisk op til 45 minutter."],
              ["Teknisk kontrol", "Du starter med spørgsmål om bilens udstyr."],
              ["By- og landevej", "Du kører i forskellige trafiksituationer."],
              ["Sagkyndig vurdering", "En prøvesagkyndig vurderer din kørsel."],
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
              Hvordan foregår køreprøven i Vejle?
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Køreprøven i Vejle starter med en teknisk kontrol,
              hvor du skal kunne forklare bilens vigtigste funktioner.
              Derefter kører du i almindelig trafik, hvor du bliver testet
              i din evne til at køre sikkert og selvstændigt.
            </p>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Den sagkyndige vurderer din orientering, placering,
              hastighedstilpasning og overholdelse af færdselsloven.
            </p>

            <Link
              href="/koerekort-b/"
              className="font-semibold"
              style={{ color: "var(--color-yellow)" }}
            >
              Læs mere om kørekort B forløbet →
            </Link>
          </section>

          <section className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Hvor foregår køreprøven?</h2>

              <p style={{ color: "var(--color-text-secondary)" }}>
                Køreprøven i Vejle starter typisk ved Trafikstyrelsens
                prøvested i området omkring Borgerservice.
              </p>

              <p style={{ color: "var(--color-text-secondary)" }}>
                Du vil køre i både bytrafik, rundkørsler,
                kryds og på større veje for at vise,
                at du kan håndtere forskellige trafiksituationer.
              </p>

              <Link
                href="/koerekort-b/"
                className="font-semibold"
                style={{ color: "var(--color-yellow)" }}
              >
                Læs mere om kørekort B forløbet →
              </Link>

            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image src="/images/driving-test.jpg" alt="" fill className="object-cover" />
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
              Klar til din køreprøve i Vejle?
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Med den rette træning og professionel undervisning
              øger du markant dine chancer for at bestå køreprøven
              i første forsøg.
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
