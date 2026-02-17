"use client";

import React from "react";

interface StrategyCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ number, title, description, icon }) => {
  return (
    <div className="relative rounded-2xl border-2 border-border p-6 bg-background hover:shadow-lg transition-all duration-300">
      
      {/* Number Badge */}
      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-md"
           style={{ backgroundColor: "var(--color-yellow)" }}>
        {number}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
           style={{ backgroundColor: "rgba(var(--color-yellow-rgb),0.1)", color: "var(--color-yellow)" }}>
        {icon}
      </div>

      <h4 className="font-bold text-lg mb-2" style={{ color: "var(--color-text)" }}>
        {title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default StrategyCard;
