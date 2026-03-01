import { NavBar } from "./sections/NavBar";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "./sections/Hero";
import { ServiceSummary } from "./sections/ServiceSummary";
import { Services } from "./sections/Services";
import ReactLenis from "lenis/react";
import { About } from "./sections/About";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const App = () => {
  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-auto">
      <NavBar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
    </ReactLenis>
  );
};
