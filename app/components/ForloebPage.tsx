"use client";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/i18n";
import MeetingModal from "./MeetingModal";
import MeetingSection from "./forloeb/MeetingSection";
import PackageSection from "./forloeb/PackageSection";
import RecoverySection from "./forloeb/RecoverySection";







function ForloebPage() {
  const { i18n } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string;
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-40 space-y-32">
        <MeetingSection onOpenModal={() => setModalOpen(true)} withLocale={withLocale} />
        <PackageSection />
        <RecoverySection withLocale={withLocale} />
      </div>
      {modalOpen && <MeetingModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default ForloebPage;