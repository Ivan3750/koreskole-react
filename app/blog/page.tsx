import Blog from "../components/blog/Blog";
    import PageHero from "../components/PageHero";
    import heroImage from "../assets/hero-driving.jpg";
const BlogPage  = () => {
  return (
    <>
      <PageHero
      title="            Tips og nyheder om kørsel
"
      subtitle=" Få indsigt i teoriprøven, køreprøven, trafikregler og lokale forhold i Vejle.
"
      image={heroImage}
    />
      <Blog></Blog>
    </>);}

    export default BlogPage;


