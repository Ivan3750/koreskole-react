"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { useParams } from "next/navigation";
import place_car_front from "../../assets/frdselsstyrelsen_car_front.jpeg";
import place_car_side_1 from "../../assets/frdselsstyrelsen_car_side_1.jpeg";
import place_door from "../../assets/frdselsstyrelsen_door.jpeg";

const cards = [
  ["duration", "durationText"],
  ["technicalCheck", "technicalText"],
  ["traffic", "trafficText"],
  ["assessment", "assessmentText"],
];

export default function KoereproevePage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string;

  const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  return (
    <div style={{ backgroundColor: "var(--color-bg)" }}>

      <section className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              {t("koereproeve.tag")}
            </span>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("koereproeve.heading")}
            </h1>

            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("koereproeve.intro")}
            </p>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("koereproeve.note")}
            </p>

            <Link
              href={withLocale("/koerekort-b/koerekort/")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-yellow)",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(var(--color-yellow-rgb), 0.3)",
              }}
            >
              {t("koereproeve.cta")}
            </Link>
          </div>

          <div className="relative h-96 order-first lg:order-last">
            <div
              className="absolute inset-0 right-16 rounded-3xl overflow-hidden shadow-2xl border-2"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Image src={place_car_front} alt="" fill className="object-cover" />
            </div>
            <div
              className="absolute bottom-0 right-0 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl border-4"
              style={{ borderColor: "var(--color-yellow)" }}
            >
              <Image src={place_car_side_1} alt="" fill className="object-cover" />
            </div>
            <div
              className="absolute -top-8 -left-8 w-40 h-40 rounded-full opacity-10 -z-10"
              style={{ backgroundColor: "var(--color-yellow)" }}
            />
          </div>

        </div>
      </section>

      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--color-bg-secondary, var(--color-bg))" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map(([key, descKey], index) => (
              <div
                key={key}
                className="rounded-2xl border-2 p-6 space-y-3"
                style={{
                  borderColor: index === 0 ? "var(--color-yellow)" : "var(--color-border)",
                  backgroundColor: index === 0 ? "rgba(var(--color-yellow-rgb), 0.04)" : "var(--color-bg)",
                }}
              >
                <div
                  className="w-8 h-1 rounded-full"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                />
                <h3
                  className="font-bold text-base"
                  style={{ color: "var(--color-text)" }}
                >
                  {t(`koereproeve.cards.${key}`)}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t(`koereproeve.cards.${descKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left lg:sticky lg:top-32">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
              }}
            >
              Forløbet
            </span>
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("koereproeve.how.heading")}
            </h2>
            <Link
              href={withLocale("/koerekort-b/koerekort/")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:opacity-90 mt-4"
              style={{
                backgroundColor: "var(--color-yellow)",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(var(--color-yellow-rgb), 0.3)",
              }}
            >
              {t("koereproeve.cta")}
            </Link>
          </div>

          <div className="space-y-4">
            {[t("koereproeve.how.step1"), t("koereproeve.how.step2")].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border-2 px-6 py-5"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm"
                  style={{ backgroundColor: "var(--color-yellow)", color: "#fff" }}
                >
                  {index + 1}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section
        className="py-20 md:py-28 lg:py-40"
        style={{ backgroundColor: "var(--color-bg-secondary, var(--color-bg))" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <span
                className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
                style={{
                  color: "var(--color-yellow)",
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
                }}
              >
                Lokation
              </span>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                {t("koereproeve.where.heading")}
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t("koereproeve.where.step1")}
              </p>
            </div>

            <div
              className="relative w-full order-first lg:order-last"
              style={{ aspectRatio: "3 / 4", maxHeight: "520px" }}
            >
              <div
                className="relative h-full rounded-3xl overflow-hidden border-2 shadow-2xl"
                style={{ borderColor: "var(--color-border)" }}
              >
                <Image src={place_door} alt="" fill className="object-cover" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10 -z-10"
                style={{ backgroundColor: "var(--color-yellow)" }}
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}