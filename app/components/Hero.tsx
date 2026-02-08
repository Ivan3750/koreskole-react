"use client";

import Image from "next/image";
import { Button } from "antd";
import { ArrowRight, Users, Award, Star } from "lucide-react";
import heroImage from "@/app/assets/hero-driving.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-32 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-layout)" }}
    >
      {/* Background image – desktop only */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src={heroImage}
          alt="Moderne køreskole i Vejle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-bg-layout) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Mobile / tablet background */}
      <div
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-bg-layout), var(--color-bg-elevated))",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl space-y-10">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
            style={{
              backgroundColor: "var(--color-yellow-bg)",
              borderColor: "var(--color-yellow-border)",
              color: "var(--color-yellow)",
            }}
          >
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Kørelærer i Vejle siden 1984
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1]"
            style={{ color: "var(--color-text)" }}
          >
            Køreskole i Vejle med fokus på sikker og tryg kørsel
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--color-yellow), var(--color-yellow-6))",
                }}
              >
                sikker kørsel
              </span>
              <span
                className="absolute left-0 bottom-2 h-3 w-full -z-0"
                style={{ backgroundColor: "var(--color-yellow-bg)" }}
              />
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            En struktureret og menneskelig tilgang til køreundervisning.
            Fleksible tider, erfarne instruktører og høj beståelsesrate.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="large"
              className="flex items-center gap-2 font-semibold rounded-2xl px-10 py-6 shadow-lg transition-transform hover:scale-[1.04]"
              style={{
                backgroundColor: "var(--color-yellow)",
                borderColor: "var(--color-yellow)",
                color: "var(--color-bg)",
              }}
            >
              Kom i gang
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              size="large"
              type="text"
              className="font-medium"
              style={{ color: "var(--color-text)" }}
            >
              Se priser
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <Stat icon={<Users />} value="3000+" label="Elever" />
            <Stat icon={<Award />} value="95%" label="Bestået" />
            <Stat
              icon={<Star className="fill-current" />}
              value="4.9"
              label="Anmeldelser"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 hidden lg:block"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-layout), transparent)",
        }}
      />
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
    className="flex items-center gap-4 rounded-2xl p-4 backdrop-blur-sm transition-colors"
    style={{
      backgroundColor: "color-mix(in srgb, var(--color-bg) 70%, transparent)",
      border: "1px solid var(--color-border)",
    }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center"
      style={{
        backgroundColor: "var(--color-yellow-bg)",
        color: "var(--color-yellow)",
      }}
    >
      {icon}
    </div>

    <div>
      <div
        className="text-xl font-semibold"
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
