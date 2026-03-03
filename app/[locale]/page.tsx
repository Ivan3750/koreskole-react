import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Services from "../components/home/Services";
import HoldStart from "../components/home/HoldStart";
import Testimonials from "../components/Testimonials";
import Instructors from "../components/home/Instructors";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

 

import type { Metadata } from "next";

import da from "../i18n/locales/da/translation.json";
import en from "../i18n/locales/en/translation.json";

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
    title: t?.home?.driving_school,
    description: t?.home?.get_license,
    alternates: {
      languages: {
        en: "/en/home",
        da: "/da/home",
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
       <Hero />
      <AboutSection />
      <Services />
      <HoldStart />
      <Testimonials />
      <Instructors />
      <FAQ />
      <Contact />
    </>
  );
}

 


 