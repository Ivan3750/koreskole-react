import PageHero from "../../components/PageHero";
import Instructors from "../../components/om-os/Instructors";
import AboutIntro from "../../components/om-os/AboutInro";
import FAQ from "../../components/FAQ";
import Contact from "../../components/Contact";
import Cars from "../../components/om-os/Cars";

import type { Metadata } from "next";
import en from "../../i18n/locales/en/translation.json";
import da from "../../i18n/locales/da/translation.json";
import gulbil from "@/app/assets/gulbil_2.jpeg";

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
     title: t?.seo.om_os?.title,
    description: t?.seo.om_os?.description,
    keywords: t?.seo.om_os?.keywords,

     alternates: {
      canonical: `${BASE_URL}/${locale}/om-os`,
      languages: {
        da: `${BASE_URL}/da/om-os`,
        en: `${BASE_URL}/en/om-os`,
        "x-default": `${BASE_URL}/da/om-os`,
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
      title: t?.seo.om_os?.title,
      description: t?.seo.om_os?.description,
      url: `${BASE_URL}/${locale}/om-os`,
      siteName: "Lønbæks Køreskole",
      locale: locale === "da" ? "da_DK" : "en_GB",
      type: "website",
    },
  };
}

 function InstructorsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: "Lønbæks Køreskole",
    url: BASE_URL,
    employee: [
      {
        "@type": "Person",
        name: "Anna Marie Lønbæk",
        jobTitle: "Kørelærer",
        description:
          "Over 29 års erfaring som kørelærer i Vejle siden 1996.",
        worksFor: {
          "@type": "DrivingSchool",
          name: "Lønbæks Køreskole",
        },
      },
      {
        "@type": "Person",
        name: "Michael Lønbæk",
        jobTitle: "Kørelærer",
        description:
          "Over 39 års erfaring med kørekort B siden 1985.",
        worksFor: {
          "@type": "DrivingSchool",
          name: "Lønbæks Køreskole",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
      <InstructorsSchema />
      <PageHero
        title={t?.aboutHero?.title}
        subtitle={t?.aboutHero?.subtitle}
        image={gulbil}
        position="0px -450px"
      />
      <AboutIntro />
      <Instructors />
      <Cars />
      <FAQ />
      <Contact />
    </>
  );
}