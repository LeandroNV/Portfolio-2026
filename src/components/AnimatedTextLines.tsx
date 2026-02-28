import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface Props {
  text: string;
  className?: string;
}

export const AnimatedTextLines = ({ text, className }: Props) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const linesRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (linesRefs.current.length > 0) {
      gsap.from(linesRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <span
          ref={(el) => {
            linesRefs.current[i] = el;
          }}
          className="block leading-relaxed tracking-wide text-pretty"
          key={i}
        >
          {line}
        </span>
      ))}
    </div>
  );
};
