import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type AnimatedHeaderSectionProps = {
  subtitle: string;
  title: string;
  text: string;
  textColor: string;
};

export const AnimatedHeaderSection = ({
  subtitle,
  title,
  text,
  textColor,
}: AnimatedHeaderSectionProps) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2",
    );
  }, []);
  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`${textColor} px-10 text-sm font-light tracking-[0.5rem] uppercase`}
          >
            {subtitle}
          </p>

          <div className="px-10">
            <h1
              className={`banner-text-responsive sm:leading20 flex flex-col flex-wrap gap-12 leading-14 ${textColor} uppercase sm:gap-16 sm:leading-22 md:block md:leading-28`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 text-end sm:py-16">
          <AnimatedTextLines
            text={text}
            className="value-text-responsive font-light uppercase"
          />
        </div>
      </div>
    </div>
  );
};
