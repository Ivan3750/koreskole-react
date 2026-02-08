"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeMode(savedTheme);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeMode("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.documentElement.dataset.theme = themeMode;
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
