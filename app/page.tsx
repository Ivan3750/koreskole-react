import Image from "next/image";
import Hero  from "./components/home/Hero";
import Services from "./components/home/Services";
import HoldStart from "./components/home/HoldStart";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Instructors from "./components/home/Instructors";
import AboutSection from "./components/home/AboutSection";

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
