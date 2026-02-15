"use client";

import React from "react";
import Link from "next/link";

const TheoryClassesSection = () => {
  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          
          {/* CONTENT - Left side (3 columns) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-5"
              style={{ 
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)"
              }}
            >
              Teoriundervisning
            </span>

            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              Teoriundervisning i Vejle
            </h2>

            <p
              className="normal-text mb-8 text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Vi afholder teoriundervisning på vores moderne lokale i Vejles centrum. 
              Her får du en grundig gennemgang af alle emner, du skal kende til teoriprøven, 
              i et engagerende og overskueligt format.
            </p>

            {/* Schedule Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              
              {/* Option 1 */}
              <div
                className="rounded-2xl border-2 p-6 
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ 
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)"
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-yellow)" }}
                  >
                    <svg className="w-6 h-6" fill="white" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: "var(--color-text)" }}
                  >
                    Hverdage
                  </h3>
                </div>
                <div className="space-y-2">
                  <p
                    className="font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    Mandag + Onsdag
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    17:00 - 20:00
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Perfekt hvis du arbejder eller går i skole
                  </p>
                </div>
              </div>

              {/* Option 2 */}
              <div
                className="rounded-2xl border-2 p-6 
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ 
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)"
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-yellow)" }}
                  >
                    <svg className="w-6 h-6" fill="white" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: "var(--color-text)" }}
                  >
                    Weekend
                  </h3>
                </div>
                <div className="space-y-2">
                  <p
                    className="font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    Lørdag
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    10:00 - 13:00
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Ideel for travle hverdage
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <Link
              href="/teoriproeve"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
              font-semibold transition-all duration-300 
              hover:shadow-xl hover:-translate-y-0.5"
              style={{ 
                backgroundColor: "var(--color-yellow)",
                color: "white"
              }}
            >
              Læs mere om teoriprøven
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>

          </div>

          {/* IMAGE - Right side (2 columns) */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative">
              
              {/* Main image */}
              <div
                className="rounded-3xl overflow-hidden border-2 shadow-2xl
                h-[400px] md:h-[500px] lg:h-[600px] lg:sticky lg:top-8"
                style={{ borderColor: "var(--color-border)" }}
              >
                <img
                  src="https://askproject.net/roadry/wp-content/uploads/sites/245/2025/08/transportation-view-on-the-car-from-the-air-car-EDQZB5E.jpg"
                  alt="Teoriundervisning lokale i Vejle"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating info badge */}
                <div
                  className="absolute bottom-6 left-6 right-6 
                  rounded-2xl p-5 backdrop-blur-md border"
                  style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderColor: "var(--color-yellow)"
                  }}
                >
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    📍 Vejle Centrum
                  </p>
                  <p
                    className="font-bold text-lg"
                    style={{ color: "var(--color-text)" }}
                  >
                    Moderne undervisningslokale
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 -z-10"
                style={{ backgroundColor: "var(--color-yellow)" }}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheoryClassesSection;