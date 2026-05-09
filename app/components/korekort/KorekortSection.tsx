"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import "@/app/i18n";
import school from "../../assets/school_inside_2.jpeg";
import Button from "../ux/Button";

export default function KorekortSection() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string;

   useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  const features = t("meet.features", { returnObjects: true }) as string[];

  return (
    <section className="py-28" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
         <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
            {t("meet.subtitle")}
          </span>

          <h2
            className="text-4xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {t("meet.title")}
          </h2>

          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
            dangerouslySetInnerHTML={{ __html: t("meet.description") }}
          />

          <ul className="space-y-3 pt-2">
            {features?.map((feature, index) => (
              <li className="flex gap-3" key={index}>
                <span className="text-yellow-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

     
          <div className="flex gap-4 pt-4">
            {/* <Link
              href={withLocale("/hold-")}
              className="px-8 py-4 rounded-xl font-semibold"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
              {t("meet.cta.book")} 
            </Link> */}
            <Button locale={"da"} label={t("meet.cta.book")}></Button>

            <Link
              href={withLocale("/koerekort-b/forloeb/")}
              className="px-8 py-4 rounded-xl border"
              style={{ borderColor: "var(--color-border)" }}
            >
              {t("meet.cta.see")}
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-[520px] rounded-3xl overflow-hidden">
          <Image
            src={school}
            alt={t("meet.imageAlt")}
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}