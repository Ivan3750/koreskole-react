"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const Timeline = () => {
  const { t } = useTranslation();

  const steps = t("timeline.steps", { returnObjects: true }) as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section
      className="py-20"
      style={{ background: "var(--color-bg-layout)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {t("timeline.title")}
          </h2>

          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("timeline.subtitle")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "var(--color-border)" }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-16">

                {/* Number */}
                <div
                  className="absolute left-0 top-1 w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                  style={{
                    background: "var(--color-yellow)",
                    color: "white",
                  }}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="p-6 rounded-2xl border"
                  style={{
                    background: "var(--color-bg)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;