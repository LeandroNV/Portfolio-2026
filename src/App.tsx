import { NavBar } from "./sections/NavBar";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "./sections/Hero";
import { ServiceSummary } from "./sections/ServiceSummary";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-auto">
      <NavBar />
      <Hero />
      <ServiceSummary />
    </div>
  );
};
