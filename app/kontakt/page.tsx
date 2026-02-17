

import Image from "next/image";
import PageHero from "../components/PageHero";
import heroImage from "../assets/hero-driving.jpg";
import ContactFormPage from "../components/ContactFormPage";


export default function OmOs() {
  return (
    <>
  <PageHero
  title="Kontakt Lønbæks Køreskole i Vejle
"
  subtitle=" Har du spørgsmål om teoriprøve, køreprøve, eller vores kørekort B forløb?
          Vores team i Vejle står klar til at hjælpe dig."
  image={heroImage}
/>
<ContactFormPage />
 
    </>
  );
} 
