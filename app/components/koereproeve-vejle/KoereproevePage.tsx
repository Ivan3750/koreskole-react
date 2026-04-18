"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { useParams } from "next/navigation";
import place_car_front from "../../assets//frdselsstyrelsen_car_front.jpeg";
import place_car_side_1 from "../../assets/frdselsstyrelsen_car_side_1.jpeg";
import place_car_side_2 from "../../assets/frdselsstyrelsen_car_side_2.jpeg";
import place_door from "../../assets/frdselsstyrelsen_door.jpeg";

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
                  className="text-base leading-relaxed"
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
                  className="inline-block px-6 py-3 rounded-xl font-semibold"
                  style={{ background: "var(--color-yellow)", color: "#000" }}
                >
                  {t("koereproeve.cta")}
                </Link>
              </div>

              {/* Creative 2-photo layout */}
<div className="relative h-96">
  {/* Large photo - tilted, fills most of the space */}
  <div
    className="absolute inset-0 right-16 rounded-2xl overflow-hidden shadow-xl"
    style={{   transformOrigin: "bottom left" }}
  >
    <Image
      src={place_car_front}
      alt=""
      fill
      className="object-cover"
    />
  </div>

  {/* Small photo - overlaps bottom-right, counter-rotated */}
  <div
    className="absolute bottom-0 right-0 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl border-4"
    style={{
      borderColor: "var(--color-yellow)",
    }}
  >
    <Image
      src={place_car_side_1}
      alt=""
      fill
      className="object-cover"
    />
  </div>
</div>
            </section>

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
              className="inline-block px-6 py-3 rounded-xl font-semibold"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
              {t("koereproeve.cta")}
            </Link>
          </section>

          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                {t("koereproeve.where.heading")}
              </h2>

              <p style={{ color: "var(--color-text-secondary)" }}>
                {t("koereproeve.where.step1")}
              </p>
            </div>

            {/* Vertical image with taller aspect ratio */}
            <div className="relative w-full" style={{ aspectRatio: "3 / 4", maxHeight: "480px" }}>
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src={place_door}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}