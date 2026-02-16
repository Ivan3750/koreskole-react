"use client";

import { useTheme } from "./ThemeContext";
import ThemeProvider from "./ThemeProvider";

export const AppProviders = ({
  children,
  fontFamily,
}: {
  children: React.ReactNode;
  fontFamily: string;
}) => {
  const { themeMode } = useTheme();

  return (
    <ThemeProvider fontFamily={fontFamily} themeMode={themeMode}>
      {children}
    </ThemeProvider>
  );
};