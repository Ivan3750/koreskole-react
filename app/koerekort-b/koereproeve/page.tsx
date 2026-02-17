import Image from "next/image";
import PageHero from "../../components/PageHero";
import heroImage from "../../assets/hero-driving.jpg";
import KoerekortB from "../../components/koerekort-b";
import Priser from "../../components/koereproeve-vejle/Priser";
import Info from "../../components/koereproeve-vejle/Info";
import TimeLine from "../../components/koereproeve-vejle/TimeLine";
import TheoryClassesSection from "../../components/koereproeve-vejle/TheoryClassesSection";
import Cars from "../../components/koereproeve-vejle/Cars";
import PassStrategySection from "../../components/koereproeve-vejle/PassStrategySection";
import FAQ from "../../components/FAQ";
import KoereproevePage from "@/app/components/koereproeve-vejle/KoereproevePage";

export default function OmOs() {
  return (
    <>
      <PageHero
        title=" Kørekort B i Vejle — din vej til kørekortet"
        subtitle=" Drømmer du om frihed på vejene? Hos Køreskole Vejle hjælper vi dig med at tage kørekort B hurtigt, sikkert og til en fair pris. Med over 15 års erfaring i Vejle kender vi de lokale forhold og ved præcis, hvad der skal til for at bestå første gang.
"
        image={heroImage}
      />
  
<KoereproevePage></KoereproevePage>
 <FAQ></FAQ>
    </>
    
  );
}
