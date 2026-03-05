import PageHero from "../../../components/PageHero";
import heroImage from "../../../assets/hero-driving.jpg";
import FAQ from "../../../components/FAQ";
import PriserPage from "../../../components/PriserPage";
import type { Metadata } from "next";
import gulbil from "@/app/assets/gulbil_2.jpeg"

import en from "../../../i18n/locales/en/translation.json";
import da from "../../../i18n/locales/da/translation.json";

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
title: t?.seo.koerekort_b_priser?.title,
    description: t?.seo.koerekort_b_priser?.description,
    keywords: t?.seo.koerekort_b_priser?.keywords,
    alternates: {
      languages: {
        en: "/en/koerekort-b/priser",
        da: "/da/koerekort-b/priser",
      },
    },
  };
}

export default async function Priser({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.priser_hero?.title}
        subtitle={t?.priser_hero?.subtitle}
          image={gulbil}
        position="0 -450px"
      />

     <PriserPage></PriserPage>
<FAQ></FAQ>
    </>
  );
}

 

