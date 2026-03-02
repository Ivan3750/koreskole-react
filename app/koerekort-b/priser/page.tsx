import PageHero from "../../components/PageHero";
import heroImage from "../../assets/hero-driving.jpg";
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
