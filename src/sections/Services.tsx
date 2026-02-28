import { AnimatedHeaderSection } from "../components/AnimatedHeaderSection";

const text =
  "I build secure, high-performance full-stack apps with smoothUX to drive growth not headaches.";

export const Services = () => {
  return (
    <section id="services" className="min-h-screen rounded-t-4xl bg-black">
      <AnimatedHeaderSection
        subtitle="Behind the scene, Beyond the screen"
        title="Service"
        text={text}
        textColor="text-white"
      />
    </section>
  );
};
