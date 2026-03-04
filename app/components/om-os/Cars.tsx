"use client";

import React from "react";
import gulbil from "@/app/assets/gulbil.png";
import golf from "@/app/assets/car_2.jpeg";

const cars = [
  {
    name: "Volkswagen Golf GTI",
    year: "2021",
    image: golf.src,
    description:
      "Volkswagen Golf GTI er en komfortabel og sikker undervisningsbil, perfekt til nye elever. Den er let at håndtere, rummelig og udstyret med moderne sikkerhedssystemer samt dual-kontrol, hvilket giver tryghed under hele køreforløbet.",
  },
  {
    name: "Volkswagen Taigo",
    year: "2025",
    image: gulbil.src,
    description:
      "Volkswagen Taigo kombinerer moderne teknologi, sikkerhed og nem manøvrering. Den kompakte størrelse gør den ideel til bykørsel, mens dual-kontrol og avancerede assistentsystemer sikrer en tryg læringsoplevelse.",
  },
];

const CarsAlternating = () => {
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
                {/* Image */}
                <div className="w-full md:w-1/2 rounded-3xl border-2 border-amber-50 overflow-hidden">
                  <div className="w-full h-[260px] md:h-[320px] lg:h-[380px]">
                    <img
                      src={car.image}
                      alt={`${car.name} ${car.year}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="font-bold text-2xl">{car.name}</h3>
                  <p className="text-sm font-medium text-yellow-500">
                    Årgang {car.year}
                  </p>
                  <p
          className="normal-text mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
                    {car.description}
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