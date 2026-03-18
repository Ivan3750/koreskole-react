"use client";

import React from "react";
import { Award, Heart, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

/* import AnnaImg from "../../assets/Anna-Marie_Lønbæk.jpeg";
 */import AnnaImg from "../../assets/gulbil_3.jpeg";
import MichaelImg from "../../assets/Michael_Lønbæk.jpeg";

type InstructorProps = {
  image: string;
  translationKey: string;
  name: string;
  flip?: boolean;
};

const InstructorCard = ({ image, translationKey, name, flip }: InstructorProps) => {
  const { t } = useTranslation();

  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${flip ? "lg:flex-row-reverse" : ""}`}>
      {/* Image */}
  <div className={`${flip ? "lg:order-2" : "lg:order-1"} relative`}>
        <div
          className="aspect-[4/5] rounded-3xl border-2 flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            borderColor: "var(--color-border)",
          }}
        >
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-3xl"
          />
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
                {t(`${translationKey}.experience_years`)}
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t(`${translationKey}.experience_label`)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
  <div className={`${flip ? "lg:order-1" : "lg:order-2"}`}>
        <span
          className="font-semibold text-sm uppercase tracking-wider"
          style={{ color: "var(--color-yellow)" }}
        >
          {t(`${translationKey}.label`)}
        </span>

        <h2
          className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6"
          style={{ color: "var(--color-text)" }}
        >
          {t(`${translationKey}.heading`)}
        </h2>

        <p
          className="normal-text mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {t(`${translationKey}.paragraph1`)}
        </p>

        <p
          className="normal-text mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {t(`${translationKey}.paragraph2`)}
        </p>

        <div className="space-y-4">
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
                {t(`${translationKey}.feature1_title`)}
              </p>
              <p
                className="normal-text"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t(`${translationKey}.feature1_desc`)}
              </p>
            </div>
          </div>

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
                {t(`${translationKey}.feature2_title`)}
              </p>
              <p
                className="normal-text"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t(`${translationKey}.feature2_desc`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Instructors = () => {
  return (
    <section
      className="py-24 max-w-6xl m-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto px-6 space-y-32">
        <InstructorCard
          image={AnnaImg.src}
          translationKey="instructors.anna"
          name="Anna Marie Lønbæk"
        />

        <InstructorCard
        flip={true}
          image={MichaelImg.src}
          translationKey="instructors.michael"
          name="Michael Lønbæk"
        />
      </div>
    </section>
  );
};

export default Instructors;