"use client";

export const Values = () => {
  const values = [
    {
      title: "Tryghed",
      text: "Vi skaber en rolig og professionel læringsoplevelse, hvor du føler dig sikker bag rattet fra første køretime i Vejle.",
    },
    {
      title: "Kvalitet",
      text: "Undervisning af højeste standard med fokus på forståelse frem for udenadslære.",
    },
    {
      title: "Ansvar",
      text: "Vi uddanner ikke bare elever – vi former ansvarlige og sikre bilister til trafikken i Vejle og resten af Danmark.",
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-20"
          style={{ color: "var(--color-text)" }}
        >
          Vores værdier
        </h2>

        <div className="grid md:grid-cols-3 gap-14">
          {values.map((v, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-2xl font-semibold">{v.title}</h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
