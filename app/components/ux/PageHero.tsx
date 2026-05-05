"use client";

import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  subtitle?: string;
  image?: StaticImageData;
  position?: string;
}

export const PageHero = ({ title, subtitle, image, position }: Props) => {
  return (
    <section className="relative h-[420px] md:h-[500px] flex items-center overflow-hidden">
      
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-5">
          <div className="w-16 h-[3px] bg-yellow-400 rounded-full" />
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;