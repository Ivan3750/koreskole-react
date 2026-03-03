import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import heroImage from "@/app/assets/hero-driving.jpg";
import HoldStart from "@/app/components/home/HoldStart";
import Contact from "@/app/components/Contact";

import en from "../../i18n/locales/en/translation.json";
import da from "../../i18n/locales/da/translation.json";

type Locale = "en" | "da";

const translations: Record<Locale, any> = { en, da };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "da" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = translations[locale];

  return {
    title: t?.holdstart_hero?.title,
    description: t?.holdstart_hero?.subtitle,
    alternates: {
      languages: {
        en: "/en/holdstart-vejle",
        da: "/da/holdstart-vejle",
      },
    },
  };
}

export default async function Holdstart({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.holdstart_hero?.title}
        subtitle={t?.holdstart_hero?.subtitle}
        image={heroImage}
      />

      <HoldStart />
      <Contact />
    </>
  );
}