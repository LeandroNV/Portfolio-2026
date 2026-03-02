import { AnimatedHeaderSection } from "../components/AnimatedHeaderSection";

const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

export const Works = () => {
  return (
    <section id="work" className="flex min-h-screen flex-col">
      <AnimatedHeaderSection
        subtitle={"Logic meets Aesthetics, seamlessly"}
        title={"About"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
    </section>
  );
};
