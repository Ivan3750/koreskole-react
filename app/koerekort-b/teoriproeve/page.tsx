

import PageHero from "../../components/PageHero";
import heroImage from "../../assets/hero-driving.jpg";
/* import Fejl from "../../components/Fejl";
 */import TeoriproevePage from "../../components/TeoriproevePage";

export default function OmOs() {
  return (
    <>
  <PageHero
  title="  Køreprøve i Vejle — hvad skal du vide?"
  subtitle=" Alt du behøver at vide om den praktiske køreprøve i Vejle — 
              fra prøveforløb til typiske ruter og hvordan du består første gang."
  image={heroImage}
/>
{/* <Fejl></Fejl>
 */}<TeoriproevePage></TeoriproevePage>
    </>
  );
}
