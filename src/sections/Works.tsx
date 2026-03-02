import { Icon } from "@iconify/react";
import { AnimatedHeaderSection } from "../components/AnimatedHeaderSection";
import { projects } from "../constants";

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
      <div className="relative flex flex-col font-light">
        {projects.map((project) => (
          <div
            key={project.id}
            id="project"
            className="group relative flex cursor-pointer flex-col gap-1 py-5 md:gap-0"
          >
            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="text-[26px] leading-none lg:text-[32px]">
                {project.name}
              </h2>

              <Icon icon="mi:arrow-right-up" className="size-5 md:size-6" />
            </div>
            {/* divider */}
            <div className="h-0.5 w-full bg-black/80" />

            {/* framework */}
            <div className="flex gap-x-5 px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
