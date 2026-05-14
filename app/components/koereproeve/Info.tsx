"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import car from "@/app/assets/gulbil.png";

const Info = () => {
  const { t } = useTranslation();

  const features = t("info.features", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <section
      className="py-20 md:py-28 lg:py-40 "
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="max-w-xl mx-auto lg:mx-0 order-2 lg:order-1 text-center lg:text-left">

            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)"
              }}
            >
              {t("info.badge")}
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {t("info.title")}
            </h2>

            <p
              className="normal-text mb-6 text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("info.description")}
            </p>

            <div className="space-y-5 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: "var(--color-yellow)" }}
                  >
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="normal-text"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("info.closing")}
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden border-2 shadow-2xl 
                h-[380px] md:h-[480px] lg:h-[560px]
                relative z-10"
                style={{ borderColor: "var(--color-border)" }}
              >
                <img
                  src={car.src}
                  alt={t("info.imageAltMain")}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute -bottom-8 -right-6 md:-right-12 
                rounded-2xl border-2 shadow-2xl overflow-hidden
                w-[160px] h-[200px] md:w-[200px] md:h-[260px]
                z-20"
                style={{
                  borderColor: "var(--color-yellow)",
                  backgroundColor: "var(--color-bg)"
                }}
              >
                <img
                  src="https://askproject.net/roadry/wp-content/uploads/sites/245/2025/08/transportation-view-on-the-car-from-the-air-car-EDQZB5E.jpg"
                  alt={t("info.imageAltSecondary")}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute -top-8 -left-8 w-32 h-32 md:w-48 md:h-48 
                rounded-full opacity-10 -z-10"
                style={{ backgroundColor: "var(--color-yellow)" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Info;