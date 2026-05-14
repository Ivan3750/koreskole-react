"use client";
import school from "../../assets/school_inside_2.jpeg";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { Clock, MapPin, Package, CheckCircle } from "lucide-react";

function MeetingSection({
  onOpenModal,
  withLocale,
}: {
  onOpenModal: () => void;
  withLocale: (p: string) => string;
}) {
  const { t } = useTranslation();

  const meetingFeatures = t("prices.meeting.features", {
    returnObjects: true,
  }) as { title: string; text: string }[];

  const infoItems = [
    { icon: Clock, label: t("prices.meeting.info.duration") },
    { icon: MapPin, label: t("prices.meeting.info.location") },
    { icon: Package, label: t("prices.meeting.info.price") },
  ];

  return (
    <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      {/* Image column */}
      <div className="order-2 lg:order-1">
        <div className="relative">
          <div
            className="rounded-3xl overflow-hidden border-2 shadow-2xl w-full h-[420px] md:h-[560px] lg:h-[640px]"
            style={{ borderColor: "var(--color-border)" }}
          >
            <img
              src={school.src}
              alt={t("prices.meeting.imageAlt")}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Student quote badge */}
          <div
            className="absolute -bottom-6 -right-6 md:-right-10 rounded-2xl border-2 px-5 py-4 z-10 max-w-[220px]"
            style={{
              borderColor: "var(--color-yellow)",
              backgroundColor: "var(--color-bg)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-yellow)" }}
            >
              {t("prices.meeting.studentQuote.label")}
            </p>
            <p
              className="text-sm leading-relaxed italic"
              style={{ color: "var(--color-text-secondary)" }}
            >
              "{t("prices.meeting.studentQuote.text")}"
            </p>
          </div>

          {/* Decorative circle */}
          <div
            className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-10 -z-10"
            style={{ backgroundColor: "var(--color-yellow)" }}
          />
        </div>
      </div>

      {/* Content column */}
      <div className="max-w-xl mx-auto lg:mx-0 order-1 lg:order-2 text-center lg:text-left">
        {/* Badge */}
        <span
          className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
          style={{
            color: "var(--color-yellow)",
            backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
          }}
        >
          {t("prices.meeting.badge")}
        </span>

        {/* Title */}
        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
          style={{ color: "var(--color-text)" }}
        >
          {t("prices.meeting.title")}
        </h2>

        {/* Description */}
        <p
          className="normal-text text-lg mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {t("prices.meeting.text")}
        </p>

        {/* Info pills */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
          {infoItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-medium"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg)",
              }}
            >
              <Icon
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--color-yellow)" }}
              />
              <span style={{ color: "var(--color-text)" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
          {meetingFeatures.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border-2"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg)",
              }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: "var(--color-yellow)" }}
              >
                <CheckCircle className="w-4 h-4" style={{ color: "#fff" }} />
              </div>
              <h4
                className="font-semibold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {item.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: "var(--color-yellow)",
              color: "black",
              boxShadow: "0 4px 24px rgba(var(--color-yellow-rgb), 0.3)",
            }}
          >
            {t("prices.meeting.cta")}
          </button>
       
        </div>
      </div>
    </section>
  );
}

export default MeetingSection;