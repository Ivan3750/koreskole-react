import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Info from "../../../components/koereproeve-vejle/Info";
import PassStrategySection from "../../../components/koereproeve-vejle/PassStrategySection";
import FAQ from "../../../components/FAQ";
import Contact from "@/app/components/Contact";
import HoldStart from "@/app/components/home/HoldStart";
import gulbil from "@/app/assets/gulbil_2.jpeg";
import en from "../../../i18n/locales/en/translation.json";
import da from "../../../i18n/locales/da/translation.json";
import { buildAlternates, buildOpenGraph, robots, type Locale } from "@/app/lib/seo";

const translations: Record<Locale, any> = { en, da };
const PATH = "koerekort-b/koerekort";

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
  const title = t?.seo.koerekort_b_koerekort?.title;
  const description = t?.seo.koerekort_b_koerekort?.description;

  return {
    title,
    description,
    keywords: t?.seo.koerekort_b_koerekort?.keywords,
    alternates: buildAlternates(locale, PATH),
    robots,
    openGraph: buildOpenGraph(title, description, locale, PATH),
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
        image={gulbil}
        position="0 -450px"
      />
      <Info />
      <HoldStart />
      <PassStrategySection />
      <FAQ />
      <Contact />
    </>
  );
}