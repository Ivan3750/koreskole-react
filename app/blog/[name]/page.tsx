// app/blog/[name]/page.tsx
import React from "react";
import Link from "next/link";
import mistake from "@/app/assets/mistake.jpg";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "teoriproeve-tips",
    title: "10 typiske teoriprøve-fejl",
    description: "Lær de mest almindelige fejl...",
    date: "2026-02-10",
    image: mistake.src,
    slug: "10-typiske-fejl",
  },
  {
    id: 2,
    category: "teoriproeve-tips",
    title: "Sådan lærer du trafikregler effektivt",
    description: "...",
    date: "2026-02-08",
    image: "/blog-image-2.jpg",
    slug: "laer-trafikregler",
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    name: post.slug,
  }));
}

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const post = blogPosts.find((p) => p.slug === name);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Artiklen blev ikke fundet</h2>
        <p className="text-lg mb-6">
          Tjek URL eller gå tilbage til{" "}
          <Link href="/blog" className="text-yellow-500 underline">
            bloggen
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <section className="py-20 md:py-28 lg:py-40 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {post.title}
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        {formatDate(post.date)}
      </p>

      <div className="mb-8 overflow-hidden rounded-2xl">
        <img src={post.image} alt={post.title} className="w-full object-cover" />
      </div>

      <div className="prose max-w-full">
        <p>{post.description}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>

      <div className="mt-12">
        <Link href="/blog" className="text-yellow-500 underline">
          ← Tilbage til bloggen
        </Link>
      </div>
    </section>
  );
}