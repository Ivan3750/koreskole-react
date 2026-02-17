"use client";

import React, { useState } from "react";
import { Users, Calendar, Clock, Globe } from "lucide-react";
import { img } from "framer-motion/client";
import en from "@/app/assets/denmark-flag.png";
import da from "@/app/assets/great-britain-flag.png";
import BookingForm from "../BookingForm";
const Holdstart = () => {
  const [selectedHold, setSelectedHold] = useState<null | (typeof holds)[0]>(
    null,
  );

  const holds = [
    {
      id: 1,
      date: "10/03/2026",
      days: { da: "Mandag & Onsdag", en: "Monday & Wednesday" },
      time: "17:00",
      spots: 5,
      lang: "DA",
    },
    {
      id: 2,
      date: "20/03/2026",
      days: { da: "Tirsdag & Torsdag", en: "Tuesday & Thursday" },
      time: "18:00",
      spots: 10,
      lang: "EN",
    },
    {
      id: 3,
      date: "20/03/2026",
      days: { da: "Tirsdag & Torsdag", en: "Tuesday & Thursday" },
      time: "18:00",
      spots: 10,
      lang: "DA",
    },
    {
      id: 4,
      date: "10/04/2026",
      days: { da: "Lørdag", en: "Saturday" },
      time: "10:00",
      spots: 7,
      lang: "EN",
    },
    {
      id: 5,
      date: "10/04/2026",
      days: { da: "Lørdag", en: "Saturday" },
      time: "10:00",
      spots: 3,
      lang: "DA",
    },
    {
      id: 6,
      date: "10/04/2026",
      days: { da: "Lørdag", en: "Saturday" },
      time: "10:00",
      spots: 8,
      lang: "EN",
    },
  ];

  const getSpotStyle = (spots: number) => {
    if (spots <= 3) {
      return {
        backgroundColor: "rgba(220, 38, 38, 0.12)",
        color: "#DC2626",
      };
    }
    if (spots <= 6) {
      return {
        backgroundColor: "rgba(234, 179, 8, 0.15)",
        color: "#EAB308",
      };
    }
    return {
      backgroundColor: "rgba(34, 197, 94, 0.15)",
      color: "#22C55E",
    };
  };

  return (
    <section
      className="py-24 max-w-6xl m-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="font-semibold text-sm uppercase tracking-wider"
            style={{ color: "var(--color-yellow)" }}
          >
            Holdstart
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Vælg dit hold
          </h2>
          <p
            className="normal-text"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Se kommende hold der passer bedst til dig.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holds.map((hold) => (
            <div
              key={hold.id}
              className="rounded-2xl border-2 p-6 flex flex-col justify-between "
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Top */}
              <div className="space-y-4">
                {/* Days + language */}
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="text-xl font-bold leading-tight"
                    style={{ color: "var(--color-text)" }}
                  >
                    {hold.days.da}
                  </h3>

                  <div className="inline-flex items-center   ">
                    {hold.lang === "EN" ? (
                      <img
                        src={en.src}
                        alt="English flag"
                        className=" h-5 rounded-2xl"
                      />
                    ) : (
                      <img
                        src={da.src}
                        alt="Danish flag"
                        className=" h-5 rounded-2xl"
                      />
                    )}
                  </div>
                </div>

                {/* Date & time */}
                <div
                  className="flex flex-col gap-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Start {hold.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Kl. {hold.time}</span>
                  </div>
                </div>

                {/* Spots */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold w-fit"
                  style={getSpotStyle(hold.spots)}
                >
                  <Users className="w-4 h-4" />
                  {hold.spots} ledige pladser
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setSelectedHold(hold)}
                className="mt-6 inline-flex justify-center items-center px-4 py-2 rounded-xl font-semibold transition hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--color-yellow)",
                  color: "var(--color-bg)",
                }}
              >
                Vælg hold
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedHold && (
        <BookingForm
          holdId={selectedHold.id}
          holdDate={selectedHold.date}
          holdTime={selectedHold.time}
          holdDays={selectedHold.days.da}
          onClose={() => setSelectedHold(null)}
        />
      )}
    </section>
  );
};

export default Holdstart;
