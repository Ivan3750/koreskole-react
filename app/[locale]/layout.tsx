"use client";
import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "../globals.css";
import { ThemeContextProvider } from "../theme/ThemeContext";
import { AppProviders } from "../theme/AppProviders";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import '../i18n';

import { useEffect } from "react";
import { useParams } from "next/navigation";
import i18n from "@/app/i18n";
import LocaleGuard from "../components/LocaleGuard";
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert",
});
 


 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const params = useParams();

  useEffect(() => {
    if (params?.locale) {
      i18n.changeLanguage(params.locale as string);
    }
  }, [params]);

  return (
<html lang="da" className={albertSans.variable}>
  <body className={albertSans.className}>
    <LocaleGuard></LocaleGuard>
        <ThemeContextProvider>
          <AppProviders fontFamily="var(--font-albert)">
            <Header />
            <main>{children}</main>
            <Footer />
          </AppProviders>
        </ThemeContextProvider>
   
      </body>
    </html>
  );
}
