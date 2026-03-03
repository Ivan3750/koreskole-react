import TeoriproevePage from "../../../components/TeoriproevePage";
import PageHero from "../../../components/PageHero";
import heroImage from "../../../assets/hero-driving.jpg";
import FAQ from "../../../components/FAQ";


import type { Metadata } from "next";

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
   title: t?.seo.koerekort_b_teoriproeve?.title,
    description: t?.seo.koerekort_b_teoriproeve?.description,
    keywords: t?.seo.koerekort_b_teoriproeve?.keywords,
    alternates: {
      languages: {
        en: "/en/koerekort-b/teoriproeve",
        da: "/da/koerekort-b/teoriproeve",
      },
    },
  };
}

export default async function Teoriproeve({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.theoryHero?.title}
        subtitle={t?.theoryHero?.subtitle}
        image={heroImage}
      />

      <TeoriproevePage></TeoriproevePage>
 <FAQ></FAQ>
    </>
  );
}

 

