"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, Users } from "lucide-react";

const holds = [
  { id: 1, date: "10/03/2026", days: "Mandag & Onsdag", time: "17:00", spots: 5 },
  { id: 2, date: "20/03/2026", days: "Tirsdag & Torsdag", time: "18:00", spots: 10 },
  { id: 3, date: "10/04/2026", days: "Lørdag", time: "10:00", spots: 3 },
];

export default function HoldstartPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)" }}>

  

      {/* HOLD LIST */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-10" style={{ color: "var(--color-text)" }}>
          Kommende hold
        </h2>

        <div className="space-y-4">
          {holds.map((hold) => (
            <div
              key={hold.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6 border rounded-2xl p-6"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-elevated)",
              }}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                  {hold.days}
                </h3>

                <div className="flex gap-6 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <span className="flex gap-2 items-center">
                    <Calendar size={16} /> {hold.date}
                  </span>
                  <span className="flex gap-2 items-center">
                    <Clock size={16} /> {hold.time}
                  </span>
                  <span className="flex gap-2 items-center">
                    <Users size={16} /> {hold.spots} pladser
                  </span>
                </div>
              </div>

              <a
                href={`#booking?hold=${hold.id}`}
                className="px-6 py-3 rounded-xl font-semibold"
                style={{ backgroundColor: "var(--color-yellow)", color: "white" }}
              >
                Tilmeld dig
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* INFO BLOCK */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="relative h-[420px] rounded-3xl overflow-hidden">
          <Image src="/images/student-modern.jpg" alt="Student" fill className="object-cover" />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
            Sådan fungerer holdene
          </h2>

          <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
            Undervisningen foregår i små hold, så du får maksimal opmærksomhed.
            Teori og kørsel følger hinanden, hvilket sikrer hurtigere læring.
          </p>

          <ul className="space-y-3 text-lg">
            <li>• 1 teori aften om ugen</li>
            <li>• Fleksibel booking af køretimer</li>
            <li>• Personlig kørelærer</li>
            <li>• Online teoriplatform</li>
          </ul>
        </div>
      </section>

      

    </div>
  );
}