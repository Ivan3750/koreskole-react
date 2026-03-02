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
import PriserPage from "../../components/PriserPage";
export default function OmOs() {
  return (
    <>
      <PageHero
        title=" Pris på kørekort i Vejle — hvad koster det?"
        subtitle=" Gennemsigtighed er vigtigt. Derfor finder du her alle vores priser uden skjulte omkostninger."
        image={heroImage}
      />
<PriserPage></PriserPage>
<FAQ></FAQ>
    </>
    
  );
}
