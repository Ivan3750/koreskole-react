"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  created_at: string;
  updated_at: string | null;
};

const BASE_URL = "http://localhost:8000";
const API_URL  = `${BASE_URL}/blog.php`;

/* Strip HTML tags to make a plain-text excerpt */
const makeExcerpt = (html: string, maxLen = 120): string => {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return text.length > maxLen ? text.slice(0, maxLen).trimEnd() + "…" : text;
};

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/* ─── Category config (used only for the filter UI) ─────────────────────── */
const CATEGORIES = [
  {
    id: "teoriproeve-tips",
    title: "Teoriprøve Tips",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "koereproeve-guide",
    title: "Køreprøve Guide",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    id: "trafik-vejle",
    title: "Trafik i Vejle",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "trafikregler",
    title: "Trafikregler",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

/* ─── Skeleton card ──────────────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="rounded-3xl border-2 overflow-hidden animate-pulse"
      style={{ borderColor: "var(--color-border)" }}>
      <div className="aspect-video w-full bg-gray-200" />
      <div className="p-6 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-5/6" />
        <div className="h-px bg-gray-200 mt-4" />
        <div className="flex justify-between pt-2">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-100 rounded w-24" />
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
const Blog = () => {
  const [posts,    setPosts]    = useState<Blog[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState<string | null>(null);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch(API_URL, { credentials: "include" });
        const data = await res.json();
        setPosts(data.blogs || []);
      } catch {
        setError("Kunne ikke hente artikler. Prøv igen senere.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* Each post's category is not stored in the DB - we derive it from the
     title keywords so the existing filter UI still works for admin-created posts.
     You can also add a real `category` column later.                          */
  const guessCategory = (post: Blog): string => {
    const t = post.title.toLowerCase();
    if (t.includes("teori") || t.includes("færdsels"))        return "teoriproeve-tips";
    if (t.includes("parallel") || t.includes("rundkørsel") ||
        t.includes("vigepligt") || t.includes("motorvej") ||
        t.includes("parkering") || t.includes("køreprøve"))   return "koereproeve-guide";
    if (t.includes("vejle"))                                   return "trafik-vejle";
    if (t.includes("hastighed") || t.includes("bøde") ||
        t.includes("klip") || t.includes("trafik"))           return "trafikregler";
    return "other";
  };

  const filtered = selected === "all"
    ? posts
    : posts.filter((p) => guessCategory(p) === selected);

  /* ── Render ────────────────────────────────────────────────────────────── */
  return (
    <section className="py-20 md:py-28 lg:py-40" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Tips og nyheder om kørsel
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Få indsigt i teoriprøven, køreprøven, trafikregler og lokale forhold i Vejle.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[{ id: "all", title: "Alle artikler", icon: null }, ...CATEGORIES].map((cat) => {
            const active = selected === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  active ? "shadow-lg" : "border-2"
                }`}
                style={
                  active
                    ? { backgroundColor: "var(--color-yellow)", color: "white" }
                    : { borderColor: "var(--color-border)", color: "var(--color-text)" }
                }
              >
                {cat.icon && (
                  <span style={{ color: active ? "white" : "var(--color-yellow)" }}>
                    {cat.icon}
                  </span>
                )}
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Error */}
        {error && (
          <div className="text-center py-10">
            <p className="text-red-500 font-semibold">{error}</p>
          </div>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : filtered.map((post) => {
                const coverSrc = post.image
                  ? post.image.startsWith("/uploads/")
                    ? `${BASE_URL}${post.image}`
                    : post.image
                  : null;

                return (
                  <Link key={post.id} href={`/blog/${post.id}`} className="group">
                    <div
                      className="rounded-3xl border-2 overflow-hidden h-full flex flex-col
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg)" }}
                    >
                      {/* Image */}
                      <div className="aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        {coverSrc ? (
                          <img
                            src={coverSrc}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            style={{ color: "var(--color-border)" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3
                          className="font-bold text-xl mb-3 leading-tight"
                          style={{ color: "var(--color-text)" }}
                        >
                          {post.title}
                        </h3>

                        <p
                          className="text-sm leading-relaxed mb-4 flex-grow"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {makeExcerpt(post.content)}
                        </p>

                        {/* Footer */}
                        <div
                          className="flex items-center justify-between pt-4 border-t-2"
                          style={{ borderColor: "var(--color-border)" }}
                        >
                          <span
                            className="text-sm font-semibold flex items-center gap-2"
                            style={{ color: "var(--color-yellow)" }}
                          >
                            Læs mere
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>

                          <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                              style={{ color: "var(--color-text-secondary)" }}>
                              <path fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd" />
                            </svg>
                            <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                              {formatDate(post.created_at)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)" }}
            >
              <svg className="w-10 h-10" fill="var(--color-yellow)" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2" style={{ color: "var(--color-text)" }}>
              Ingen artikler fundet
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>Prøv at vælge en anden kategori</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;