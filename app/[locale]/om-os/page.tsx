import PageHero from "../../components/PageHero";
import heroImage from "../../assets/hero-driving.jpg";
import Instructors  from "../../components/om-os/Instructors";
import AboutIntro from "../../components/om-os/AboutInro";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import Contact from "../../components/Contact";
import Cars from "../../components/om-os/Cars";
import type { Metadata } from "next";
import en from "../../i18n/locales/en/translation.json";
import da from "../../i18n/locales/da/translation.json";
import gulbil from "@/app/assets/gulbil.png"
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
  title: t?.seo.om_os?.title,
    description: t?.seo.om_os?.description,
    keywords: t?.seo.om_os?.keywords,
    alternates: {
      languages: {
        en: "/en/om-os",
        da: "/da/om-os",
      },
    },
  };
}

export default async function Omos({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.aboutHero?.title}
        subtitle={t?.aboutHero?.subtitle}
        image={gulbil}
      />

      
      <AboutIntro />
      <Instructors />
      <Cars></Cars>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Contact></Contact>
    </>
  );
} 