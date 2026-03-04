"use client";

import Image from "next/image";
import Link from "next/link";
 import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { useParams } from "next/navigation";

export default function KoereproevePage() {
  const { t } = useTranslation();
    const params = useParams();
    const locale = params?.locale as string;
  
 const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };
  return (
    <>
       

      <div style={{ background: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
          {/* Hero Section */}
          <section className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <span
                className="px-4 py-1 rounded-full text-sm font-semibold"
                style={{
                  background: "var(--color-yellow-2)",
                  color: "var(--color-yellow-8)",
                }}
              >
                {t("koereproeve.tag")}
              </span>

              <h1
                className="text-4xl font-bold"
                style={{ color: "var(--color-text)" }}
              >
                {t("koereproeve.heading")}
              </h1>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t("koereproeve.intro")}
              </p>

              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t("koereproeve.note")}
              </p>

              <Link
                href={withLocale("/koerekort-b/koerekort/")}
                className="px-6 py-3 rounded-xl font-semibold"
                style={{ background: "var(--color-yellow)", color: "#000" }}
              >
                {t("koereproeve.cta")}
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/driving-modern.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/car-interior.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden col-span-2">
                <Image
                  src="/images/vejle-city.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Info Cards Section */}
          <section className="grid lg:grid-cols-4 gap-8">
            {[
              ["duration", "durationText"],
              ["technicalCheck", "technicalText"],
              ["traffic", "trafficText"],
              ["assessment", "assessmentText"],
            ].map(([key, descKey]) => (
              <div
                key={key}
                className="p-6 rounded-2xl space-y-3"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3 className="font-bold">{t(`koereproeve.cards.${key}`)}</h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t(`koereproeve.cards.${descKey}`)}
                </p>
              </div>
            ))}
          </section>

          {/* How it works Section */}
          <section
            className="p-10 rounded-2xl space-y-6"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 className="text-2xl font-bold">
              {t("koereproeve.how.heading")}
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("koereproeve.how.step1")}
            </p>

            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("koereproeve.how.step2")}
            </p>

            <Link
                href={withLocale("/koerekort-b/koerekort/")}
              className="px-6 py-3 rounded-xl font-semibold"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
              {t("koereproeve.cta")}
            </Link>
          </section>

          {/* Location Section */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                {t("koereproeve.where.heading")}
              </h2>

              <p style={{ color: "var(--color-text-secondary)" }}>
                {t("koereproeve.where.step1")}
              </p>

              <p style={{ color: "var(--color-text-secondary)" }}>
                {t("koereproeve.where.step2")}
              </p>

            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="/images/driving-test.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </section>

       
        </div>
      </div>
    </>
  );
}
