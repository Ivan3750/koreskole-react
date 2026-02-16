"use client";

import Image from "next/image";
import heroImage from "@/app/assets/hero-driving.jpg";

const Hero = () => {
  return (
    <section className="relative h-[88vh] min-h-[620px] flex items-center overflow-hidden">
      
      <Image
        src={heroImage}
        alt="Driving school"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-6">

          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase">
            Køreskole i Vejle
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Tag dit kørekort
            <br />
            <span className="text-yellow-400">
              hurtigt og sikkert
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl">
            Moderne køreskole med personlig undervisning,
            fleksible tider og høj beståelsesrate.
            Vi guider dig hele vejen til bestået prøve.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
               className="h-[54px] px-10 rounded-lg font-semibold"
              style={{
                backgroundColor: "#facc15",
                borderColor: "#facc15",
                color: "#000",
              }}
            >
              Tilmeld hold
            </button>

            <button
               className="h-[54px] px-10 rounded-lg font-medium"
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                background: "transparent",
              }}
            >
              Se priser
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;