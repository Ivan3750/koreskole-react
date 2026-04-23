export const BASE_URL = "https://lønbæks.dk";

export type Locale = "en" | "da";

export function buildAlternates(locale: Locale, path: string) {
  return {
    canonical: `${BASE_URL}/${locale}/${path}`,
    languages: {
      da: `${BASE_URL}/da/${path}`,
      en: `${BASE_URL}/en/${path}`,
      "x-default": `${BASE_URL}/da/${path}`,
    },
  };
}

export const robots = {
  index: true,
  follow: true,
  googleBot: { index: true, follow: true },
};

export function buildOpenGraph(title: string, description: string, locale: Locale, path: string) {
  return {
    title,
    description,
    url: `${BASE_URL}/${locale}/${path}`,
    siteName: "Lønbæks Køreskole",
    locale: locale === "da" ? "da_DK" : "en_GB",
    type: "website" as const,
  };
}