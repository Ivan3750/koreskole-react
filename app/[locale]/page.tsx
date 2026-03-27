import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Services from "../components/home/Services";
import HoldStart from "../components/home/HoldStart";
import Testimonials from "../components/Testimonials";
import Instructors from "../components/home/Instrustors";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

 

import type { Metadata } from "next";

import da from "../i18n/locales/da/translation.json";
import en from "../i18n/locales/en/translation.json";
import KorekortSection from "../components/KorekortSection";

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
  title: t?.seo.home?.title,
    description: t?.seo.home?.description,
    keywords: t?.seo.home?.keywords,
    alternates: {
      languages: {
        en: "/en/",
        da: "/da/",
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
      <KorekortSection></KorekortSection>
{/*       <Testimonials />
 */}      <Instructors />
      <FAQ />
      <Contact />
    </>
  );
}

 


 