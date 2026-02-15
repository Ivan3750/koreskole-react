"use client";

import React from "react";
import Link from "next/link";

const PassStrategySection = () => {
  const strategies = [
    {
      number: "01",
      title: "Individuel vurdering",
      description: "Vi tilpasser lektionerne efter din læringsstil og behov, så du udvikler dig i dit eget tempo.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Mock-prøve",
      description: "Vi kører den præcise prøverute under realistiske forhold, så du ved præcis hvad der venter.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Censor-træning",
      description: "Vi lærer dig præcis hvad censoren kigger efter, og hvordan du scorer point under prøven.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
      )
    },
    {
      number: "04",
      title: "Stress-håndtering",
      description: "Mental forberedelse og teknikker til at bevare roen, så nervøsiteten ikke overtager på dagen.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section
      className="py-20 md:py-28 lg:py-40 relative"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Success Banner */}
        <div
          className="rounded-3xl border-2 p-8 md:p-12 mb-16 relative overflow-hidden"
          style={{ 
            borderColor: "var(--color-yellow)",
            backgroundColor: "rgba(var(--color-yellow-rgb), 0.05)"
          }}
        >
          {/* Decorative elements */}
          <div 
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
            style={{ backgroundColor: "var(--color-yellow)" }}
          />
          <div 
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full opacity-10"
            style={{ backgroundColor: "var(--color-yellow)" }}
          />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "var(--color-yellow)" }}
              >
                <svg className="w-11 h-11" fill="white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>

            <div
              className="inline-block px-5 py-2 rounded-full mb-4 font-semibold text-sm uppercase tracking-widest"
              style={{ 
                backgroundColor: "var(--color-yellow)",
                color: "white"
              }}
            >
              Dokumenteret succes
            </div>

            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              <span style={{ color: "var(--color-yellow)" }}>92%</span> består første gang
            </h2>

            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Vi har udviklet en dokumenteret strategi, der giver dig de bedste 
              chancer for at bestå køreprøven på første forsøg.
            </p>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3
              className="font-display text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Sådan sikrer vi din succes
            </h3>
            <p
              className="text-base"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Fire konkrete trin der gør forskellen mellem at bestå og ikke bestå
            </p>
          </div>

          {/* Strategies Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="relative"
              >
                <div
                  className="rounded-2xl border-2 p-6 h-full"
                  style={{ 
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg)"
                  }}
                >
                  {/* Number badge */}
                  <div 
                    className="absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg"
                    style={{ 
                      backgroundColor: "var(--color-yellow)",
                      color: "white"
                    }}
                  >
                    {strategy.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
                      color: "var(--color-yellow)"
                    }}
                  >
                    {strategy.icon}
                  </div>

                  <h4
                    className="font-bold text-lg mb-3 leading-tight"
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

                {/* Connector line - desktop only */}
                {index < strategies.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 -translate-y-1/2"
                    style={{ backgroundColor: "var(--color-yellow)", opacity: 0.3 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div
          className="rounded-3xl border-2 p-8 md:p-10 text-center"
          style={{ 
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg)"
          }}
        >
          <h3
            className="font-display font-bold text-2xl md:text-3xl mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Klar til at bestå første gang?
          </h3>
          
          <p
            className="text-base md:text-lg mb-6 max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Læs mere om, hvordan vi forbereder dig til køreprøven, og hvad du kan forvente på dagen.
          </p>

          <Link
            href="/koereproeve"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
            font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: "var(--color-yellow)",
              color: "white"
            }}
          >
            Læs om køreprøven
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PassStrategySection;