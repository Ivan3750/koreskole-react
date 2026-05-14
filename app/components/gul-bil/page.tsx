import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Car, CheckCircle, ArrowRight, Phone } from "lucide-react";


export function generateStaticParams() {
  return [
    { locale: "da" },
    { locale: "en" },
  ];
}
// ─── SEO Metadata ─────────────────────────────────────────────────────────────


// ─── Structured Data ──────────────────────────────────────────────────────────

 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Lønbæks Køreskole",
  alternateName: "Gul bil køreskole Vejle",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vejle",
    addressCountry: "DK",
  },
  url: "https://lønbækskøreskole.dk",
  description:
    "Køreskole i Vejle med personlig undervisning og VW Golf GTE. Kendt som 'køreskolen med den gule bil'.",
}; 

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  "Undervisning i VW Golf GTE - automatgear, moderne bil",
  "Kode 78 som standard, kode 148 tilgængeligt bagefter",
  "Teori fra første lektion - struktureret, ikke udenad",
  "Adgang til øvetests fra dag ét",
  "Gratis og uforpligtende møde inden du beslutter noget",
];

const practicalInfo = [
  { label: "By", value: "Vejle, Danmark", icon: MapPin },
  { label: "Bil", value: "VW Golf GTE - automatgear", icon: Car },
  { label: "Første møde", value: "Gratis og uforpligtende", icon: Clock },
  { label: "Næste ledige", value: "Inden for 3 dage", icon: Phone },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GulBilPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ backgroundColor: "var(--color-bg)" }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">

              {/* Badge */}
              <span
                className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-8"
                style={{
                  color: "var(--color-yellow)",
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
                }}
              >
                Gul bil køreskole · Vejle
              </span>

              {/* H1 */}
              <h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Leder du efter{" "}
                <span style={{ color: "var(--color-yellow)" }}>
                  "gul bil køreskolen"?
                </span>
                <br />
                Det er os.
              </h1>

              {/* Intro */}
              <p
                className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Mange kender os som "køreskolen med den gule bil" i Vejle - og
                det er ikke så mærkeligt. Det officielle navn er{" "}
                <strong style={{ color: "var(--color-text)" }}>
                  Lønbæks Køreskole
                </strong>
                , men hvad man end søger efter, ender man det samme sted.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "var(--color-yellow)",
                    color: "#fff",
                    boxShadow: "0 4px 24px rgba(var(--color-yellow-rgb), 0.3)",
                  }}
                >
                  Book et gratis møde
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/koerekort-b/forloeb"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base border-2 transition-opacity hover:opacity-80"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text)",
                  }}
                >
                  Læs om vores forløb
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ───────────────────────────────────────────────────────── */}
        <div
          className="w-full h-px"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        {/* ── HVORFOR GUL BIL ───────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-bg-secondary, var(--color-bg))" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="max-w-xl">
                <span
                  className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                  style={{
                    color: "var(--color-yellow)",
                    backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
                  }}
                >
                  Bag navnet
                </span>

                <h2
                  className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  Hvorfor søger folk efter "gul bil"?
                </h2>

                <div className="space-y-4" style={{ color: "var(--color-text-secondary)" }}>
                  <p className="text-lg leading-relaxed">
                    Nogle husker os fra gaden. Andre har hørt om os fra en ven,
                    der nævnte{" "}
                    <em>"den køreskole med den gule bil i Vejle."</em> Det er et
                    af de der øgenavne der bare sætter sig.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Vi har ikke selv valgt det navn - men vi lever fint med det.
                    Og hvis du er landet her, har du fundet det du søgte.
                  </p>
                </div>
              </div>

              {/* Quote card */}
              <div
                className="rounded-3xl border-2 p-8 md:p-10"
                style={{
                  borderColor: "var(--color-yellow)",
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.04)",
                }}
              >
                <div
                  className="text-5xl font-display font-bold mb-4 leading-none"
                  style={{ color: "var(--color-yellow)" }}
                >
                  "
                </div>
                <blockquote
                  className="text-lg md:text-xl leading-relaxed italic mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  Jeg fandt dem fordi en kammerat sagde "tag den med den gule
                  bil i Vejle." Jeg forstod ikke hvad han mente - men det var
                  den bedste anbefaling jeg har fået.
                </blockquote>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  - Mathias, 19 år · Bestod første forsøg
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── HVEM ER VI ────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="max-w-7xl mx-auto px-6">

            <div className="max-w-2xl mb-14">
              <span
                className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                style={{
                  color: "var(--color-yellow)",
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
                }}
              >
                Lønbæks Køreskole
              </span>

              <h2
                className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Hvem er vi?
              </h2>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Vi er en lille køreskole i Vejle med personlig undervisning. Det
                betyder at du ikke er et nummer i en stor maskine - du har én
                kørelærer, en fast plan og en reel chance for at bestå første
                gang.
              </p>
            </div>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border-2 px-5 py-4"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--color-yellow)" }}
                  >
                    <CheckCircle className="w-4 h-4" style={{ color: "#fff" }} />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text)" }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <p
              className="text-lg font-semibold"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Vi er ikke billigst.{" "}
              <span style={{ color: "var(--color-text)" }}>Vi er grundige.</span>
            </p>
          </div>
        </section>

        {/* ── PRAKTISK INFO ─────────────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: "var(--color-bg-secondary, var(--color-bg))" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Info grid */}
              <div>
                <span
                  className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                  style={{
                    color: "var(--color-yellow)",
                    backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
                  }}
                >
                  Praktisk info
                </span>
                <h2
                  className="font-display text-3xl md:text-4xl font-bold leading-tight mb-8"
                  style={{ color: "var(--color-text)" }}
                >
                  Alt du skal vide
                </h2>

                <div className="space-y-3">
                  {practicalInfo.map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 rounded-2xl border-2 px-5 py-4"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "var(--color-bg)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)" }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: "var(--color-yellow)" }}
                        />
                      </div>
                      <div>
                        <span
                          className="block text-xs font-bold uppercase tracking-widest mb-0.5"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {label}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "var(--color-text)" }}
                        >
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div
                className="rounded-3xl border-2 overflow-hidden"
                style={{ borderColor: "var(--color-yellow)" }}
              >
                <div
                  className="px-8 py-10"
                  style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.04)" }}
                >
                  <span
                    className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                    style={{
                      color: "var(--color-yellow)",
                      backgroundColor: "rgba(var(--color-yellow-rgb), 0.12)",
                    }}
                  >
                    Næste skridt
                  </span>

                  <h3
                    className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4"
                    style={{ color: "var(--color-text)" }}
                  >
                    Kom i gang - det koster ingenting at mødes
                  </h3>

                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Første skridt er et kort møde - ca. 30 minutter på skolen.
                    Vi gennemgår din situation, besvarer dine spørgsmål og laver
                    en plan. Du betaler ingenting og forpligter dig til
                    ingenting.
                  </p>

                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base transition-opacity hover:opacity-90 mb-4"
                    style={{
                      backgroundColor: "var(--color-yellow)",
                      color: "#fff",
                      boxShadow: "0 4px 24px rgba(var(--color-yellow-rgb), 0.3)",
                    }}
                  >
                    Book et gratis møde
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Næste ledige møde:{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      inden for 3 dage
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── INTERNE LINKS ─────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Læs mere
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/koerekort-b/forloeb", label: "Vores forløb" },
                { href: "/koerekort-b/teori", label: "Teoriprøven" },
                { href: "/priser", label: "Hvad koster det?" },
                { href: "/kontakt", label: "Kontakt os" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text)",
                  }}
                >
                  {label}
                  <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--color-yellow)" }} />
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}