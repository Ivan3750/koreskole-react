import Image from "next/image";
import PageHero from "../../components/PageHero";
import heroImage from "../../assets/hero-driving.jpg";
import KoerekortB from "../../components/koerekort-b";
import Priser from "../../components/koereproeve-vejle/Priser";
import Info from "../../components/koereproeve-vejle/Info";
import TimeLine from "../../components/koereproeve-vejle/TimeLine";
import TheoryClassesSection from "../../components/koereproeve-vejle/TheoryClassesSection";
import Cars from "../../components/om-os/Cars";
import PassStrategySection from "../../components/koereproeve-vejle/PassStrategySection";
import FAQ from "../../components/FAQ";
import KoereproevePage from "@/app/components/koereproeve-vejle/KoereproevePage";

export default function OmOs() {
  return (
    <>
     <PageHero
  title="  Køreprøve i Vejle — hvad skal du vide?"
  subtitle=" Alt du behøver at vide om den praktiske køreprøve i Vejle — 
              fra prøveforløb til typiske ruter og hvordan du består første gang."
  image={heroImage}
/>
  
<KoereproevePage></KoereproevePage>
 <FAQ></FAQ>
    </>
    
  );
}
