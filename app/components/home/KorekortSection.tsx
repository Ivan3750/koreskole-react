"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/i18n";
import school from "../../assets/school_inside_2.webp";
import BookingForm from "../BookingForm";

export default function KorekortSection() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string;
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (locale && i18n.language !== locale) i18n.changeLanguage(locale);
  }, [locale, i18n]);

  const features = t("meet.features", { returnObjects: true }) as string[];

  return (
    <section className="py-28" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
            {t("meet.subtitle")}
          </span>
          <h2 className="text-4xl font-bold leading-tight" style={{ color: "var(--color-text)" }}>
            {t("meet.title")}
          </h2>
          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
            dangerouslySetInnerHTML={{ __html: t("meet.description") }}
          />
          <ul className="space-y-3 pt-2">
            {features?.map((feature, i) => (
              <li className="flex gap-3" key={i}>
                <span className="text-yellow-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setShowBooking(true)}
              className="px-6 py-3 font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
              style={{
                background: "var(--color-primary)",
                color: "#111",
                borderRadius: "calc(var(--radius) - 6px)",
                boxShadow: "var(--shadow-1)",
              }}
            >
              {t("meet.cta.book")}
            </button>
          </div>
        </div>
        <div className="relative h-[520px] rounded-3xl overflow-hidden">
          <Image src={school} alt={t("meet.imageAlt")} fill className="object-cover" />
        </div>
      </div>
      {showBooking && (
        <BookingForm
          variant="meeting"
          meetingDate="Gratis møde"
          onClose={() => setShowBooking(false)}
        />
      )}
    </section>
  );
}