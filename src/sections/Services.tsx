import { useRef } from "react";
import { AnimatedHeaderSection } from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";

const text =
  "I build secure, high-performance full-stack apps with smoothUX to drive growth not headaches.";

export const Services = () => {
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <section id="services" className="min-h-screen rounded-t-4xl bg-black">
      <AnimatedHeaderSection
        subtitle="Behind the scene, Beyond the screen"
        title="Service"
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => {
            servicesRef.current[index] = el;
          }}
          key={index}
          className="sticky border-t-2 bg-black px-10 pt-6 pb-10 text-white"
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest text-pretty text-white/60 lg:text-2xl">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl text-white/80 sm:gap-4 lg:text-3xl">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    <div className="my-2 h-px w-full bg-white/30" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
