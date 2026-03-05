
import PageHero from "../../components/PageHero";
import heroImage from "../../assets/hero-driving.jpg";
import ContactFormPage from "../../components/ContactFormPage";
import type { Metadata } from "next";
import gulbil from "@/app/assets/gulbil_2.jpeg"

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
title: t?.seo.kontakt?.title,
    description: t?.seo.kontakt?.description,
    keywords: t?.seo.kontakt?.keywords,
    alternates: {
      languages: {
        en: "/en/kontakt",
        da: "/da/kontakt",
      },
    },
  };
}

export default async function Konktakt({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.contact_hero?.title}
        subtitle={t?.contact_hero?.subtitle}
        image={gulbil}
        position="0 -450px"
      />

     <ContactFormPage />

    </>
  );
}
