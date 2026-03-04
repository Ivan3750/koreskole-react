"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import img from "@/app/assets/school_1.jpeg";

const AboutIntro = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* TEXT */}
          <div className="max-w-xl mx-auto lg:mx-0 order-1 lg:order-2 text-center lg:text-left">
            <span
              className="font-semibold text-sm uppercase tracking-widest"
              style={{ color: "var(--color-yellow)" }}
            >
              {t("about.label")}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("about.heading")}
            </h2>

            <p
              className="normal-text mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("about.paragraph1")}
            </p>

            <p
              className="normal-text mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("about.paragraph2")}
            </p>

            <p
              className="normal-text"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("about.paragraph3")}
            </p>
          </div>

          {/* IMAGE */}
          <div className="order-2 lg:order-1">
            <img
              src={img.src}
              alt={t("about.label")}
              className="w-full h-full max-h-[500px] object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;