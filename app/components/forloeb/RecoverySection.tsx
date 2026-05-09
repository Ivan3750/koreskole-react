"use client";
import Link from "next/link";
import lov from "../../assets/lov.png";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
 


function RecoverySection({ withLocale }: { withLocale: (p: string) => string }) {
  const { t } = useTranslation();
  const recoveryList = t("prices.recovery.list", { returnObjects: true }) as string[];

  return (
    <section
      className="relative rounded-3xl overflow-hidden border-2 shadow-xl"
      style={{ borderColor: "var(--color-border)", minHeight: "560px" }}
    >
      <img
        src={lov.src}
        alt={t("prices.recovery.imageAlt")}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, transparent 100%)" }}
      />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-lg p-10 md:p-14 space-y-6">
          <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "var(--color-yellow)" }}>
            {t("prices.recovery.badge")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-white">
            {t("prices.recovery.title")}
          </h2>
          <p className="normal-text" style={{ color: "rgba(255,255,255,0.80)" }}>
            {t("prices.recovery.text")}
          </p>
          <p className="normal-text" style={{ color: "rgba(255,255,255,0.70)" }}>
            {t("prices.recovery.seo")}
          </p>
          <ul className="space-y-3">
            {recoveryList.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "var(--color-yellow)", color: "#000" }}
                >
                  ✓
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link
              href={withLocale("/kontakt")}
              className="px-8 py-4 rounded-2xl font-semibold inline-block"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
              {t("prices.recovery.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecoverySection;