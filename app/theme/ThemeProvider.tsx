"use client";

import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  themeMode: "light" | "dark";
  fontFamily: string;
}

const ThemeProvider: React.FC<Props> = ({
  children,
  themeMode,
  fontFamily,
}) => {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--font-family", fontFamily);
    root.style.setProperty("--radius", "20px");

    root.style.setProperty("--padding-sm", "8px");
    root.style.setProperty("--padding-md", "16px");
    root.style.setProperty("--padding-lg", "24px");

    root.style.setProperty("--shadow-1", "0 1px 2px rgba(0,0,0,0.05)");
    root.style.setProperty("--shadow-2", "0 8px 24px rgba(0,0,0,0.12)");

    root.style.setProperty("--color-primary", "#F2B705");
    root.style.setProperty("--color-yellow", "#F2B705");

    if (themeMode === "dark") {
      root.style.setProperty("--color-bg", "#141414");
      root.style.setProperty("--color-bg-layout", "#0f0f0f");
      root.style.setProperty("--color-bg-elevated", "#1F1F1F");

      root.style.setProperty("--color-text", "#FFFFFF");
      root.style.setProperty("--color-text-secondary", "#A6A6A6");

      root.style.setProperty("--color-border", "rgba(255,255,255,0.08)");
    } else {
      root.style.setProperty("--color-bg", "#FFFFFF");
      root.style.setProperty("--color-bg-layout", "#F5F5F5");
      root.style.setProperty("--color-bg-elevated", "#FAFAFA");

      root.style.setProperty("--color-text", "#111111");
      root.style.setProperty("--color-text-secondary", "#666666");

      root.style.setProperty("--color-border", "rgba(0,0,0,0.06)");
    }

    [
      "#FFFCF0",
      "#FFF3CC",
      "#FFE8A3",
      "#FFDC7A",
      "#F2B705",
      "#D9A004",
      "#B58403",
      "#8F6702",
      "#6A4C01",
      "#453200",
    ].forEach((color, i) => {
      root.style.setProperty(`--color-yellow-${i + 1}`, color);
    });

    if (themeMode === "dark") {
      root.style.setProperty("--color-yellow-bg", "#2A2418");
      root.style.setProperty("--color-yellow-border", "#5C4A1D");
    } else {
      root.style.setProperty("--color-yellow-bg", "#FFF6DB");
      root.style.setProperty("--color-yellow-border", "#F5D98C");
    }
  }, [themeMode, fontFamily]);

  return <>{children}</>;
};

export default ThemeProvider;
