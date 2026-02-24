"use client";

import Image from "next/image";

export default function PriserPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              Populær pakke
            </span>

            <h1 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
              Lovpakke – komplet kørekort
            </h1>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Med vores lovpakke får du alt inkluderet fra start til slut.
              Ingen skjulte gebyrer — kun en tryg og struktureret vej til dit kørekort.
            </p>

            <div className="text-5xl font-bold" style={{ color: "var(--color-yellow)" }}>
              15.500 kr.
            </div>

            <button
              className="px-6 py-3 rounded-xl font-semibold"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
              Tilmeld dig i dag
            </button>

            <ul className="space-y-2 text-base pt-4">
              {[
                "29+ lektioner teori",
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

        <section className="space-y-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
              Hvad består lovpakken af?
            </h2>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Lovpakken indeholder alle lovpligtige elementer til kategori B kørekort.
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
              <thead style={{ borderBottom: "1px solid var(--color-border)" }}>
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
                  <td className="p-4 text-right font-bold">15.500 kr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              background: "var(--color-yellow-1)",
              border: "1px solid var(--color-yellow-3)",
            }}
          >
            <div className="flex justify-between font-semibold">
              <span>Lovpakke</span>
              <span>15.500 kr</span>
            </div>
            <div className="flex justify-between">
              <span>Andre betalinger</span>
              <span>ca. 1.820 kr</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-3">
              <span>Minimum total</span>
              <span>17.320 kr</span>
            </div>
          </div>

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
                <thead style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <tr>
                    <th className="p-4 font-semibold">Ydelse</th>
                    <th className="p-4 font-semibold text-right">Pris</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Prøvegebyr (Betales til Trafikstyrelsen)", ""],
                    ["Førstehjælpskursus", "750 kr"],
                    ["Køreprøven", "1.600 kr"],
                    ["Lægeerklæring", "ca. 500 kr"],
                  ].map(([name, price]) => (
                    <tr key={name}>
                      <td className="p-4">{name}</td>
                      <td className="p-4 text-right font-semibold">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="space-y-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          </div>

          <div className="space-y-6 max-w-3xl">
            <h3 className="text-2xl font-bold">Hvad betyder generhvervelse?</h3>
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

          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Der findes 3 typer</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Betinget frakendelse",
                  text: "Du beholder dit kørekort midlertidigt, men skal bestå en kontrollerende køreprøve inden fristen.",
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
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p style={{ color: "var(--color-text-secondary)" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

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
                    <td className="p-4 font-semibold">Betinget frakendelse</td>
                    <td className="p-4 text-right font-bold">4.500 kr</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Ubetinget frakendelse</td>
                    <td className="p-4 text-right font-bold">4.500 kr</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Kørselsforbud (lovpakke)</td>
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
          </div>

        
        </section>

      </div>
    </div>
  );
}