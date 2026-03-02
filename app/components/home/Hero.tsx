"use client";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import Image from "next/image";
 

import school from "@/app/assets/image.png";
const Hero = () => {
    const { t } = useTranslation();

  return (
    <section className="relative h-[88vh] min-h-[620px] flex items-center overflow-hidden">
      
      <Image
        src={school}
        alt="Driving school"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-6">

          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase">
               {t("home.driving_school")}
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            {t("home.get_license")}
            <br />
            <span className="text-yellow-400">
              {t("home.quick_and_safe")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl">
              {t("home.description")}

          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#holdstart"
               className="py-3 px-10 rounded-lg font-semibold "
              style={{
                backgroundColor: "#facc15",
                borderColor: "#facc15",
                color: "#000",
              }}
            >
              {t("home.sign_up")}
            </a>

            <a href="#priser"
               className="py-3 px-10 rounded-lg font-medium "
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                background: "transparent",
              }}
            >
              {t("home.see_prices")}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;