"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const icons = [
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
  </svg>,
  <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>,
];

const PassStrategySection = () => {
  const { t } = useTranslation();

  const strategies = t("strategy.steps", { returnObjects: true }) as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="pt-20 md:pt-28 lg:pt-40" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ color: "var(--color-yellow)", backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)" }}
          >
            {t("strategy.eyebrow", "Strategi")}
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {t("strategy.title")}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            {t("strategy.subtitle")}
          </p>
        </div>


        <div className="flex flex-col gap-4">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="group flex items-center gap-6 rounded-2xl px-6 py-5 transition-colors duration-300"
              style={{
                backgroundColor: "var(--color-bg-layout)",
                border: "1px solid transparent",
              }}
            
            >
              <span
                className="flex-shrink-0 font-bold text-sm tabular-nums"
                style={{ color: "var(--color-yellow)", minWidth: "2rem" }}
              >
                {strategy.number}
              </span>

              <div className="flex-shrink-0 w-px h-10" style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.2)" }} />

     
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
                  color: "var(--color-yellow)",
                }}
              >
                {icons[index]}
              </div>

              <div className="flex-1 min-w-0">
                <h4
                  className="font-bold text-base mb-0.5 leading-tight"
                  style={{ color: "var(--color-text)" }}
                >
                  {strategy.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {strategy.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PassStrategySection;