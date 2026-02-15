const stats = [
  { value: "3000+", label: "Elever" },
  { value: "95%", label: "Bestået" },
  { value: "40+", label: "Års erfaring" },
];

export const Stats = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl font-bold text-yellow-500">{s.value}</div>
            <p className="text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};