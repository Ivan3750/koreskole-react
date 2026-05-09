"use client";
import school from "../../assets/school_inside_2.jpeg";
import { useTranslation } from "react-i18next";
import "@/app/i18n";


function MeetingSection({ onOpenModal, withLocale }: { onOpenModal: () => void; withLocale: (p: string) => string }) {
  const { t } = useTranslation();
  const meetingFeatures = t("prices.meeting.features", { returnObjects: true }) as { title: string; text: string }[];

  return (
    <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div className="order-2 lg:order-1">
        <div
          className="rounded-3xl overflow-hidden border-2 shadow-xl w-full h-[420px] md:h-[560px] lg:h-[640px]"
          style={{ borderColor: "var(--color-border)" }}
        >
          <img src={school.src} alt={t("prices.meeting.imageAlt")} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="max-w-xl mx-auto lg:mx-0 order-1 lg:order-2 text-center lg:text-left space-y-6">
        <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "var(--color-yellow)" }}>
          {t("prices.meeting.badge")}
        </span>
        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
          style={{ color: "var(--color-text)" }}
        >
          {t("prices.meeting.title")}
        </h2>
        <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
          {t("prices.meeting.text")}
        </p>
        <div className="grid sm:grid-cols-2 gap-4 pt-2 text-left">
          {meetingFeatures.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border-2"
              style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}
            >
              <h4 className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>{item.title}</h4>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-2xl font-semibold inline-block"
            style={{ background: "var(--color-yellow)", color: "#000" }}
          >
            {t("prices.meeting.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
export default MeetingSection;