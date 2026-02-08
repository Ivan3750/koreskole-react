"use client";

import React from "react";
import { BookOpen, Car, Shield, Users, Clock, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Teoriundervisning",
      description: "Grundig teoretisk undervisning med moderne materialer og engagerende formidling.",
    },
    {
      icon: Car,
      title: "Køreundervisning",
      description: "Praktisk køreundervisning i moderne biler med erfaren instruktør.",
    },
    {
      icon: Shield,
      title: "Glatførekursus",
      description: "Obligatorisk kursus på køreteknisk anlæg for sikker kørsel i alle vejrforhold.",
    },
    {
      icon: Users,
      title: "Førstehjælpskursus",
      description: "Livsvigtig førstehjælp - lær at handle rigtigt i nødsituationer.",
    },
    {
      icon: Clock,
      title: "Fleksible Tider",
      description: "Vi tilpasser undervisningen efter din hverdag med fleksible mødetider.",
    },
    {
      icon: Award,
      title: "Høj Beståelsesrate",
      description: "Kvalitetsundervisning der giver dig de bedste forudsætninger for at bestå.",
    },
  ];

  return (
    <section className="py-24 max-w-6xl m-auto" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: "var(--color-yellow)" }}>
            Vores Ydelser
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: "var(--color-text)" }}>
            Alt hvad du behøver til dit kørekort
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Vi tilbyder en komplet køreuddannelse med fokus på sikkerhed, kvalitet og personlig vejledning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6  border-2 hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: "var(--color-bg-elevated)", borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform"
                  style={{
                    background: "var(--color-yellow)",
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: "var(--color-bg)" }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
