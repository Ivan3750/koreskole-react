"use client";
import Link from "next/link";
import school from "../assets/school_inside_2.jpeg";
import lov from "../assets/lov.png";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/i18n";

function ForloebPage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  const meetingFeatures = t("prices.meeting.features", { returnObjects: true }) as { title: string; text: string }[];
  const packageItems = t("prices.package.items", { returnObjects: true }) as { title: string; text: string }[];
  const recoveryList = t("prices.recovery.list", { returnObjects: true }) as string[];

  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-40 space-y-32">

        {/* MØDE */}
        <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="rounded-3xl overflow-hidden border-2 shadow-xl w-full h-[420px] md:h-[560px] lg:h-[640px]"
              style={{ borderColor: "var(--color-border)" }}
            >
              <img src={school.src} alt={t("prices.meeting.imageAlt")} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="max-w-xl mx-auto lg:mx-0 order-1 lg:order-2 text-center lg:text-left space-y-6">
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "var(--color-yellow)" }}>
              {t("prices.meeting.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance" style={{ color: "var(--color-text)" }}>
              {t("prices.meeting.title")}
            </h2>
            <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
              {t("prices.meeting.text")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2 text-left">
              {meetingFeatures.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl border-2" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}>
                  <h4 className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>{item.title}</h4>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Link href={withLocale("/kontakt")} className="px-8 py-4 rounded-2xl font-semibold inline-block" style={{ background: "var(--color-yellow)", color: "#000" }}>
                {t("prices.meeting.cta")}
              </Link>
            </div>
          </div>
        </section>

        {/* LOVPAKKEN — accordion */}
        <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-5">
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "var(--color-yellow)" }}>
              {t("prices.package.badge", "Lovpakken")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance" style={{ color: "var(--color-text)" }}>
              {t("prices.package.title")}
            </h2>
            <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
              {t("prices.package.text")}
            </p>
            <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
              {t("prices.package.seo", "Vores lovpakke dækker hele kørekortsprocessen fra A til Z – alle obligatoriske elementer er inkluderet, så du ikke skal bekymre dig om at mangle noget. Vi guider dig sikkert igennem hvert trin, fra første teoritime til den afsluttende køreprøve.")}
            </p>
          </div>

          <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>
            {packageItems.map((item, i) => (
              <div key={i} className="py-1">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: openIndex === i ? "var(--color-yellow)" : "var(--color-bg-elevated)", color: openIndex === i ? "#000" : "var(--color-text-secondary)", border: openIndex === i ? "none" : "2px solid var(--color-border)" }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-semibold text-base" style={{ color: "var(--color-text)" }}>{item.title}</span>
                  </div>
                  <span
                    className="text-xl flex-shrink-0 transition-transform duration-200"
                    style={{ color: "var(--color-yellow)", transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <p className="pb-4 pl-12 normal-text" style={{ color: "var(--color-text-secondary)" }}>
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GENERHVERVELSE — full bleed photo with solid panel */}
        <section
          className="relative rounded-3xl overflow-hidden border-2 shadow-xl"
          style={{ borderColor: "var(--color-border)", minHeight: "560px" }}
        >
          <img
            src={lov.src}
            alt={t("prices.recovery.imageAlt")}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, transparent 100%)" }} />

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
                {t("prices.recovery.seo", "Generhvervelse er et specialiseret forløb for dig, der har mistet kørekortet og ønsker at få det tilbage. Vi kender lovkravene og vejleder dig præcist og effektivt hele vejen.")}
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
                  {t("prices.recovery.cta", "Hør mere om forløbet")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="rounded-3xl border-2 p-12 md:p-16 text-center space-y-6"
          style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance" style={{ color: "var(--color-text)" }}>
            {t("prices.cta.title")}
          </h2>
          <p className="normal-text max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            {t("prices.cta.text")}
          </p>
          <Link href={withLocale("/kontakt")} className="px-10 py-4 rounded-2xl font-semibold inline-block" style={{ background: "var(--color-yellow)", color: "#000" }}>
            {t("prices.cta.button")}
          </Link>
        </section>

      </div>
    </div>
  );
}

export default ForloebPage;