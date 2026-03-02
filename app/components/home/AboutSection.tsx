"use client";

import { useTranslation } from "react-i18next";
import "@/app/i18n";  

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-xl mx-auto lg:mx-0 order-1 lg:order-2 text-center lg:text-left">
            <span
              className="font-semibold text-sm uppercase tracking-widest"
              style={{ color: "var(--color-yellow)" }}
            >
              {t("home.about_title_label")}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("home.about_heading")}
            </h2>

            <p
              className="normal-text mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
                   {t("home.about_paragraph1")}

            </p>

            <p
              className="normal-text mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
                   {t("home.about_paragraph2")}

            </p>

            <p
              className="normal-text"
              style={{ color: "var(--color-text-secondary)" }}
            >
                   {t("home.about_paragraph3")}

            </p>
          </div>

          {/* IMAGES */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-5 md:gap-8 items-start">
              
              {/* Image 1 */}
              <div
                className="rounded-3xl overflow-hidden border-2 shadow-xl 
                h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]
               "
                style={{ borderColor: "var(--color-border)" }}
              >
                <img
                  src="https://askproject.net/roadry/wp-content/uploads/sites/245/2025/08/transportation-view-on-the-car-from-the-air-car-EDQZB5E.jpg"
                  alt="Køreundervisning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 */}
              <div
                className="rounded-3xl overflow-hidden border-2 shadow-xl 
                mt-10 md:mt-16
                h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]
                "
                style={{ borderColor: "var(--color-border)" }}
              >
                <img
                  src="https://askproject.net/roadry/wp-content/uploads/sites/245/2025/08/transportation-view-on-the-car-from-the-air-car-EDQZB5E.jpg"
                  alt="Elev i køreskole"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;