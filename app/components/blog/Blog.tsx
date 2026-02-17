"use client";

import React, { useState } from "react";
import Link from "next/link";
import mistake from "@/app/assets/mistake.jpg"
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "teoriproeve-tips",
      title: "Teoriprøve Tips",
      slug: "/blog/teoriproeve-tips",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      )
    },
    {
      id: "koereproeve-guide",
      title: "Køreprøve Guide",
      slug: "/blog/koereproeve-guide",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
        </svg>
      )
    },
    {
      id: "trafik-vejle",
      title: "Trafik i Vejle",
      slug: "/blog/trafik-vejle",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      id: "trafikregler",
      title: "Trafikregler",
      slug: "/blog/trafikregler",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      )
    }
  ];

  const blogPosts = [
    {
      id: 1,
      category: "teoriproeve-tips",
      title: "10 typiske teoriprøve-fejl (og hvordan du undgår dem)",
      description: "Lær de mest almindelige fejl, elever laver til teoriprøven, og hvordan du sikrer dig success.",
      date: "2026-02-10",
      image: mistake.src,
      slug: "/blog/teoriproeve-tips/10-typiske-fejl"
    },
    {
      id: 2,
      category: "teoriproeve-tips",
      title: "Sådan lærer du trafikregler effektivt",
      description: "Få konkrete metoder til at huske trafikregler og bestå teoriprøven første gang.",
      date: "2026-02-08",
      image: "/blog-image-2.jpg",
      slug: "/blog/teoriproeve-tips/laer-trafikregler"
    },
    {
      id: 3,
      category: "teoriproeve-tips",
      title: "Færdselsskilte du skal kende",
      description: "Gennemgang af de vigtigste færdselsskilte og deres betydning i trafikken.",
      date: "2026-02-05",
      image: "/blog-image-3.jpg",
      slug: "/blog/teoriproeve-tips/faerdselsskilte"
    },
    {
      id: 4,
      category: "koereproeve-guide",
      title: "Parallelparkering step-by-step",
      description: "Mestre parallelparkering med vores simple trin-for-trin guide.",
      date: "2026-02-12",
      image: "/blog-image-4.jpg",
      slug: "/blog/koereproeve-guide/parallelparkering"
    },
    {
      id: 5,
      category: "koereproeve-guide",
      title: "Rundkørsel regler i Vejle",
      description: "Alt hvad du skal vide om at køre sikkert i rundkørsler i Vejle-området.",
      date: "2026-02-09",
      image: "/blog-image-5.jpg",
      slug: "/blog/koereproeve-guide/rundkoersel-regler"
    },
    {
      id: 6,
      category: "koereproeve-guide",
      title: "Vigepligt for dummies",
      description: "Forvirrende vigepligtssituationer forklaret simpelt og tydeligt.",
      date: "2026-02-06",
      image: "/blog-image-6.jpg",
      slug: "/blog/koereproeve-guide/vigepligt"
    },
    {
      id: 7,
      category: "koereproeve-guide",
      title: "Motorvejskørsel for begyndere",
      description: "Bliv tryg ved motorvejskørsel med disse vigtige tips og tricks.",
      date: "2026-02-03",
      image: "/blog-image-7.jpg",
      slug: "/blog/koereproeve-guide/motorvejskoersel"
    },
    {
      id: 8,
      category: "trafik-vejle",
      title: "De 5 sværeste rundkørsler i Vejle",
      description: "Vi guider dig gennem de mest udfordrende rundkørsler i Vejle.",
      date: "2026-02-11",
      image: "/blog-image-8.jpg",
      slug: "/blog/trafik-vejle/svaereste-rundkoersler"
    },
    {
      id: 9,
      category: "trafik-vejle",
      title: "Typiske køreprøve-ruter i Vejle",
      description: "Bliv fortrolig med de mest anvendte køreprøve-ruter hos politiet i Vejle.",
      date: "2026-02-07",
      image: "/blog-image-9.jpg",
      slug: "/blog/trafik-vejle/koereproeve-ruter"
    },
    {
      id: 10,
      category: "trafik-vejle",
      title: "Trafik i Vejle centrum — hvad skal du vide?",
      description: "Navigér sikkert gennem Vejle centrum med vores lokale guide.",
      date: "2026-02-04",
      image: "/blog-image-10.jpg",
      slug: "/blog/trafik-vejle/vejle-centrum"
    },
    {
      id: 11,
      category: "trafikregler",
      title: "Nye hastighedsgrænser 2026",
      description: "Opdateringer om de seneste ændringer i hastighedsgrænser i Danmark.",
      date: "2026-02-13",
      image: "/blog-image-11.jpg",
      slug: "/blog/trafikregler/hastighedsgraenser-2026"
    },
    {
      id: 12,
      category: "trafikregler",
      title: "Bødetakster i Danmark",
      description: "Oversigt over bøder for trafikforseelser og hvordan du undgår dem.",
      date: "2026-02-02",
      image: "/blog-image-12.jpg",
      slug: "/blog/trafikregler/boedetakster"
    },
    {
      id: 13,
      category: "trafikregler",
      title: "Klip i kørekort — hvad gør du?",
      description: "Få svar på hvad du skal gøre, hvis du får klip i dit kørekort.",
      date: "2026-01-30",
      image: "/blog-image-13.jpg",
      slug: "/blog/trafikregler/klip-i-koerekort"
    }
  ];

  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("da-DK", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section
      className="py-20 md:py-28 lg:py-40"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
        

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Tips og nyheder om kørsel
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Få indsigt i teoriprøven, køreprøven, trafikregler og lokale forhold i Vejle.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === "all" 
                ? "shadow-lg" 
                : "border-2"
            }`}
            style={
              selectedCategory === "all"
                ? { backgroundColor: "var(--color-yellow)", color: "white" }
                : { borderColor: "var(--color-border)", color: "var(--color-text)" }
            }
          >
            Alle artikler
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "shadow-lg" 
                  : "border-2"
              }`}
              style={
                selectedCategory === category.id
                  ? { backgroundColor: "var(--color-yellow)", color: "white" }
                  : { borderColor: "var(--color-border)", color: "var(--color-text)" }
              }
            >
              <span style={{ color: selectedCategory === category.id ? "white" : "var(--color-yellow)" }}>
                {category.icon}
              </span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={post.slug}
              className="group"
            >
              <div
                className="rounded-3xl border-2 overflow-hidden h-full flex flex-col
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ 
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)"
                }}
              >
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="font-bold text-xl mb-3 leading-tight transition-colors duration-300"
                    style={{ color: "var(--color-text)" }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-4 flex-grow"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t-2"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span
                      className="text-sm font-semibold flex items-center gap-2 transition-colors duration-300"
                      style={{ color: "var(--color-yellow)" }}
                    >
                      Læs mere
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </span>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="var(--color-text-secondary)" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      <span
                        className="text-xs"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)" }}
            >
              <svg className="w-10 h-10" fill="var(--color-yellow)" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3
              className="font-bold text-2xl mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Ingen artikler fundet
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Prøv at vælge en anden kategori
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;