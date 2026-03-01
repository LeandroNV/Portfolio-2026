import { AnimatedHeaderSection } from "../components/AnimatedHeaderSection";

const text =
  "Passionate about clean architecture I build scalable, high-performance solutions from prototype to production";

export const About = () => {
  return (
    <section id="about" className="min-h-screen rounded-b-4xl bg-black">
      <AnimatedHeaderSection
        subtitle="Code with purpose, Built to scale"
        title="About"
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide md:text-2xl lg:flex-row lg:text-3xl text-white/60">
        <img src="images/man.jpg" alt="man"/> 
      </div>
    </section>
  );
};
