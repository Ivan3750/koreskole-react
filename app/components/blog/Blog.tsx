"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { BASE_URL } from "@/app/lib/api";
import { useParams } from "next/navigation";

type Blog = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  created_at: string;
  updated_at: string | null;
};

const BlogPage = () => {
     const params = useParams();
    const locale = params?.locale as string;
  
    const withLocale = (path: string) => {
      if (!locale) return path;
      return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
    };
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", title: t("blogPage.categories.all") },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/blog.php`, { credentials: "include" });
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const formatDate = (isoDate: string): string =>
    new Date(isoDate).toLocaleDateString(i18n.language === "da" ? "da-DK" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") return blogs;
    return blogs;
  }, [blogs, selectedCategory]);

  if (loading) {
    return (
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="text-center space-y-4">
          <div
            className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto"
            style={{ borderColor: "var(--color-yellow)", borderTopColor: "transparent" }}
          />
          <p style={{ color: "var(--color-text-secondary)" }}>{t("blogPage.loading")}</p>
        </div>
      </section>
    );
  }

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
            {t("blogPage.title")}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            {t("blogPage.description")}
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id ? "shadow-lg" : "border-2"
              }`}
              style={
                selectedCategory === category.id
                  ? { backgroundColor: "var(--color-yellow)", color: "white" }
                  : { borderColor: "var(--color-border)", color: "var(--color-text)" }
              }
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const imageSrc = post.image
              ? post.image.startsWith("/uploads/") ? `${BASE_URL}${post.image}` : post.image
              : null;

            return (
              <Link key={post.id} href={withLocale(`/blog/${post.id}`)} className="group">
                <div
                  className="rounded-3xl border-2 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg)" }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
                      >
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-text-secondary)" }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-xl mb-3 leading-tight" style={{ color: "var(--color-text)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 flex-grow line-clamp-3" style={{ color: "var(--color-text-secondary)" }}>
                      {post.content.replace(/<[^>]*>/g, "").slice(0, 140)}...
                    </p>

                    <div
                      className="flex items-center justify-between pt-4 border-t-2"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <span className="text-sm font-semibold flex items-center gap-2" style={{ color: "var(--color-yellow)" }}>
                        {t("blogPage.readMore")}
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>

                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="var(--color-text-secondary)" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
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
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)" }}
            >
              <svg className="w-10 h-10" fill="var(--color-yellow)" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2" style={{ color: "var(--color-text)" }}>
              {t("blogPage.noArticles.title")}
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              {t("blogPage.noArticles.text")}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default BlogPage;