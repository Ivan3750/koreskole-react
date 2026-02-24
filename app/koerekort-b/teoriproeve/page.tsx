

import PageHero from "../../components/PageHero";
import heroImage from "../../assets/hero-driving.jpg";
/* import Fejl from "../../components/Fejl";
 */import TeoriproevePage from "../../components/TeoriproevePage";

export default function OmOs() {
  return (
    <>
  <PageHero
  title="Teoriprøve i Vejle — sådan består du første gang"
subtitle="Få overblik over hvordan teoriprøven foregår i Vejle, 
hvor mange fejl du må have, og hvad du skal være særligt opmærksom på for at bestå."
  image={heroImage}
/>
{/* <Fejl></Fejl>
 */}<TeoriproevePage></TeoriproevePage>
    </>
  );
}
