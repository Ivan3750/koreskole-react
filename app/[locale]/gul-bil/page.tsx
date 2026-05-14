import type { Metadata } from "next";

import PageHero from "../../components/ux/PageHero";
import FAQ from "../../components/FAQ";
import Contact from "../../components/Contact";
import InternalLinks from "../../components/ux/InternalLinks";
import GulBilWhy from "../../components/gul-bil/GulBilWhy";
import GulBilAbout from "../../components/gul-bil/GulBilAbout";

import gulbil from "@/app/assets/gulbil_2.jpeg";
import en from "../../i18n/locales/en/translation.json";
import da from "../../i18n/locales/da/translation.json";

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
    title: t?.seo?.gul_bil?.title,
    description: t?.seo?.gul_bil?.description,
    keywords: t?.seo?.gul_bil?.keywords,

    alternates: {
      canonical: `${BASE_URL}/${locale}/gul-bil-koereskole`,
      languages: {
        da: `${BASE_URL}/da/gul-bil-koereskole`,
        en: `${BASE_URL}/en/gul-bil-koereskole`,
        "x-default": `${BASE_URL}/da/gul-bil-koereskole`,
      },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },

    openGraph: {
      title: t?.seo?.gul_bil?.title,
      description: t?.seo?.gul_bil?.description,
      url: `${BASE_URL}/${locale}/gul-bil-koereskole`,
      siteName: "Lønbæks Køreskole",
      locale: locale === "da" ? "da_DK" : "en_GB",
      type: "website",
    },
  };
}


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Lønbæks Køreskole",
  alternateName: "Gul bil køreskole Vejle",
  foundingDate: "1985",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vejle",
    addressCountry: "DK",
  },
  url: BASE_URL,
  description:
    "Køreskole i Vejle siden 1985 med personlig undervisning. Kendt som køreskolen med den gule bil.",
};


export default async function GulBilPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = (translations[locale] || translations.da) as any;
  const g = t?.gulBil;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title={g?.hero?.title}
        subtitle={g?.hero?.subtitle}
        image={gulbil}
        position="center center"
      />
      <GulBilWhy t={g} />
      <GulBilAbout t={g} />
      <InternalLinks
        title={g?.exploreTitle}
        links={g?.exploreLinks ?? []}
        locale={locale}
      />

      <FAQ />
      <Contact />
    </>
  );
}