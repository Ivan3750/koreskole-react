"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import CTA from "../components/cta"
import "@/app/i18n";


export default function TeoriproevePage() {
  const { t } = useTranslation();

  const stats = t("theory.stats", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <>
      <Head>
        <title>{t("theory.meta.title")}</title>
        <meta name="description" content={t("theory.meta.description")} />
        <meta name="keywords" content={t("theory.meta.keywords")} />
      </Head>

      <div style={{ background: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

          {/* HERO */}
          <section className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="space-y-6">

              <span className="px-4 py-1 rounded-full text-sm font-semibold"
                style={{
                  background: "var(--color-yellow-2)",
                  color: "var(--color-yellow-8)",
                }}>
                {t("theory.hero.badge")}
              </span>

              <h1 className="text-4xl font-bold">
                {t("theory.hero.title")}
              </h1>

              <p className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}>
                {t("theory.hero.paragraph1")}
              </p>

              <p className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}>
                {t("theory.hero.paragraph2")}
              </p>

              <Link
                href="/koerekort-b/"
                className="inline-block px-8 py-3 rounded-xl font-semibold transition hover:scale-[1.03]"
                style={{ background: "var(--color-yellow)", color: "white" }}
              >
                {t("theory.hero.cta")}
              </Link>

            </div>

            {/* Images unchanged */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/images/teori-class.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/images/traffic-sign.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden col-span-2">
                <Image src="/images/vejle-city.jpg" alt="" fill className="object-cover" />
              </div>
            </div>

          </section>

          {/* STATS */}
          <section className="grid lg:grid-cols-4 gap-8">
            {stats.map((item) => (
              <div key={item.title}
                className="p-6 rounded-2xl space-y-3"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                }}>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </section>

          {/* HOW IT WORKS */}
          <section className="p-10 rounded-2xl space-y-6"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
            }}>
            <h2 className="text-2xl font-bold">
              {t("theory.how.title")}
            </h2>

            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("theory.how.p1")}
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("theory.how.p2")}
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("theory.how.p3")}
            </p>
          </section>

          {/* LOCATION */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                {t("theory.location.title")}
              </h2>

              <p style={{ color: "var(--color-text-secondary)" }}>
                {t("theory.location.p1")}
              </p>

              <p style={{ color: "var(--color-text-secondary)" }}>
                {t("theory.location.p2")}
              </p>
            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image src="/images/location-modern.jpg" alt="" fill className="object-cover" />
            </div>

          </section>

          {/* CTA */}
        <CTA></CTA>

        </div>
      </div>
    </>
  );
}