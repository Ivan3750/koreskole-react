"use client";

import Image from "next/image";

export default function PriserPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

         <section className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <span
              className="px-4 py-1 rounded-full text-sm font-semibold"
              style={{
                background: "var(--color-yellow-2)",
                color: "var(--color-yellow-8)",
              }}
            >
              Mest populære pakke
            </span>

            <h1 className="text-4xl font-bold" style={{ color: "var(--color-text)" }}>
              Lovpakke – komplet kørekort
            </h1>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Med vores lovpakke får du alt inkluderet fra start til slut.
              Ingen skjulte gebyrer, ingen uforudsete omkostninger —
              kun en tryg og struktureret vej til dit kørekort.
            </p>

            <div className="text-5xl font-bold" style={{ color: "var(--color-yellow)" }}>
              12.995 kr.
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

            <button
              className="px-8 py-3 rounded-xl font-semibold transition hover:scale-[1.03]"
              style={{
                background: "var(--color-yellow)",
                color: "white",
              }}
            >
              Tilmeld hold
            </button>
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

        {/* ===== EXTRA + PAYMENT COMPACT ===== */}
        <section className="grid lg:grid-cols-3 gap-8">

          {/* Extra lessons */}
          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3 className="text-xl font-bold">Ekstra lektioner</h3>

            {[
              ["Ekstra kørelektion (45 min)", "395 kr."],
              ["Ekstra kørelektion (90 min)", "750 kr."],
              ["Ny køreprøve", "690 kr."],
              ["Ny teoriprøve", "170 kr."],
            ].map(([name, price]) => (
              <div key={name} className="flex justify-between">
                <span style={{ color: "var(--color-text-secondary)" }}>{name}</span>
                <span className="font-semibold">{price}</span>
              </div>
            ))}
          </div>

          {/* Payment */}
          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              background: "var(--color-yellow-1)",
              border: "1px solid var(--color-yellow-3)",
            }}
          >
            <h3 className="text-xl font-bold">Afbetaling</h3>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Betal i rater uden renter eller gebyrer.
              Du kan starte din uddannelse med det samme.
            </p>

            <div className="space-y-2 font-semibold">
              <div>3 rater på 4.332 kr.</div>
              <div>6 rater på 2.166 kr.</div>
            </div>
          </div>

          {/* Value */}
          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3 className="text-xl font-bold">Hvorfor vælge os?</h3>

            <p style={{ color: "var(--color-text-secondary)" }}>
              Vi fokuserer på kvalitet, personlig undervisning og høj
              beståelsesrate. Moderne biler og erfarne undervisere
              sikrer dig den bedste start på dit kørekort.
            </p>

            <ul className="space-y-2">
              <li>✔ Høj beståelsesrate</li>
              <li>✔ Personlig undervisning</li>
              <li>✔ Moderne biler</li>
            </ul>
          </div>

        </section>

      </div>
    </div>
  );
}