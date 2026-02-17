"use client";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Emma, Vejle",
      text: "Virkelig professionel køreskole i Vejle. Jeg følte mig tryg hele vejen og bestod første gang.",
    },
    {
      name: "Jonas, Vejle",
      text: "God undervisning og dygtige kørelærere. Kan klart anbefales, hvis du vil tage kørekort i Vejle.",
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-20"
          style={{ color: "var(--color-text)" }}
        >
          Hvad siger vores elever?
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl border bg-white/60 backdrop-blur-sm"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                “{r.text}”
              </p>

              <div className="font-semibold">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
