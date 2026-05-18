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

const HandelsbetingelserPage = () => {
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
            {t("handelsbetingelser.label")}
          </span>
          <h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {t("handelsbetingelser.heading")}
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("handelsbetingelser.intro")}
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-16 h-1 rounded mb-14"
          style={{ backgroundColor: "var(--color-yellow)" }}
        />

        {/* 1. Generelt */}
        <Section title={t("handelsbetingelser.general.title")}>
          <p>{t("handelsbetingelser.general.p1")}</p>
        </Section>

        {/* 2. Ydelser */}
        <Section title={t("handelsbetingelser.services.title")}>
          <p>{t("handelsbetingelser.services.p1")}</p>
        </Section>

        {/* 3. Undervisningssprog */}
        <Section title={t("handelsbetingelser.language.title")}>
          <p>{t("handelsbetingelser.language.p1")}</p>
        </Section>

        {/* 4. Tilmelding */}
        <Section title={t("handelsbetingelser.enrollment.title")}>
          <p>{t("handelsbetingelser.enrollment.p1")}</p>
          <p>{t("handelsbetingelser.enrollment.p2")}</p>
        </Section>

        {/* 5. Pris og betaling */}
        <Section title={t("handelsbetingelser.payment.title")}>
          <p>{t("handelsbetingelser.payment.p1")}</p>
        </Section>

        {/* 6. Praktiske forhold */}
        <Section title={t("handelsbetingelser.practical.title")}>
          <p>{t("handelsbetingelser.practical.p1")}</p>
        </Section>

        {/* 7. Fortrydelsesret */}
        <Section title={t("handelsbetingelser.withdrawal.title")}>
          <p>{t("handelsbetingelser.withdrawal.p1")}</p>
          <p>{t("handelsbetingelser.withdrawal.p2")}</p>
        </Section>

        {/* 8. Anmeldelser */}
        <Section title={t("handelsbetingelser.reviews.title")}>
          <p>{t("handelsbetingelser.reviews.p1")}</p>
        </Section>

        {/* 9. Reklamationer og klageadgang */}
        <Section title={t("handelsbetingelser.complaints.title")}>
          <p>{t("handelsbetingelser.complaints.p1")}</p>
          <address
            className="not-italic mt-3 p-5 rounded-2xl border-2 text-sm leading-loose whitespace-pre-line"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
          >
            {t("handelsbetingelser.complaints.address")}
          </address>
          <p className="pt-2">{t("handelsbetingelser.complaints.eu")}</p>
        </Section>

        {/* Footer note */}
        <p
          className="text-sm mt-12 pt-6 border-t"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-secondary)",
          }}
        >
          {t("handelsbetingelser.updated")}
        </p>
      </div>
    </main>
  );
};

export default HandelsbetingelserPage;

/* ═══════════════════════════════════════════════════════════════
   TRANSLATION KEYS — kopier til da.json og en.json
═══════════════════════════════════════════════════════════════

── da.json ─────────────────────────────────────────────────────


── en.json ─────────────────────────────────────────────────────

*/