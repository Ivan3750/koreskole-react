import BlogPostPage from "../../../components/blog/BlogPostPage";

export async function generateStaticParams() {
  const res = await fetch("https://lønbæks.dk/api/blog.php");
  const data = await res.json();

  return data.blogs.map((post: { id: number }) => ({
    locale: "da",
    id: String(post.id),
  }));
}

export default function Page() {
  return <BlogPostPage />;
}