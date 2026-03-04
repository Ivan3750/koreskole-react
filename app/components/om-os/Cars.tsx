"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import gulbil from "@/app/assets/gulbil.png";
import golf from "@/app/assets/car_2.jpeg";

const CarsAlternating = () => {
  const { t } = useTranslation();

  const cars = [
    {
      key: "golf",
      image: golf.src,
    },
    {
      key: "taigo",
      image: gulbil.src,
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto">
      <div className="px-6">
        <div className="space-y-20">
          {cars.map((car, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 rounded-3xl border-2 border-amber-50 overflow-hidden">
                  <div className="w-full h-[260px] md:h-[320px] lg:h-[380px]">
                    <img
                      src={car.image}
                      alt={t(`cars.${car.key}.name`)}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="font-bold text-2xl">
                    {t(`cars.${car.key}.name`)}
                  </h3>

                  <p className="text-sm font-medium text-yellow-500">
                    {t(`cars.${car.key}.year_label`)} {t(`cars.${car.key}.year`)}
                  </p>

                  <p
                    className="normal-text mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {t(`cars.${car.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarsAlternating;