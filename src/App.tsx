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
import { useProgress } from "@react-three/drei";

gsap.registerPlugin(SplitText, ScrollTrigger, Observer);

export const App = () => {
  const { progress } = useProgress();
  const isReady = progress === 100;

  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black font-light text-white transition-opacity duration-700">
          <p className="mb-4 animate-pulse text-xl tracking-widest">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 w-60 overflow-hidden bg-white/20">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${isReady ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
      >
        <NavBar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};
