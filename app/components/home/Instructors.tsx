"use client";

import React from "react";
import { Award, Heart, Clock } from "lucide-react";

const Instructors = () => {
  return (
    <section
      className="py-24 max-w-6xl m-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Instructor card */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl border-2 flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="text-center p-8">
                <div
                  className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                >
                  <span
                    className="text-5xl font-display font-bold"
                    style={{ color: "var(--color-bg)" }}
                  >
                    A
                  </span>
                </div>

                <h3
                  className="font-display text-2xl font-bold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  Anna Marie Lønbærk 
                </h3>
                <p
                  className="font-semibold"
                  style={{ color: "var(--color-yellow)" }}
                >
                  Indehaver & Kørelærer
                </p>
              </div>
            </div>

            {/* Experience badge */}
            <div
              className="absolute -bottom-4 -right-4 rounded-2xl p-4 border-2 shadow-md"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                >
                  <Award
                    className="w-6 h-6"
                    style={{ color: "var(--color-bg)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    40+ år
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    erfaring
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: "var(--color-yellow)" }}
            >
              Mød Din Kørelærer
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6"
              style={{ color: "var(--color-text)" }}
            >
              En Passioneret Kørelærer Med Hjerte for Sikkerhed
            </h2>

            <p
              className="normal-text mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Anna Marie Lønbærk har været kørelærer i Vejle siden 1984. Med over 40
              års erfaring har hun uddannet tusindvis af elever og hjulpet dem
              med at blive sikre, ansvarsbevidste bilister.
            </p>

            <p
              className="normal-text mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Huns filosofi er enkel: Undervisningen skal være både lærerig og
              hyggelig. En afslappet atmosfære skaber de bedste betingelser for
              læring.
            </p>

            <div className="space-y-4">
              {/* Feature */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                >
                  <Heart
                    className="w-6 h-6"
                    style={{ color: "var(--color-bg)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-[20px]"
                    style={{ color: "var(--color-text)" }}
                  >
                    Personlig Tilgang
                  </p>
                  <p
                    className="normal-text"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Undervisning tilpasset den enkelte elev
                  </p>
                </div>
              </div>

              {/* Feature */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                >
                  <Clock
                    className="w-6 h-6"
                    style={{ color: "var(--color-bg)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-[20px]"
                    style={{ color: "var(--color-text)" }}
                  >
                    Fleksible Tider
                  </p>
                  <p
                    className="normal-text"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Hverdage og weekender efter aftale
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
