"use client";

import Image from "next/image";
import { Button } from "antd";
import { Users, Award, Star } from "lucide-react";
import heroImage from "@/app/assets/hero-driving.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-layout)" }}
    >
      {/* Background image (desktop only) */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={heroImage}
          alt="Moderne køreskole i Vejle"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />

        {/* Theme-aware overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
                color-mix(in srgb, var(--color-bg-layout) 45%, transparent),
                var(--color-bg-layout)
              )
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-8 mt-24 md:mt-0" >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mx-auto"
          style={{
            backgroundColor: "var(--color-yellow-bg)",
            borderColor: "var(--color-yellow-border)",
            color: "var(--color-yellow)",
          }}
        >
          <Award className="w-4 h-4" />
          <span className="text-sm font-semibold ">
            Kørelærer i Vejle siden 1984
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
          style={{ color: "var(--color-text)" }}
        >
          Køreskole i Vejle <br />
          <span style={{ color: "var(--color-yellow)" }}>
            Sikker og tryg kørsel
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl leading-relaxed mx-auto max-w-2xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Personlig undervisning, fleksible køretimer og høj beståelsesrate.
          Vi forbereder dig trygt til både teori- og køreprøven.
        </p>

        {/* CTA */}
        <div className="flex flex-row justify-center items-center gap-4 pt-6">
          <Button
            size="large"
            className="px-10 h-[52px] font-semibold rounded-xl transition-all"
            style={{
              backgroundColor: "var(--color-yellow)",
              borderColor: "var(--color-yellow)",
              color: "var(--color-bg)",
            }}
          >
            Kom i gang
          </Button>

          <Button
            size="large"
            className="px-10 h-[52px] font-medium rounded-xl transition-all"
            style={{
              backgroundColor: "transparent",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
            }}
          >
            Se priser
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-10">
          <Stat icon={<Users />} value="3000+" label="Elever" />
          <Stat icon={<Award />} value="95%" label="Bestået" />
          <Stat
            icon={<Star className="fill-current" />}
            value="4.9"
            label="Anmeldelser"
          />
        </div>
      </div>
    </section>
  );
};

const Stat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div
    className="flex items-center gap-4 px-5 py-4 rounded-xl"
    style={{
      backgroundColor:
        "color-mix(in srgb, var(--color-bg) 85%, transparent)",
      border: "1px solid var(--color-border)",
    }}
  >
    <div
      className="w-10 h-10 flex items-center justify-center rounded-lg"
      style={{
        backgroundColor: "var(--color-yellow-bg)",
        color: "var(--color-yellow)",
      }}
    >
      {icon}
    </div>

    <div className="text-left">
      <div
        className="text-lg font-semibold leading-none"
        style={{ color: "var(--color-text)" }}
      >
        {value}
      </div>
      <div
        className="text-sm"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}
      </div>
    </div>
  </div>
);
