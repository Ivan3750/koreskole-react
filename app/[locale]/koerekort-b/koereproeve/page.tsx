import PageHero from "../../../components/PageHero";
import FAQ from "../../../components/FAQ";
import KoereproevePage from "@/app/components/koereproeve-vejle/KoereproevePage";
import gulbil from "@/app/assets/gulbil_2.jpeg"

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
  title: t?.seo.koerekort_b_koereproeve?.title,
    description: t?.seo.koerekort_b_koereproeve?.description,
    keywords: t?.seo.koerekort_b_koereproeve?.keywords,
    alternates: {
      languages: {
        en: "/en/koerekort-b/koereproeve",
        da: "/da/koerekort-b/koereproeve",
      },
    },
  };
}

export default async function Koereproeve({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.koereproeve_hero?.title}
        subtitle={t?.koereproeve_hero?.subtitle}
        image={gulbil}
        position="0 -450px"
      />

  
<KoereproevePage></KoereproevePage>
 <FAQ></FAQ>
    </>
  );
}

 
