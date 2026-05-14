import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Services from "../components/home/Services";
import HoldStart from "../components/home/HoldStart";
import Instructors from "../components/home/Instrustors";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import KorekortSection from "../components/korekort/KorekortSection";

import type { Metadata } from "next";

import da from "../i18n/locales/da/translation.json";
import en from "../i18n/locales/en/translation.json";
import Testimonials from "../components/Testimonials";

type Locale = "en" | "da";

const translations: Record<Locale, any> = { en, da };

const BASE_URL = "https://lønbæks.dk";

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
      canonical: `${BASE_URL}/${locale}/`,
      languages: {
        "da": `${BASE_URL}/da/`,
        "en": `${BASE_URL}/en/`,
        "x-default": `${BASE_URL}/da/`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: t?.seo.home?.title,
      description: t?.seo.home?.description,
      url: `${BASE_URL}/${locale}/`,
      siteName: "Lønbæks Køreskole",
      locale: locale === "da" ? "da_DK" : "en_GB",
      type: "website",
    },
  };
}

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: "Lønbæks Køreskole",
    alternateName: [
      "gul bil",
      "gul bil vejle",
      "gull bil",
      "køreskole gul bil"
    ],
    description:
      "Køreskole i Vejle med høj beståelsesrate og personlig undervisning siden 1985.",
    url: BASE_URL,
    telephone: "+4520760333",
    email: "hello@lønbæks.dk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vestre Engvej 7",
      addressLocality: "Vejle",
      postalCode: "7100",
      addressCountry: "DK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.7077031193386,
      longitude: 9.527343537395314,
    },
    founder: [
      {
        "@type": "Person",
        name: "Anna Marie Lønbæk",
        jobTitle: "Kørelærer",
      },
      {
        "@type": "Person",
        name: "Michael Lønbæk",
        jobTitle: "Kørelærer",
      },
    ],
    foundingDate: "1985",
    areaServed: {
      "@type": "City",
      name: "Vejle",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
      <LocalBusinessSchema />
      <Hero />
      <AboutSection />
      <Services />
      <HoldStart />
      <Testimonials/>
      <KorekortSection />
      <Instructors />
      <FAQ />
      <Contact />
    </>
  );
}