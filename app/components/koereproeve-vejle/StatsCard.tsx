"use client";

import React from "react";

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-background border-2 border-border rounded-3xl shadow-sm">
      {icon && <div className="mb-3">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatsCard;
