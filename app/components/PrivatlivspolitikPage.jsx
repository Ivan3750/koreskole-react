"use client";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2
      className="font-display text-xl md:text-2xl font-bold mb-4"
      style={{ color: "var(--color-text)" }}
    >
      {title}
    </h2>
    <div
      className="space-y-3 text-base leading-relaxed"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {children}
    </div>
  </div>
);

const PrivatlivspolitikPage = () => {
  const { t } = useTranslation();

  return (
    <main
      className="py-20 md:py-28 lg:py-40"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6 max-w-4xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-14 text-center lg:text-left">
          <span
            className="font-semibold text-sm uppercase tracking-widest"
            style={{ color: "var(--color-yellow)" }}
          >
            {t("privatlivspolitik.label")}
          </span>
          <h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {t("privatlivspolitik.heading")}
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("privatlivspolitik.intro")}
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-16 h-1 rounded mb-14"
          style={{ backgroundColor: "var(--color-yellow)" }}
        />

        {/* 1. Generelt */}
        <Section title={t("privatlivspolitik.general.title")}>
          <p>{t("privatlivspolitik.general.p1")}</p>
        </Section>

        {/* 2. Dataansvarlig */}
        <Section title={t("privatlivspolitik.controller.title")}>
          <p>{t("privatlivspolitik.controller.p1")}</p>
          <address
            className="not-italic mt-3 p-5 rounded-2xl border-2 text-sm leading-loose whitespace-pre-line"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
          >
            {t("privatlivspolitik.controller.details")}
          </address>
        </Section>

        {/* 3. Hvilke oplysninger indsamler vi */}
        <Section title={t("privatlivspolitik.collected.title")}>
          <p>{t("privatlivspolitik.collected.p1")}</p>
          <ul className="list-disc pl-5 space-y-1">
            {t("privatlivspolitik.collected.list", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
          <p>{t("privatlivspolitik.collected.p2")}</p>
        </Section>

        {/* 4. Formål */}
        <Section title={t("privatlivspolitik.purpose.title")}>
          <ul className="list-disc pl-5 space-y-1">
            {t("privatlivspolitik.purpose.list", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
        </Section>

        {/* 5. Retsgrundlag */}
        <Section title={t("privatlivspolitik.legal.title")}>
          <p>{t("privatlivspolitik.legal.p1")}</p>
        </Section>

        {/* 6. Videregivelse */}
        <Section title={t("privatlivspolitik.sharing.title")}>
          <p>{t("privatlivspolitik.sharing.p1")}</p>
        </Section>

        {/* 7. Opbevaring */}
        <Section title={t("privatlivspolitik.retention.title")}>
          <p>{t("privatlivspolitik.retention.p1")}</p>
        </Section>

        {/* 8. Dine rettigheder */}
        <Section title={t("privatlivspolitik.rights.title")}>
          <p>{t("privatlivspolitik.rights.p1")}</p>
          <ul className="list-disc pl-5 space-y-1">
            {t("privatlivspolitik.rights.list", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
          <p className="pt-2">{t("privatlivspolitik.rights.contact")}</p>
        </Section>

        {/* 9. Klage til Datatilsynet */}
        <Section title={t("privatlivspolitik.supervisory.title")}>
          <p>{t("privatlivspolitik.supervisory.p1")}</p>
          <address
            className="not-italic mt-3 p-5 rounded-2xl border-2 text-sm leading-loose whitespace-pre-line"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
          >
            {t("privatlivspolitik.supervisory.address")}
          </address>
        </Section>

        {/* Footer note */}
        <p
          className="text-sm mt-12 pt-6 border-t"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-secondary)",
          }}
        >
          {t("privatlivspolitik.updated")}
        </p>
      </div>
    </main>
  );
};

export default PrivatlivspolitikPage;

/* ═══════════════════════════════════════════════════════════════
   TRANSLATION KEYS — kopier til da.json og en.json
═══════════════════════════════════════════════════════════════

── da.json ─────────────────────────────────────────────────────


── en.json ─────────────────────────────────────────────────────

*/