export const Stats = () => {
  const stats = [
    { value: "3000+", label: "Elever uddannet i Vejle" },
    { value: "95%", label: "Består første gang" },
    { value: "40+", label: "Års erfaring" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div
              className="text-5xl font-bold mb-4"
              style={{ color: "var(--color-yellow)" }}
            >
              {s.value}
            </div>
            <p style={{ color: "var(--color-text-secondary)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
