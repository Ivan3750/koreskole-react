import PageHero from "../../../components/PageHero";
import heroImage from "../../../assets/hero-driving.jpg";
import Info from "../../../components/koereproeve-vejle/Info";
import TimeLine from "../../../components/koereproeve-vejle/TimeLine";
import PassStrategySection from "../../../components/koereproeve-vejle/PassStrategySection";
import FAQ from "../../../components/FAQ";
import Contact from "@/app/components/Contact";
import HoldStart from "@/app/components/home/HoldStart";
import Priser from "@/app/components/koereproeve-vejle/Priser";
import type { Metadata } from "next";
import hero from "../../../assets/steering-wheel.jpeg";
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
    title: t?.seo.koerekort_b_koerekort?.title,
    description: t?.seo.koerekort_b_koerekort?.description,
    keywords: t?.seo.koerekort_b_koerekort?.keywords,
    alternates: {
      languages: {
        en: "/en/koerekort-b/koerekort",
        da: "/da/koerekort-b/koerekort",
      },
    },
  };
}

export default async function Koerekort({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.licenseB.hero?.title}
        subtitle={t?.licenseB.hero?.subtitle}
        image={heroImage}
      />

      <Info></Info>
   {/*    <Priser></Priser>
      <TimeLine></TimeLine> */}
      <HoldStart></HoldStart>
      <PassStrategySection></PassStrategySection>
      <FAQ></FAQ>
      <Contact></Contact>
    </>
  );
}
