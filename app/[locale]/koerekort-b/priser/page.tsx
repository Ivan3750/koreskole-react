import PageHero from "../../../components/PageHero";
import heroImage from "../../../assets/hero-driving.jpg";
import FAQ from "../../../components/FAQ";
import PriserPage from "../../../components/PriserPage";
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
    title: t?.contact_hero?.title,
    description: t?.contact_hero?.subtitle,
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
        title={t?.theoryHero?.title}
        subtitle={t?.theoryHero?.subtitle}
        image={heroImage}
      />

     <PriserPage></PriserPage>
<FAQ></FAQ>
    </>
  );
}

 


     /*    title=" Pris på kørekort i Vejle — hvad koster det?"
        subtitle=" Gennemsigtighed er vigtigt. Derfor finder du her alle vores priser uden skjulte omkostninger." */




