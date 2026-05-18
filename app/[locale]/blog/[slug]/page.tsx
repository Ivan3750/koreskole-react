import BlogPostPage from "../../../components/blog/BlogPostPage";

export function generateStaticParams() {
  return [
    { locale: "en", slug: "placeholder" },
    { locale: "da", slug: "placeholder" },
  ];
}

export default function Page() {
  return <BlogPostPage />;
}