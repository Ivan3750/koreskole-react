import Image from "next/image";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import HoldStart from "./components/HoldStart";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Instructors from "./components/Instructors";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection></AboutSection>
      <Services />
      <HoldStart />
      <Testimonials />
      <Instructors></Instructors>
      <FAQ></FAQ>
      <Contact />
    </>
  );
}
