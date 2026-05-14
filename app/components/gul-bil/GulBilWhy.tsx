interface GulBilWhyProps {
  t: {
    intro: string;
    whyBadge: string;
    whyTitle: string;
    whyText1: string;
    whyText2: string;
  };
}

export default function GulBilWhy({ t }: GulBilWhyProps) {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: intro */}
          <div className="max-w-xl">
            <p
              className="text-lg md:text-xl leading-relaxed mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t.intro}
            </p>
          </div>

          {/* Right: why block */}
          <div>
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              {t.whyBadge}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t.whyTitle}
            </h2>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {t.whyText1}
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {t.whyText2}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
