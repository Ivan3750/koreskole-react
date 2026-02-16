import PageHero from "../components/PageHero";
import heroImage from "../assets/hero-driving.jpg";
import HoldStartPage from "../components/HoldStartPage";
import Contact from "../components/Contact";
export default function OmOs() {
  return (
    <>
      <PageHero
        title=" Næste holdstart — kom i gang nu"
        subtitle="   Vælg et hold der passer til din hverdag. Vi tilbyder fleksible tider,
            små hold og personlig undervisning hele vejen til dit kørekort."
        image={heroImage}
      />
  
 
 <HoldStartPage></HoldStartPage>
       <Contact />

    </>
    
  );
}
