"use client";

export const LocalFocus = () => {
  return (
    <section className="py-28">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ color: "var(--color-text)" }}
        >
          Lokal køreskole i Vejle
        </h2>

        <p
          className="text-xl leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Som lokal køreskole i Vejle har vi indgående kendskab til byens
          trafikforhold, rundkørsler, motorveje og typiske prøveruter.
        </p>

        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Det betyder, at du bliver trænet i de områder, hvor du med stor
          sandsynlighed skal op til køreprøve – hvilket øger dine chancer for
          at bestå første gang.
        </p>
      </div>
    </section>
  );
};
