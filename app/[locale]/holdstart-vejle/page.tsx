import type { Metadata } from "next";
import PageHero from "@/app/components/ux/PageHero";
import HoldStart from "@/app/components/home/HoldStart";
import Contact from "@/app/components/Contact";
import gulbil from "@/app/assets/gulbil_2.jpeg";
import en from "../../i18n/locales/en/translation.json";
import da from "../../i18n/locales/da/translation.json";
import { buildAlternates, buildOpenGraph, robots, type Locale } from "@/app/lib/seo";

const translations: Record<Locale, any> = { en, da };
const PATH = "holdstart-vejle";

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
  const title = t?.seo.holdstart?.title ?? "Holdstart kørekort Vejle – vælg dit hold";
  const description = t?.seo.holdstart?.description ?? "Se næste holdstart hos Lønbæks Køreskole i Vejle. Aften- og formiddagshold til kørekort B. Tilmeld dig i dag.";

  return {
    title,
    description,
    keywords: t?.seo.holdstart?.keywords,
    alternates: buildAlternates(locale, PATH),
    robots,
    openGraph: buildOpenGraph(title, description, locale, PATH),
  };
}

export default async function Holdstart({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = translations[locale] || translations.en;

  return (
    <>
      <PageHero
        title={t?.holdstart_hero?.title}
        subtitle={t?.holdstart_hero?.subtitle}
        image={gulbil}
        position="0 -450px"
      />
      <HoldStart />
      <Contact />
    </>
  );
}