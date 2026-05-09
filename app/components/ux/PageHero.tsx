"use client";

import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  subtitle?: string;
  image?: StaticImageData;
  position?: string;
  badge?: string;
}

export const PageHero = ({ title, subtitle, image, position, badge }: Props) => {
  return (
    <section className="relative h-[480px] md:h-[560px] lg:h-[620px] flex items-end overflow-hidden">

      {image && (
        <Image
          src={image}
          alt="Page hero"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: position || "center" }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: "var(--color-yellow)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-14 md:pb-20">
        <div className="max-w-3xl space-y-5">

          {badge && (
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full"
              style={{
                color: "var(--color-yellow)",
                backgroundColor: "rgba(var(--color-yellow-rgb), 0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              {badge}
            </span>
          )}

          <div
            className="w-12 h-[3px] rounded-full"
            style={{ backgroundColor: "var(--color-yellow)" }}
          />

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
              {subtitle}
            </p>
          )}

        </div>
      </div>

    </section>
  );
};

export default PageHero;