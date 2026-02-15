"use client";

import React from "react";
import Link from "next/link";

const Cars = () => {
  const cars = [
    {
      name: "Skoda Octavia",
      year: "2024",
      image: "/path-to-skoda-image.png", // Замініть на реальний шлях
    },
    {
      name: "VW Golf",
      year: "2023",
      image: "/path-to-golf-image.png", // Замініть на реальний шлях
    }
  ];

  const features = [
    "Dual-kontrol",
    "Adaptiv fartpilot",
    "Sensor system"
  ];

  return (
    <section
      className="py-20 md:py-28 lg:py-40 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ 
              color: "var(--color-yellow)",
              backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)"
            }}
          >
            Kørelektioner
          </span>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Kørelektioner i Vejle
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Alle vores kørelærere har minimum 10 års erfaring og bruger moderne, 
            velholdte køretøjer med de nyeste sikkerhedssystemer. Du får den bedste 
            undervisning i trygge rammer.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {cars.map((car, index) => (
            <div
              key={index}
              className="rounded-3xl border-2 overflow-hidden"
              style={{ 
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg)"
              }}
            >
              {/* Car Image */}
              <div 
                className="aspect-video w-full flex items-center justify-center p-8"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <img
                  src={car.image}
                  alt={`${car.name} ${car.year}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Car Info */}
              <div className="p-6 border-t-2" style={{ borderColor: "var(--color-border)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="font-bold text-xl mb-1"
                      style={{ color: "var(--color-text)" }}
                    >
                      {car.name}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-yellow)" }}
                    >
                      Årgang {car.year}
                    </p>
                  </div>

                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)" }}
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="var(--color-yellow)" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
</div>
    </section>
  );
};

export default Cars;