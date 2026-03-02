"use client";

import React, { useState, useEffect } from "react";
import { Users, Calendar, Clock } from "lucide-react";
import en from "@/app/assets/denmark-flag.png";
import da from "@/app/assets/great-britain-flag.png";
import BookingForm from "../BookingForm";

interface Hold {
  id: number;
  name: string;
  language: string;
  start_datetime: string;
  rescheduled_datetime?: string | null;
  days_of_week?: string | null;
  spots: number;
}

const Holdstart = () => {
  const [holds, setHolds] = useState<Hold[]>([]);
  const [selectedHold, setSelectedHold] = useState<Hold | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHolds = async () => {
      try {
        const res = await fetch("http://localhost:8000/get-courses.php", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setHolds(data);
      } catch (err) {
        console.error("Failed to fetch holds", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHolds();
  }, []);

  const getSpotStyle = (spots: number) => {
    if (spots <= 3) return { backgroundColor: "rgba(220,38,38,0.12)", color: "#DC2626" };
    if (spots <= 6) return { backgroundColor: "rgba(234,179,8,0.15)", color: "#EAB308" };
    return { backgroundColor: "rgba(34,197,94,0.15)", color: "#22C55E" };
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <section className="py-24 max-w-6xl m-auto" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: "var(--color-yellow)" }}>Holdstart</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: "var(--color-text)" }}>Vælg dit hold</h2>
          <p className="normal-text" style={{ color: "var(--color-text-secondary)" }}>Se kommende hold der passer bedst til dig.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holds.map((hold) => (
            <div key={hold.id} className="rounded-2xl border-2 p-6 flex flex-col justify-between" style={{ backgroundColor: "var(--color-bg-elevated)", borderColor: "var(--color-border)" }}>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold leading-tight" style={{ color: "var(--color-text)" }}>
                    {hold.days_of_week || hold.name}
                  </h3>
                  <div className="inline-flex items-center">
                    {hold.language === "EN" ? (
                      <img src={en.src} alt="English flag" className="h-5 rounded-2xl" />
                    ) : (
                      <img src={da.src} alt="Danish flag" className="h-5 rounded-2xl" />
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Start {new Date(hold.start_datetime).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Kl. {new Date(hold.start_datetime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold w-fit" style={getSpotStyle(hold.spots)}>
                  <Users className="w-4 h-4" />
                  {hold.spots} ledige pladser
                </div>
              </div>

              <button
                onClick={() => setSelectedHold(hold)}
                className="mt-6 inline-flex justify-center items-center px-4 py-2 rounded-xl font-semibold transition hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--color-yellow)", color: "var(--color-bg)" }}
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
          holdDate={new Date(selectedHold.start_datetime).toLocaleDateString()}
          holdTime={new Date(selectedHold.start_datetime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          holdDays={selectedHold.days_of_week || selectedHold.name}
          onClose={() => setSelectedHold(null)}
        />
      )}
    </section>
  );
};

export default Holdstart;