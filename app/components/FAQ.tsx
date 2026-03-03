"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = t("faq.items", { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];

  return (
    <section
      className="py-28"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-yellow)" }}
          >
            {t("faq.badge")}
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-text)" }}
          >
            {t("faq.title")}
          </h2>

          <p
            className="mt-6 text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-6xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-3xl border transition-all focus:outline-none cursor-pointer"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: isOpen
                    ? "var(--color-yellow)"
                    : "var(--color-border)",
                }}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 px-4 py-4 text-left"
                >
                  <span
                    className="font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-yellow)",
                    }}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-4 pb-4 leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;