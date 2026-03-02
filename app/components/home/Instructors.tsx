"use client";

import React from "react";
import { Award, Heart, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const Instructors = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 max-w-6xl m-auto" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Instructor card */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl border-2 flex items-center justify-center"
              style={{ backgroundColor: "var(--color-bg-elevated)", borderColor: "var(--color-border)" }}
            >
              <div className="text-center p-8">
                <div
                  className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                >
                  <span className="text-5xl font-display font-bold" style={{ color: "var(--color-bg)" }}>
                    A
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "var(--color-text)" }}>
                  Anna Marie Lønbærk
                </h3>
               
              </div>
            </div>

            {/* Experience badge */}
            <div
              className="absolute -bottom-4 -right-4 rounded-2xl p-4 border-2 shadow-md"
              style={{ backgroundColor: "var(--color-bg-elevated)", borderColor: "var(--color-border)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--color-yellow)" }}>
                  <Award className="w-6 h-6" style={{ color: "var(--color-bg)" }} />
                </div>
                <div>
                  <p className="font-bold" style={{ color: "var(--color-text)" }}>
                    {t("instructors.experience_years")}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {t("instructors.experience_label")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: "var(--color-yellow)" }}>
              {t("instructors.label")}
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6" style={{ color: "var(--color-text)" }}>
              {t("instructors.heading")}
            </h2>

            <p className="normal-text mb-6" style={{ color: "var(--color-text-secondary)" }}>
              {t("instructors.paragraph1")}
            </p>

            <p className="normal-text mb-8" style={{ color: "var(--color-text-secondary)" }}>
              {t("instructors.paragraph2")}
            </p>

            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--color-yellow)" }}>
                  <Heart className="w-6 h-6" style={{ color: "var(--color-bg)" }} />
                </div>
                <div>
                  <p className="font-semibold text-[20px]" style={{ color: "var(--color-text)" }}>
                    {t("instructors.feature1_title")}
                  </p>
                  <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
                    {t("instructors.feature1_desc")}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--color-yellow)" }}>
                  <Clock className="w-6 h-6" style={{ color: "var(--color-bg)" }} />
                </div>
                <div>
                  <p className="font-semibold text-[20px]" style={{ color: "var(--color-text)" }}>
                    {t("instructors.feature2_title")}
                  </p>
                  <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
                    {t("instructors.feature2_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Instructors;