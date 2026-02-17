"use client";

import Image from "next/image";

export default function PriserPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* ===== HERO PACKAGE ===== */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          

            <h1 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
              Lovpakke – komplet kørekort
            </h1>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Med vores lovpakke får du alt inkluderet fra start til slut.
              Ingen skjulte gebyrer — kun en tryg og struktureret vej til dit kørekort.
            </p>

            <div className="text-5xl font-bold" style={{ color: "var(--color-yellow)" }}>
             fra 15.500 kr.
            </div>

            <ul className="space-y-2 text-base">
              {[
                "28 lektioner teori",
                "24 kørelektioner",
                "Manøvrebane & glatbane",
                "1 køreprøve inkluderet",
                "Online teori + lærebøger",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: "var(--color-yellow)" }}>✓</span>
                  <span style={{ color: "var(--color-text)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="/images/driving-modern.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="/images/student-modern.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-2xl overflow-hidden col-span-2">
              <Image src="/images/payment-modern.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ===== PRICE BREAKDOWN ===== */}
        <section className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
              100% gennemsigtige priser
            </h2>
            <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
              Sådan er din kørekortpakke sammensat
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid var(--color-border)",
              background: "var(--color-bg-elevated)",
            }}
          >
            <table className="w-full text-left">
              <thead
                style={{
                  background: "var(--color-bg)",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <tr>
                  <th className="p-4 font-semibold">Ydelse</th>
                  <th className="p-4 font-semibold text-right">Normalpris</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {[
                  ["16 køretimer på vejen", "8.800 kr"],
                  ["Ubegrænset teoriundervisning (min. 29 timer)", "4.200 kr"],
                  ["Manøvrebane (3 timer)", "1.200 kr"],
                  ["Glatbane (3 timer)", "1.800 kr"],
                ].map(([name, price]) => (
                  <tr key={name}>
                    <td className="p-4">{name}</td>
                    <td className="p-4 text-right font-semibold">{price}</td>
                  </tr>
                ))}

                <tr style={{ background: "var(--color-yellow-1)" }}>
                  <td className="p-4 font-bold">Lovpakke i alt</td>
                  <td className="p-4 text-right font-bold">15.500,-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* OTHER COSTS */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Andre betalinger</h3>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-elevated)",
              }}
            >
              <table className="w-full text-left">
                <thead
                  style={{
                    background: "var(--color-bg)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <tr>
                    <th className="p-4 font-semibold">Ydelse</th>
                    <th className="p-4 font-semibold text-right">Pris</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {[
                    ["Prøvegebyr (Betales til Trafikstyrelsen)", ""],
                    ["Førstehjælpskursus", "750,-"],
                    ["Køreprøven", "1.600,-"],
                    ["Lægeerklæring", "ca 500,-"],
                  ].map(([name, price]) => (
                    <tr key={name}>
                      <td className="p-4">{name}</td>
                      <td className="p-4 text-right font-semibold">{price}</td>
                    </tr>
                  ))}

                  <tr style={{ background: "var(--color-yellow-1)" }}>
                    <td className="p-4 font-bold">I alt minimum for et kørekort</td>
                    <td className="p-4 text-right font-bold">17.320 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== GENERHVERVELSE ===== */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
        

            <h2 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
              Generhvervelse af kørekort
            </h2>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Har du mistet dit kørekort? Vi hjælper dig hurtigt gennem processen,
              så du kan komme sikkert tilbage på vejen.
            </p>

            <div className="text-5xl font-bold" style={{ color: "var(--color-yellow)" }}>
              Fra 4.500 kr.
            </div>

            <ul className="space-y-2">
              {[
                "Personlig vejledning",
                "Teoriforberedelse",
                "Kørelektioner efter behov",
                "Booking af prøver",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: "var(--color-yellow)" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image src="/images/driving-modern.jpg" alt="" fill className="object-cover" />
          </div>
        </section>
{/* ===== GENERHVERVELSE ===== */}
<section className="space-y-16">

  {/* INTRO */}
  <div className="max-w-3xl space-y-4">
    <h2 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
      Generhvervelse af kørekort
    </h2>

    <p style={{ color: "var(--color-text-secondary)" }}>
      Har du mistet dit kørekort, eller fået en betinget frakendelse,
      skal du bestå en kontrollerende køreprøve for at få det tilbage.
      Prøven består af både teori- og køreprøve.
    </p>

    <p style={{ color: "var(--color-text-secondary)" }}>
      Der er ikke krav om undervisning, men de fleste vælger
      en genopfriskning for at bestå hurtigere og undgå ekstra forsøg.
    </p>
  </div>


  {/* TYPES */}
  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        title: "Betinget frakendelse",
        text: "Du beholder dit kørekort midlertidigt, men skal bestå en kontrollerende køreprøve inden fristen (typisk 6 måneder).",
      },
      {
        title: "Ubetinget frakendelse",
        text: "Politiet inddrager dit kørekort, og du må ikke køre før du har bestået teori og køreprøve igen.",
      },
      {
        title: "Kørselsforbud",
        text: "Typisk for nye bilister. Du skal gennemføre lovpligtig teori og kørelektioner før ny prøve.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="p-6 rounded-2xl space-y-3"
        style={{
          background: "var(--color-bg-elevated)",
          border: "1px solid var(--color-border)",
        }}
      >
        <h3 className="font-bold text-lg">{item.title}</h3>
        <p style={{ color: "var(--color-text-secondary)" }}>{item.text}</p>
      </div>
    ))}
  </div>


  {/* PRICES TABLE */}
  <div className="space-y-6">

    <h3 className="text-3xl font-bold">Priser for generhvervelse</h3>

    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1px solid var(--color-border)",
        background: "var(--color-bg-elevated)",
      }}
    >
      <table className="w-full text-left">
        <thead style={{ borderBottom: "1px solid var(--color-border)" }}>
          <tr>
            <th className="p-4">Pakke</th>
            <th className="p-4 text-right">Pris</th>
          </tr>
        </thead>

        <tbody className="divide-y">

          <tr>
            <td className="p-4">
              <div className="font-semibold">Betinget frakendelse</div>
              <div className="text-sm text-gray-500">
                Inkl. teori, 60 min kørsel og leje af skolevogn
              </div>
            </td>
            <td className="p-4 text-right font-bold">4.500 kr</td>
          </tr>

          <tr>
            <td className="p-4">
              <div className="font-semibold">Ubetinget frakendelse</div>
              <div className="text-sm text-gray-500">
                Online teori, 60 min kørsel og leje af skolevogn
              </div>
            </td>
            <td className="p-4 text-right font-bold">4.500 kr</td>
          </tr>

          <tr>
            <td className="p-4">
              <div className="font-semibold">Kørselsforbud (lovpakke)</div>
              <div className="text-sm text-gray-500">
                8 kørelektioner + 8 teoritimer (lovkrav)
              </div>
            </td>
            <td className="p-4 text-right font-bold">6.900 kr</td>
          </tr>

          <tr style={{ background: "var(--color-yellow-1)" }}>
            <td className="p-4 font-semibold">
              Køreprøve inkl. opvarmningslektion
            </td>
            <td className="p-4 text-right font-bold">1.500 kr</td>
          </tr>

        </tbody>
      </table>
    </div>

    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
      Statens prøvegebyr er ikke inkluderet og betales direkte via e-Boks.
    </p>
  </div>


  {/* CTA INFO */}
  <div
    className="p-6 rounded-2xl"
    style={{
      background: "var(--color-yellow-1)",
      border: "1px solid var(--color-yellow-3)",
    }}
  >
    <p className="font-semibold">
      Er du i tvivl om hvad der gælder for dig?
    </p>

    <p style={{ color: "var(--color-text-secondary)" }}>
      Kontakt os – vi hjælper dig med hele processen fra start til bestået prøve.
    </p>
  </div>

</section>

      </div>
    </div>
  );
}
