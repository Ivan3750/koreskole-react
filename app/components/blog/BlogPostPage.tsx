"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { BASE_URL } from "@/app/lib/api";

type Blog = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  created_at: string;
  updated_at: string | null;
};

export default function BlogPostPage() {
    const params = useParams();
  const locale = params?.locale as string;

  const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [post, setPost] = useState<Blog | null>(null);
  const [related, setRelated] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(i18n.language === "da" ? "da-DK" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${BASE_URL}/blog.php?id=${id}`, { credentials: "include" });
        if (!res.ok) throw new Error(t("blogPost.notFound"));

        const data: Blog = await res.json();
        setPost(data);

        const allRes = await fetch(`${BASE_URL}/blog.php`, { credentials: "include" });
        const allData = await allRes.json();
        setRelated((allData.blogs as Blog[]).filter((b) => b.id !== data.id).slice(0, 4));
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : t("blogPost.notFound"));
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

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
          <p style={{ color: "var(--color-text-secondary)" }}>{t("blogPost.loading")}</p>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="text-center space-y-6 max-w-md px-6">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
            style={{ backgroundColor: "rgba(239,68,68,0.1)" }}
          >
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
            {error || t("blogPost.notFound")}
          </h1>
          <Link
            href={withLocale("/blog")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all"
            style={{ backgroundColor: "var(--color-yellow)", color: "white" }}
          >
            {t("blogPost.backToBlog")}
          </Link>
        </div>
      </section>
    );
  }

  const coverSrc = post.image
    ? post.image.startsWith("/uploads/") ? `${BASE_URL}${post.image}` : post.image
    : null;

  return (
    <>
      <style>{`
        .blog-content { line-height: 1.8; }
        .blog-content > * + * { margin-top: 1em; }
        .blog-content p { margin: 0; }
        .blog-content h1 { font-size: 1.875rem; font-weight: 700; margin-top: 1.5em; }
        .blog-content h2 { font-size: 1.5rem; font-weight: 700; margin-top: 1.4em; }
        .blog-content h3 { font-size: 1.25rem; font-weight: 700; margin-top: 1.3em; }
        .blog-content ul { list-style: disc; padding-left: 1.5rem; }
        .blog-content ol { list-style: decimal; padding-left: 1.5rem; }
        .blog-content blockquote { border-left: 4px solid var(--color-yellow); padding-left: 1rem; color: var(--color-text-secondary); font-style: italic; margin: 1.25em 0; }
        .blog-content code { background: rgba(0,0,0,0.06); padding: 0.15em 0.4em; border-radius: 4px; font-size: 0.875em; font-family: monospace; }
        .blog-content pre { background: #1e293b; color: #e2e8f0; padding: 1.25rem; border-radius: 10px; overflow-x: auto; }
        .blog-content pre code { background: none; padding: 0; }
        .blog-content strong { font-weight: 700; }
        .blog-content em { font-style: italic; }
        .blog-content a { color: var(--color-yellow); text-decoration: underline; }
        .blog-content img { max-width: 100%; border-radius: 12px; margin: 1em 0; display: block; }
        .blog-content hr { border: none; border-top: 2px solid var(--color-border); margin: 2em 0; }
      `}</style>

      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Back button */}
          <div className="mb-10">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t("blogPost.back")}
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Article */}
            <article className="lg:col-span-2">
              {coverSrc && (
                <div
                  className="w-full aspect-video rounded-3xl overflow-hidden mb-8 border-2"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <img src={coverSrc} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* Meta */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {formatDate(post.created_at)}
                </div>

                {post.updated_at && post.updated_at !== post.created_at && (
                  <>
                    <span style={{ color: "var(--color-border)" }}>·</span>
                    <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {t("blogPost.updated")} {formatDate(post.updated_at)}
                    </span>
                  </>
                )}
              </div>

              <h1
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
                style={{ color: "var(--color-text)" }}
              >
                {post.title}
              </h1>

              <div className="h-1 w-16 rounded-full mb-8" style={{ backgroundColor: "var(--color-yellow)" }} />

              <div
                className="blog-content text-base md:text-lg"
                style={{ color: "var(--color-text)" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 space-y-6">
                <h2 className="font-bold text-lg" style={{ color: "var(--color-text)" }}>
                  {t("blogPost.moreArticles")}
                </h2>

                {related.length === 0 && (
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {t("blogPost.noRelated")}
                  </p>
                )}

                {related.map((rel) => {
                  const relCover = rel.image
                    ? rel.image.startsWith("/uploads/") ? `${BASE_URL}${rel.image}` : rel.image
                    : null;

                  return (
                    <Link
                      key={rel.id}
                      href={withLocale(`/blog/${rel.id}`)}
                      className="group flex gap-4 p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg)" }}
                    >
                      {relCover ? (
                        <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={relCover} alt={rel.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      ) : (
                        <div
                          className="w-20 h-16 rounded-xl flex-shrink-0 flex items-center justify-center border-2"
                          style={{ borderColor: "var(--color-border)", backgroundColor: "rgba(0,0,0,0.03)" }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-text-secondary)" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                          </svg>
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-1" style={{ color: "var(--color-text)" }}>
                          {rel.title}
                        </h3>
                        <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                          {formatDate(rel.created_at)}
                        </span>
                      </div>
                    </Link>
                  );
                })}

                {/* CTA card */}
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: "var(--color-yellow)", color: "white" }}
                >
                  <h3 className="font-bold text-lg mb-2">{t("blogPost.cta.title")}</h3>
                  <p className="text-sm mb-4 opacity-90">{t("blogPost.cta.text")}</p>
                  <Link
                    href={withLocale("/kontakt")}
                    className="inline-block bg-white font-semibold text-sm px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    {t("blogPost.cta.button")}
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}