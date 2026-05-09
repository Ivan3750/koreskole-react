"use client";

import { useTranslation } from "react-i18next";
import "@/app/i18n";
import {
  BookOpen,
  Car,
  Gauge,
  Snowflake,
  KeyRound,
  FileText,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Teori",
    description: "Ubegrænset undervisning indtil du er klar til teoriprøven.",
    detail: "Ubegrænset",
  },
  {
    icon: Car,
    title: "Manøvrebane",
    description: "Kørsel på manøvrebane (kravlegården) til grundlæggende køreteknik.",
    detail: "4 lektioner",
  },
  {
    icon: Gauge,
    title: "Kørelektioner",
    description: "Praktiske kørelektioner af 45 minutters varighed med godkendt kørelærer.",
    detail: "16 lektioner",
  },
  {
    icon: Snowflake,
    title: "Køreteknisk anlæg",
    description: "Lektioner på glatbanen - træn kontrol i kritiske situationer.",
    detail: "4 lektioner",
  },
  {
    icon: KeyRound,
    title: "Leje af skolevogn",
    description: "Brug af skolevogn til selve køreprøven er inkluderet.",
    detail: "Inkluderet",
  },
  {
    icon: FileText,
    title: "Teoriprøvegebyr",
    description: "Administrationsgebyr til bestilling af din teoriprøve.",
    detail: "Inkluderet",
  },
  {
    icon: ClipboardList,
    title: "Kørekortansøgning",
    description: "Behandling af din kørekortansøgning hos Borgerservice.",
    detail: "Inkluderet",
  },
];

function PackageSection() {
  const { t } = useTranslation();

  return (
    <section>

      <div className="text-center mb-12">
        <span
          className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          style={{
            color: "var(--color-yellow)",
            backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
          }}
        >
          Dit forløb
        </span>
        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          style={{ color: "var(--color-text)" }}
        >
          Hvad indeholder lovpakken?
        </h2>
        <p
          className="mt-4 text-lg max-w-2xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {t("prices.package.text")}
        </p>
      </div>

      <div
        className="rounded-2xl border-2 overflow-hidden"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="grid grid-cols-[auto_1fr_auto] gap-0 px-6 py-3 border-b-2"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "rgba(var(--color-yellow-rgb), 0.06)",
          }}
        >
          <span className="text-xs font-bold uppercase tracking-widest col-start-2" style={{ color: "var(--color-text-secondary)" }}>
            Hvad er inkluderet
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-right" style={{ color: "var(--color-text-secondary)" }}>
            Mængde
          </span>
        </div>

        {items.map((item, i) => {
          const Icon = item.icon;
          const isLast = i === items.length - 1;

          return (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4"
              style={{
                borderBottom: isLast ? "none" : "2px solid var(--color-border)",
                backgroundColor:
                  i % 2 === 0 ? "var(--color-bg)" : "rgba(var(--color-yellow-rgb), 0.015)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.08)",
                  border: "2px solid var(--color-border)",
                }}
              >
                <Icon className="w-4 h-4" style={{ color: "var(--color-yellow)" }} />
              </div>

              <div className="min-w-0">
                <span className="block font-semibold text-sm" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </span>
                <span className="block text-xs mt-0.5 leading-snug" style={{ color: "var(--color-text-secondary)" }}>
                  {item.description}
                </span>
              </div>

              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  backgroundColor: "var(--color-yellow)",
                  color: "#fff",
                }}
              >
                {item.detail}
              </span>
            </div>
          );
        })}
      </div>

     

    </section>
  );
}

export default PackageSection;