"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import enFlag from "@/app/assets/great-britain-flag.png";
import daFlag from "@/app/assets/denmark-flag.png";
import BookingForm from "../BookingForm";

interface Hold {
  id: number;
  language: string;
  date: string;
  start_time: string;
  end_time: string;
  type?: string;
  spots: number;
}

const Holdstart = () => {
  const [holds, setHolds] = useState<Hold[]>([]);
  const [selectedHold, setSelectedHold] = useState<Hold | null>(null);

  const temporaryHolds: Hold[] = [
    {
      id: 1,
      language: "DA",
      date: "2026-03-31",
      start_time: "17:00:00",
      end_time: "18:30:00",
      spots: 8,
    },
    {
      id: 2,
      language: "DA",
      date: "2026-04-15",
      start_time: "17:00:00",
      end_time: "18:30:00",
      spots: 0,
    },
    {
      id: 3,
      language: "EN",
      date: "2026-04-02",
      start_time: "15:30:00",
      end_time: "17:00:00",
      spots: 8,
    },
    {
      id: 4,
      language: "EN",
      date: "2026-04-16",
      start_time: "15:30:00",
      end_time: "17:00:00",
      spots: 8,
    },
    {
      id: 5,
      language: "DA",
      date: "2026-04-20",
      start_time: "09:00:00",
      end_time: "10:30:00",
      type: "formiddag",
      spots: 8,
    },
  ];

  useEffect(() => {
    setHolds(temporaryHolds);
  }, []);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("da-DK", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatTime = (time: string) => time.slice(0, 5);

  const getType = (type?: string) => {
    if (type === "formiddag") return "Formiddagshold";
    return "Aftenhold";
  };

  const isAvailable = (spots: number) => spots > 0;

  return (
    <section className="py-24 max-w-6xl m-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {holds.map((hold) => {

          const available = isAvailable(hold.spots);

          return (
            <div
              key={hold.id}
              className=" rounded-2xl border p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
      style={{ backgroundColor: "var(--color-bg)" }}
            > 
              <div className="space-y-4">

                {/* top row */}
                <div className="flex justify-between items-start">

                  <span className="text-xs font-semibold px-3 py-1 rounded-full w-fit" style={{ backgroundColor: "var(--color-yellow)", color: "var(--color-black)" }}>
                    {getType(hold.type)}
                  </span>

                  {hold.language === "EN" ? (
                    <img src={enFlag.src} className="h-5 rounded-md" />
                  ) : (
                    <img src={daFlag.src} className="h-5 rounded-md" />
                  )}
                </div>

                {/* date */}
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Calendar className="w-4 h-4" />
                  {formatDate(hold.date)}
                </div>

                {/* time */}
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  {formatTime(hold.start_time)} – {formatTime(hold.end_time)}
                </div>

                {/* availability */}
                <div
                  className={`text-sm font-semibold px-3 py-1 rounded-full w-fit ${
                    available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {available ? "Ledige pladser" : "Fuldt booket"}
                </div>
              </div>

              <button
                disabled={!available}
                onClick={() => setSelectedHold(hold)}
                className={`mt-6 py-2 rounded-xl font-semibold transition ${
                  available
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Vælg hold
              </button>
            </div>
          );
        })}
      </div>

      {selectedHold && (
        <BookingForm
          holdId={selectedHold.id}
          holdDate={formatDate(selectedHold.date)}
          holdTime={`${formatTime(selectedHold.start_time)} – ${formatTime(selectedHold.end_time)}`}
          holdDays={getType(selectedHold.type)}
          onClose={() => setSelectedHold(null)}
        />
      )}
    </section>
  );
};

export default Holdstart;