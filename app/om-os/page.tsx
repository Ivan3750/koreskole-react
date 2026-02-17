

import Image from "next/image";
import PageHero from "../components/PageHero";
import heroImage from "../assets/hero-driving.jpg";
import { CTA } from "../components/om-os/CTA";
 import { Stats } from "../components/om-os/Stats";
import { Instructors } from "../components/om-os/Instrustors";
import { Timeline } from "../components/om-os/Timeline";
import { Benefits } from "../components/om-os/Benefits";
import AboutIntro  from "../components/om-os/AboutInro";

import { ProcessOverview } from "../components/om-os/ProcessOverview";
import { LocalFocus } from "../components/om-os/LocalFocus";
import { DrivingExperience } from "../components/om-os/DrivingExperience";
import { Values } from "../components/om-os/Values";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function OmOs() {
  return (
    <>
  <PageHero
  title="Om Lønbæks Køreskole"
  subtitle="Vi har uddannet tusindvis af elever siden 1984 og tilbyder personlig undervisning."
  image={heroImage}
/>
<AboutIntro />
<Benefits />
 <Instructors />
<Values />
<CTA />
<Testimonials></Testimonials>
<FAQ></FAQ>
<Contact></Contact>
    </>
  );
} 
