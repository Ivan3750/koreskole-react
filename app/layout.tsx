import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { AppProviders } from "./theme/AppProviders";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert",
});

export const metadata: Metadata = {
  title: "Lønbæks Køreskole i Vejle – Kørekort med erfaren kørelærer",
  description:
    "Lønbæks Køreskole i Vejle tilbyder professionel teori- og køreundervisning med fokus på sikkerhed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="da" className={albertSans.variable}>
  <body className={albertSans.className}>
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
