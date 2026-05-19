"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import enFlag from "@/app/assets/great-britain-flag.png";
import daFlag from "@/app/assets/denmark-flag.png";
import BookingForm from "../BookingForm";
import { BASE_URL } from "@/app/lib/api";
import "@/app/i18n";

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
  const { t } = useTranslation();
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

  const formatTime = (time?: string) => (time ? time.slice(0, 5) : "--:--");

  const getType = (type?: string) => {
    if (type === "formiddag") return "Formiddagshold";
    return "Aftenhold";
  };

  if (loading) {
    return <p className="text-center py-20">{t("holdstart.loading")}</p>;
  }

  return (
    <section className="py-24 max-w-6xl m-auto px-6">
      {/* heading */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500 mb-2">
          {t("holdstart.title_label")}
        </p>
        <h2 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
          {t("holdstart.heading")}
        </h2>
        <p className="mt-2 text-base" style={{ color: "var(--color-text-secondary)" }}>
          {t("holdstart.description")}
        </p>
      </div>

      {holds.length === 0 ? (
        <p className="text-center py-10" style={{ color: "var(--color-text-secondary)" }}>
          {t("holdstart.loading")}
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holds.map((hold) => (
            <div
              key={hold.id}
              className="rounded-2xl border p-6 flex flex-col justify-between transition"
              style={{
                borderColor: "var(--color-border)",
                background: "var(--color-bg-elevated)",
              }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-yellow)",
                      color: "var(--color-black)",
                    }}
                  >
                    {getType(hold.session_type)}
                  </span>

                  {hold.language?.toUpperCase() === "EN" ? (
                    <img src={enFlag.src} className="h-5 rounded-md" alt="EN" />
                  ) : (
                    <img src={daFlag.src} className="h-5 rounded-md" alt="DA" />
                  )}
                </div>

                {/* date */}
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>
                    <span style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem" }}>
                   
                    </span>
                    {formatDate(hold.course_date)}
                  </span>
                </div>

                {/* time */}
                <div className="flex items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>
                    {t("holdstart.time_label")}{" "}
                    {formatTime(hold.start_time)} – {formatTime(hold.end_time)}
                  </span>
                </div>
 
              </div>

              <button
                onClick={() => setSelectedHold(hold)}
                className="mt-6 py-2 rounded-xl font-semibold transition bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                {t("holdstart.select_button")}
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedHold && (
        <BookingForm
          variant="course"
          holdId={selectedHold.id}
          holdDate={formatDate(selectedHold.course_date)}
          holdTime={`${formatTime(selectedHold.start_time)} – ${formatTime(selectedHold.end_time)}`}
          holdDays={selectedHold.days_of_week || ""}
          onClose={() => setSelectedHold(null)}
        />
      )}
    </section>
  );
};

export default Holdstart;