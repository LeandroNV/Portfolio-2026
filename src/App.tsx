import { NavBar } from "./sections/NavBar";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { Hero } from "./sections/Hero";
import { ServiceSummary } from "./sections/ServiceSummary";
import { Services } from "./sections/Services";
import ReactLenis from "lenis/react";
import { About } from "./sections/About";
import { Works } from "./sections/Works";
import { ContactSummary } from "./sections/ContactSummary";
import { Contact } from "./sections/Contact";

gsap.registerPlugin(SplitText, ScrollTrigger, Observer);

export const App = () => {
  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-auto">
      <NavBar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </ReactLenis>
  );
};
