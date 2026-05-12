import BlogPostPage from "../../../components/blog/BlogPostPage";

export async function generateStaticParams() {
  try {
    const res = await fetch("https://lønbæks.dk/api/blog.php");

    if (!res.ok) {
      console.error("Failed fetch:", res.status);

      return [{ locale: "da", id: "1" }];
    }

    const data = await res.json();

    const blogs = Array.isArray(data)
      ? data
      : Array.isArray(data.blogs)
      ? data.blogs
      : [];

    if (blogs.length === 0) {
      return [{ locale: "da", id: "1" }];
    }

    return blogs.map((post: { id: number | string }) => ({
      locale: "da",
      id: String(post.id),
    }));
  } catch (err) {
    console.error("generateStaticParams error:", err);

    return [{ locale: "da", id: "1" }];
  }
}

export default function Page() {
  return <BlogPostPage />;
}