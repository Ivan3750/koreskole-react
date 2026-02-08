"use client";

import { ConfigProvider, theme as antTheme, App as AntApp } from "antd";
import { useTheme } from "./ThemeContext";
import ThemeProvider from "./ThemeProvider";

const { defaultAlgorithm, darkAlgorithm } = antTheme;

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useTheme();

  return (
    <AntApp>
      <ConfigProvider
        theme={{
          algorithm: themeMode === "dark" ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: "#F2B705",
            borderRadius: 20,
          },
          components: {
            Button: {
              borderRadius: 20,
            },
          },
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </ConfigProvider>
    </AntApp>
  );
};
