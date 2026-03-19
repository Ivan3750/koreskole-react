"use client";

import React from "react";
import { Award, Heart, Clock, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

import AnnaImg from "../../assets/gulbil_3.jpeg";
import MichaelImg from "../../assets/Michael_Lønbæk.jpeg";

const iconMap = {
  heart: Heart,
  clock: Clock,
  shield: Shield,
};

type Feature = {
  title: string;
  desc: string;
  icon: keyof typeof iconMap;
};

type InstructorProps = {
  image: string;
  translationKey: string;
  name: string;
  flip?: boolean;
};

const InstructorCard = ({ image, translationKey, name, flip }: InstructorProps) => {
  const { t } = useTranslation();

const paragraphs = t(`${translationKey}.paragraphs`, {
  returnObjects: true,
}) as string[];

const features = t(`${translationKey}.features`, {
  returnObjects: true,
}) as Feature[];

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Image */}
      <div className={`${flip ? "lg:order-2" : "lg:order-1"} relative`}>
        <div className="aspect-[4/5] rounded-3xl border-2 overflow-hidden"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            borderColor: "var(--color-border)",
          }}
        >
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>

        {/* Badge */}
        <div className="absolute -bottom-4 -right-4 rounded-2xl p-4 border-2 shadow-md"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "var(--color-yellow)" }}
            >
              <Award className="w-6 h-6" style={{ color: "var(--color-bg)" }} />
            </div>

            <div>
              <p className="font-bold" style={{ color: "var(--color-text)" }}>
                {t(`${translationKey}.experience_years`)}
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                {t(`${translationKey}.experience_label`)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${flip ? "lg:order-1" : "lg:order-2"}`}>
        
        <span className="font-semibold text-sm uppercase tracking-wider"
          style={{ color: "var(--color-yellow)" }}
        >
          {t(`${translationKey}.label`)}
        </span>

        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6"
          style={{ color: "var(--color-text)" }}
        >
          {t(`${translationKey}.heading`)}
        </h2>

        {/* Paragraphs */}
        <div className="space-y-4 mb-8">
          {paragraphs.map((p, i) => (
            <p key={i} className="normal-text"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-4">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon];

            return (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-yellow)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--color-bg)" }} />
                </div>

                <div>
                  <p className="font-semibold text-[20px]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {f.title}
                  </p>
                  <p className="normal-text"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Instructors = () => {
  return (
    <section className="py-24 max-w-6xl m-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto px-6 space-y-32">

        <InstructorCard
          image={AnnaImg.src}
          translationKey="instructors.anna"
          name="Anna Marie Lønbæk"
        />

        <InstructorCard
          flip
          image={MichaelImg.src}
          translationKey="instructors.michael"
          name="Michael Lønbæk"
        />

      </div>
    </section>
  );
};

export default Instructors;