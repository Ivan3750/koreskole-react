import type { Metadata } from "next";
import PageHero from "../../components/ux/PageHero";
import Contact from "../../components/Contact";
import gulbil from "@/app/assets/gulbil_2.jpeg";
import en from "../../i18n/locales/en/translation.json";
import da from "../../i18n/locales/da/translation.json";
import { buildAlternates, buildOpenGraph, robots, type Locale } from "@/app/lib/seo";

const translations: Record<Locale, any> = { en, da };
const PATH = "kontakt";

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
 
  const title = t?.seo.kontakt?.title;
  const description = t?.seo.kontakt?.description;

  return {
    title,
    description,
    keywords: t?.seo.kontakt?.keywords,
    alternates: buildAlternates(locale, PATH),
    robots,
    openGraph: buildOpenGraph(title, description, locale, PATH),
  };
}

export default async function Kontakt({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.contact_hero?.title}
        subtitle={t?.contact_hero?.subtitle}
        image={gulbil}
        position="0 -450px"
      />
      <Contact />
    </>
  );
}