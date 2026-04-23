"use client";

import Image from "next/image";
import Link from "next/link";
import school from "../assets/school_inside_2.jpeg";
import lov from "../assets/lov.png";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import "@/app/i18n";

 function ForloebPage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string;

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  const meetingFeatures = t("prices.meeting.features", {
    returnObjects: true,
  }) as { title: string; text: string }[];

  const packageItems = t("prices.package.items", {
    returnObjects: true,
  }) as { title: string; text: string }[];

  const recoveryList = t("prices.recovery.list", {
    returnObjects: true,
  }) as string[];

  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

         <section className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image src={school} alt={t("prices.meeting.imageAlt")} fill className="object-cover" />
          </div>

          <div className="space-y-6">

            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              {t("prices.meeting.badge")}
            </span>

            <h2 className="text-4xl font-bold">
              {t("prices.meeting.title")}
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("prices.meeting.text")}
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              {meetingFeatures.map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href={withLocale("/kontakt")}
              className="px-8 py-4 rounded-xl font-semibold inline-block"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
              {t("prices.meeting.cta")}
            </Link>

          </div>
        </section>


        {/* LOVPAKKE */}
        <section className="space-y-16">

          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-bold">
              {t("prices.package.title")}
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("prices.package.text")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageItems.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[var(--color-border)]  bg-[var(--color-bg-elevated)]">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </section>


        {/* GENERHVERVELSE */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">

            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
              {t("prices.recovery.badge")}
            </span>

            <h2 className="text-4xl font-bold">
              {t("prices.recovery.title")}
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("prices.recovery.text")}
            </p>

            <ul className="space-y-3 pt-2">
              {recoveryList.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-yellow-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image
              src={lov}
              alt={t("prices.recovery.imageAlt")}
              fill
              className="object-cover"
            />
          </div>

        </section>


        {/* CTA */}
        <section className="bg-[var(--color-bg-elevated)] rounded-3xl p-16 text-center space-y-6">

          <h2 className="text-4xl font-bold">
            {t("prices.cta.title")}
          </h2>

          <p className="max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            {t("prices.cta.text")}
          </p>

          <Link
            href={withLocale("/kontakt")}
            className="px-10 py-4 rounded-xl font-semibold inline-block"
            style={{ background: "var(--color-yellow)", color: "#000" }}
          >
            {t("prices.cta.button")}
          </Link>

        </section>

      </div>
    </div>
  );
}

export default ForloebPage;