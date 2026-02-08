  "use client";

  import React, { useEffect } from "react";
  import { theme } from "antd";
  import { useTheme } from "./ThemeContext";

  interface ThemeProviderProps {
    children: React.ReactNode;
  }

  const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { themeMode } = useTheme();
    const { token } = theme.useToken();

    useEffect(() => {
      const root = document.documentElement;

      root.style.setProperty("--color-primary", "#F2B705");
      root.style.setProperty("--color-bg", token.colorBgContainer);
      root.style.setProperty("--color-bg-layout", token.colorBgLayout);
      root.style.setProperty("--color-bg-elevated", token.colorBgElevated);
      root.style.setProperty("--color-text", token.colorText);
      root.style.setProperty("--color-text-secondary", token.colorTextSecondary);
      root.style.setProperty(
        "--color-border",
        themeMode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
      );

      root.style.setProperty("--shadow-1", token.boxShadow);
      root.style.setProperty("--shadow-2", token.boxShadowSecondary);

      root.style.setProperty("--padding-sm", `${token.paddingSM}px`);
      root.style.setProperty("--padding-md", `${token.paddingMD}px`);
      root.style.setProperty("--padding-lg", `${token.paddingLG}px`);

      if (themeMode === "dark") {
        root.style.setProperty("--color-yellow", "#F2B705");
        root.style.setProperty("--color-yellow-bg", "#2A2418");
        root.style.setProperty("--color-yellow-border", "#5C4A1D");
      } else {
        root.style.setProperty("--color-yellow", "#F2B705");
        root.style.setProperty("--color-yellow-bg", "#FFF6DB");
        root.style.setProperty("--color-yellow-border", "#F5D98C");
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
    }, [themeMode, token]);

    return <>{children}</>;
  };

  export default ThemeProvider;
