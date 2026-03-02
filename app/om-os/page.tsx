import Image from "next/image";
import PageHero from "../components/PageHero";
import heroImage from "../assets/hero-driving.jpg";
import { Instructors } from "../components/om-os/Instrustors";
import AboutIntro from "../components/om-os/AboutInro";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Cars from "../components/om-os/Cars";



export default function OmOs() {
  return (
    <>
      <PageHero
        title="Om Lønbæks Køreskole"
        subtitle="Vi har uddannet tusindvis af elever siden 1984 og tilbyder personlig undervisning."
        image={heroImage}
      />
      <AboutIntro />
      <Instructors />
      <Cars></Cars>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Contact></Contact>
    </>
  );
}
