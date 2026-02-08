 

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider, useTheme } from "./theme/ThemeContext";
import { Header } from "./components/Header";
import { AppProviders } from "./theme/AppProviders";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lønbæks Køreskole i Vejle – Kørekort med erfaren kørelærer",
  description:
    "Lønbæks Køreskole i Vejle tilbyder professionel teori- og køreundervisning med fokus på sikkerhed, tryghed og personlig vejledning.",

  keywords: [
    "Lønbæks Køreskole",
    "køreskole Vejle",
    "kørekort Vejle",
    "kørelærer Vejle",
    "teoriundervisning Vejle",
    "køreundervisning Vejle",
    "køreskole Vejle centrum",
  ],

  openGraph: {
    title: "Lønbæks Køreskole i Vejle – Tag dit kørekort med tryghed",
    description:
      "Tag dit kørekort hos Lønbæks Køreskole i Vejle. Personlig undervisning, fleksible tider og fokus på sikker kørsel.",
    locale: "da_DK",
    type: "website",
    siteName: "Lønbæks Køreskole",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   return (
    <html lang="da">
      <body className={`${inter.variable} antialiased`}>
        <ThemeContextProvider>
          <AppProviders>
            <Header />
            <main>
            {children}
            </main>
            <Footer />
          </AppProviders>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
