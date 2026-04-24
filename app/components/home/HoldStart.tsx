"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import enFlag from "@/app/assets/great-britain-flag.png";
import daFlag from "@/app/assets/denmark-flag.png";
import BookingForm from "../BookingForm";
import { BASE_URL } from "@/app/lib/api";

interface Hold {
  id: number;
  language: string;
  course_date: string;
  start_time: string;
  end_time: string;
  days_of_week?: string;
  session_type?: string;
}

const Holdstart = () => {
  const [holds, setHolds] = useState<Hold[]>([]);
  const [selectedHold, setSelectedHold] = useState<Hold | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHolds = async () => {
      try {
        const res = await fetch(`${BASE_URL}/get-courses.php`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setHolds(data.courses || data.data || data);
      } catch (error) {
        console.error("Error fetching holds:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHolds();
  }, []);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("da-DK", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatTime = (time?: string) =>
    time ? time.slice(0, 5) : "--:--";

  const getType = (type?: string) => {
    if (type === "formiddag") return "Formiddagshold";
    return "Aftenhold";
  };

  if (loading) {
    return <p className="text-center py-20">Indlæser hold...</p>;
  }

  return (
    <section className="py-24 max-w-6xl m-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {holds.map((hold) => {
          return (
            <div
              key={hold.id}
              className="rounded-2xl border p-6 transition flex flex-col justify-between"
              style={{
                borderColor: "var(--color-border)",
                background: "var(--color-bg-elevated)",
              }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full w-fit"
                    style={{
                      backgroundColor: "var(--color-yellow)",
                      color: "var(--color-black)",
                    }}
                  >
                    {getType(hold.session_type)}
                  </span>

                  {hold.language?.toUpperCase() === "EN" ? (
                    <img src={enFlag.src} className="h-5 rounded-md" />
                  ) : (
                    <img src={daFlag.src} className="h-5 rounded-md" />
                  )}
                </div>

                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Calendar className="w-4 h-4" />
                  {formatDate(hold.course_date)}
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  {formatTime(hold.start_time)} – {formatTime(hold.end_time)}
                </div>

                
              </div>

              <button
                onClick={() => setSelectedHold(hold)}
                className="mt-6 py-2 rounded-xl font-semibold transition bg-yellow-400 hover:bg-yellow-500 text-black"
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
          holdDate={formatDate(selectedHold.course_date)}
          holdTime={`${formatTime(selectedHold.start_time)} – ${formatTime(
            selectedHold.end_time
          )}`}
          holdDays={selectedHold.days_of_week || ""}
          onClose={() => setSelectedHold(null)}
        />
      )}
    </section>
  );
};

export default Holdstart;