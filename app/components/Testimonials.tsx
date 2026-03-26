"use client";

import React, { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import "@/app/i18n";

type Testimonial = {
  name: string;
  age: number;
  text: string;
  rating: number;
};

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();

  useEffect(() => {
    if (params?.lang) {
      i18n.changeLanguage(params.lang as string);
    }
  }, [params?.lang, i18n]);

  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Testimonial[];

  return (
    <section
      className="py-24"
      style={{ backgroundColor: "var(--color-bg-layout)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="font-semibold text-sm uppercase tracking-wider"
            style={{ color: "var(--color-yellow)" }}
          >
            {t("testimonials.label")}
          </span>

          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {t("testimonials.title")}
          </h2>

          <p className="normal-text">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 border-2 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              <Quote
                className="w-8 h-8 absolute top-5 right-5 opacity-20"
                style={{ color: "var(--color-yellow)" }}
              />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "var(--color-yellow)" }}
                  />
                ))}
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                “{testimonial.text}”
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
                  style={{
                    backgroundColor: "var(--color-yellow-bg)",
                    color: "var(--color-yellow)",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {testimonial.name}
                  </div>

                  <div
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {testimonial.age} {t("testimonials.years")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;