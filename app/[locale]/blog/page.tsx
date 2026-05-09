import Blog from "../../components/blog/Blog";
import PageHero from "../../components/ux/PageHero";
import heroImage from "../../assets/hero-driving.jpg";
import gulbil from "@/app/assets/gulbil_2.jpeg"


import type { Metadata } from "next";

import en from "../../i18n/locales/en/translation.json";
import da from "../../i18n/locales/da/translation.json";

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
    title: t?.seo.blog?.title,
    description: t?.seo.blog?.description,
    keywords: t?.seo.blog?.keywords,
    alternates: {
      languages: {
        en: "/en/blog",
        da: "/da/blog",
      },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.blog?.title}
        subtitle={t?.blog?.subtitle}
        image={gulbil}
        position="0px -450px"
      />

       
      <Blog></Blog>
    </>
  );
}

 




 