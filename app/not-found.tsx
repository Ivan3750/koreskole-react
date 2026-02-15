"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-5"
        style={{ backgroundColor: "var(--color-yellow)" }}
      />
      <div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: "var(--color-yellow)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* 404 Number */}
        <div className="mb-8">
          <h1
            className="font-display font-bold text-[150px] md:text-[200px] lg:text-[250px] leading-none"
            style={{ 
              color: "var(--color-yellow)",
              textShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
          >
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center"
            style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)" }}
          >
            <svg 
              className="w-12 h-12" 
              fill="var(--color-yellow)" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Ups! Siden blev ikke fundet
        </h2>

        {/* Description */}
        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Den side du leder efter eksisterer ikke, eller er blevet flyttet. 
          Lad os hjælpe dig med at finde vejen tilbage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
            font-semibold text-lg transition-all duration-300 
            shadow-lg hover:shadow-xl hover:scale-105"
            style={{ 
              backgroundColor: "var(--color-yellow)",
              color: "white"
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Gå til forsiden
          </Link>

          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
            font-semibold text-lg transition-all duration-300 
            border-2 hover:shadow-lg"
            style={{ 
              borderColor: "var(--color-border)",
              color: "var(--color-text)",
              backgroundColor: "var(--color-bg)"
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Kontakt os
          </Link>
        </div>

      </div>

     {/* Additional decorative elements */}
    </section>
  );
}