"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
const testimonials = [
  {
    name: "Marie Andersen",
    age: 19,
    text: "Jørgen er en fantastisk kørelærer! Han var altid tålmodig og forklarede alt, så det var nemt at forstå. Jeg bestod min køreprøve i første forsøg!",
    rating: 5,
  },
  {
    name: "Thomas Nielsen",
    age: 22,
    text: "Super god køreskole med fleksible tider. Jeg kunne nemt passe køretimerne ind i mit studie, og lærerne er meget hjælpsomme.",
    rating: 5,
  },
  {
    name: "Sofie Pedersen",
    age: 18,
    text: "Jeg var nervøs i starten, men Jørgen skabte en tryg atmosfære. Den rolige og strukturerede undervisning gjorde det meget nemmere at lære.",
    rating: 5,
  },
  {
    name: "Alexander Madsen",
    age: 20,
    text: "Fremragende køreskole! Både teori og praktiske lektioner var godt tilrettelagt. Jeg følte mig godt forberedt til køreprøven.",
    rating: 5,
  },
  {
    name: "Clara Jensen",
    age: 21,
    text: "Kørelærerne er meget tålmodige og giver altid gode tips. Jeg anbefaler denne skole til alle, der vil lære at køre trygt.",
    rating: 5,
  },
  {
    name: "Leonard Bahro",
    age: 23,
    text: "Fantastisk personale og gode biler til undervisning. Jeg bestod min køreprøve uden problemer og følte mig altid sikker under lektionerne.",
    rating: 5,
  },
];


  return (
    <section
      className="py-24 "
      style={{ backgroundColor: "var(--color-bg-layout)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="font-semibold text-sm uppercase tracking-wider"
            style={{ color: "var(--color-yellow)" }}
          >
            Anmeldelser
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Hvad vores elever siger
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Ærlige oplevelser fra elever, der har taget kørekort hos os.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 border-2 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 absolute top-5 right-5 opacity-20"
                style={{ color: "var(--color-yellow)" }}
              />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "var(--color-yellow)" }}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                “{testimonial.text}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
                  style={{
                    backgroundColor: "var(--color-yellow-bg)",
                    color: "var(--color-yellow)",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {testimonial.age} år
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

export default Testimonials;
