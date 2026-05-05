"use client";
import "../app/globals.css";
import { ThemeContextProvider } from "../app/theme/ThemeContext";
import { AppProviders } from "../app/theme/AppProviders";
import React from "react";
import Link from "next/link";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <ThemeContextProvider>
      <AppProviders fontFamily="var(--font-albert)">
        <Header></Header>

        <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden bg-[#141414]">
          <div
            className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-5"
            style={{ backgroundColor: "var(--color-yellow)" }}
          />
          <div
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-5"
            style={{ backgroundColor: "var(--color-yellow)" }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <h1
                className="font-display font-bold text-[150px] md:text-[200px] lg:text-[250px] leading-none"
                style={{
                  color: "var(--color-yellow)",
                  textShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                404
              </h1>
            </div>

            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ups! Siden blev ikke fundet
            </h2>

            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-white/60">
              Den side du leder efter eksisterer ikke, eller er blevet flyttet.
              Lad os hjælpe dig med at finde vejen tilbage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
            font-semibold text-lg transition-all duration-300 
            shadow-lg hover:shadow-xl hover:scale-105"
                style={{
                  backgroundColor: "var(--color-yellow)",
                  color: "white",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Gå til forsiden
              </Link>
            </div>
          </div>

        </section>
        <Footer></Footer>
      </AppProviders>
    </ThemeContextProvider>
  );
}
