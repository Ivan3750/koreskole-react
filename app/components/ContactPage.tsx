"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)" }}>
      
      <section className="py-28 text-center max-w-4xl mx-auto px-6">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Kontakt Lønbæks Køreskole i Vejle
        </h1>
        <p
          className="text-xl leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Har du spørgsmål om teoriprøve, køreprøve, eller vores kørekort B forløb?
          Vores team i Vejle står klar til at hjælpe dig.
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-text)" }}>
              Kontaktinformation
            </h2>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Lønbæks Køreskole <br />
              Kirketorvet 10, 7100 Vejle <br />
              Telefon: <a href="tel:+4570123456" className="underline">+45 70 12 34 56</a> <br />
              E-mail: <a href="mailto:info@lonbaeks.dk" className="underline">info@lonbaeks.dk</a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-text)" }}>
              Åbningstider
            </h2>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Mandag - Fredag: 08:00 - 17:00 <br />
              Lørdag: 09:00 - 13:00 <br />
              Søndag: Lukket
            </p>
          </div>

          <Link
            href="/koerekort-b/"
            className="inline-block mt-6 px-10 py-4 rounded-full font-semibold"
            style={{ backgroundColor: "var(--color-yellow)", color: "white" }}
          >
            Læs mere om kørekort B forløbet →
          </Link>
        </div>

        <form className="space-y-6 bg-white/60 backdrop-blur-sm p-10 rounded-3xl border"
          style={{ borderColor: "var(--color-border)" }}>
          <div>
            <label className="block mb-2 font-semibold" style={{ color: "var(--color-text)" }}>
              Navn
            </label>
            <input
              type="text"
              placeholder="Dit navn"
              className="w-full p-4 rounded-xl border"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-elevated)" }}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" style={{ color: "var(--color-text)" }}>
              E-mail
            </label>
            <input
              type="email"
              placeholder="Din e-mail"
              className="w-full p-4 rounded-xl border"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-elevated)" }}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" style={{ color: "var(--color-text)" }}>
              Besked
            </label>
            <textarea
              placeholder="Skriv din besked her"
              className="w-full p-4 rounded-xl border h-40"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-elevated)" }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full font-semibold hover:scale-[1.02] transition"
            style={{ backgroundColor: "var(--color-yellow)", color: "white" }}
          >
            Send besked
          </button>
        </form>

      </section>

      <section className="py-32 text-center">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--color-text)" }}>
            Besøg os i Vejle
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Vores køreskole ligger centralt på Kirketorvet 10, med nem adgang til
            offentlig transport og parkering i Vejle.
          </p>

          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.378350452121!2d9.53623497613182!3d55.709212980496465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cfe3f5089fa2b%3A0x6a5675ab9b7de22!2sKirketorvet%2010%2C%207100%20Vejle%2C%20Danmark!5e0!3m2!1sen!2sdk!4v1697080200000!5m2!1sen!2sdk"
              className="w-full h-full border-0 rounded-3xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
