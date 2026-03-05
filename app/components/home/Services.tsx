"use client";

import React from "react";
import { BookOpen, Car, Shield, Users, Clock, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const iconMap = [BookOpen, Car, Shield, Users, Clock, Award];

const Services = () => {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true }) as any[];

  return (
    <section className="py-24 max-w-6xl m-auto" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: "var(--color-yellow)" }}>
            {t("services.label")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: "var(--color-text)" }}>
            {t("services.heading")}
          </h2>
          <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>
            {t("services.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any, index: number) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="rounded-2xl p-6 border "
                style={{ backgroundColor: "var(--color-bg-elevated)", borderColor: "var(--color-border)" }}
              >
                {/* Decorative icon */}
                <div className="w-14 h-14 mb-5 flex items-center justify-center"  >
                  <Icon className="w-12 h-12" style={{ color: "var(--color-yellow)" }} />
                </div>

                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;