import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });
  });

  return (
    <section className="contact-text-responsive mt-20 mb-42 overflow-hidden text-center leading-snug font-light">
      <div id="title-service-1">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex translate-x-16 items-center justify-center gap-3"
      >
        <p className="font-normal">Development</p>
        <div className="bg-gold h-1 w-10 md:w-32" />
        <p>Deployment</p>
      </div>

      <div
        id="title-service-3"
        className="flex -translate-x-48 items-center justify-center gap-3"
      >
        <p>APIs</p>
        <div className="bg-gold h-1 w-10 md:w-32" />
        <p className="italic">Frontends</p>
        <div className="bg-gold h-1 w-10 md:w-32" />
        <p>Scalability</p>
      </div>

      <div id="title-service-4" className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
};
