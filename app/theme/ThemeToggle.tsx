"use client";

import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: 22,
      }}
    >
      {themeMode === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;