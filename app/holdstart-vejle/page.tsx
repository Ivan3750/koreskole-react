import PageHero from "../components/PageHero";
import heroImage from "../assets/hero-driving.jpg";
import HoldStart from "../components/home/HoldStart";
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
  
 
 <HoldStart></HoldStart>
       <Contact />

    </>
    
  );
}
