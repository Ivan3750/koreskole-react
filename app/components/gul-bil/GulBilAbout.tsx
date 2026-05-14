interface Stat {
  value: string;
  label: string;
}

interface GulBilAboutProps {
  t: {
    aboutBadge: string;
    aboutTitle: string;
    aboutText: string;
    aboutStats: Stat[];
  };
}

export default function GulBilAbout({ t }: GulBilAboutProps) {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bg-secondary, var(--color-bg))" }}
    >
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
              {t.aboutBadge}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t.aboutTitle}
            </h2>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t.aboutText}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {t.aboutStats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 px-5 py-6 text-center"
                style={{
                  borderColor: i === 0 ? "var(--color-yellow)" : "var(--color-border)",
                  backgroundColor: i === 0
                    ? "rgba(var(--color-yellow-rgb), 0.04)"
                    : "var(--color-bg)",
                }}
              >
                <span
                  className="block font-display text-3xl font-bold mb-1"
                  style={{ color: "var(--color-yellow)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="block text-xs leading-snug font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
