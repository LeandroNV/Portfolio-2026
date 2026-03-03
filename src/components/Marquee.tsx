import { Icon } from "@iconify/react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useEffect, useRef } from "react";

interface PropsMarquee {
  items: string[];
  className?: string;
  icon?: string;
  iconClassName?: string;
  reverse?: boolean;
}

interface HorizontalLoopConfig {
  repeat?: number;
  paused?: boolean;
  reversed?: boolean;
  speed?: number;
  snap?: number | false;
  paddingRight?: number | string;
}

export const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi-star-four-points",
  iconClassName = "",
  reverse = false,
}: PropsMarquee) => {
  const containerRef = useRef(null);
  const itemsRef = useRef<(HTMLSpanElement | null)[]>([]);

  function horizontalLoop(items: HTMLElement[], config: HorizontalLoopConfig) {
    items = gsap.utils.toArray(items);
    const tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      },
    });
    const length = items.length;
    const startX = items[0].offsetLeft;
    const times: number[] = [];
    const widths: number[] = [];
    const xPercents: number[] = [];
    let curIndex = 0;
    const pixelsPerSecond = (config.speed || 1) * 100;
    // some browsers shift by a pixel to accommodate flex layouts, so we snap to
    // percentage points to make things look more natural
    const snap =
      config.snap === false
        ? (v: number) => v
        : gsap.utils.snap(config.snap || 1);

    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the
      // widths/xPercents Arrays to make lookups faster.
      xPercent: (i: number, el: HTMLElement) => {
        const w = (widths[i] = parseFloat(
          gsap.getProperty(el, "width", "px") as string,
        ));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
            (gsap.getProperty(el, "xPercent") as number),
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    const totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        (gsap.getProperty(items[length - 1], "scaleX") as number) +
      (Number(config.paddingRight) || 0);
    for (let i = 0; i < length; i++) {
      const item = items[i];
      const curX = (xPercents[i] / 100) * widths[i];
      const distanceToStart = item.offsetLeft + curX - startX;
      const distanceToLoop =
        distanceToStart +
        widths[i] * (gsap.getProperty(item, "scaleX") as number);
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index: number, vars: gsap.TweenVars = {}) {
      // always go in the shortest direction
      if (Math.abs(index - curIndex) > length / 2) {
        index += index > curIndex ? -length : length;
      }
      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars: gsap.TweenVars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars: gsap.TweenVars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index: number, vars: gsap.TweenVars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete?.();
      tl.reverse();
    }
    return tl;
  }

  useEffect(() => {
    const tl = horizontalLoop(
      itemsRef.current.filter((el): el is HTMLSpanElement => el !== null),
      {
        repeat: -1,
        paddingRight: 30,
        reversed: reverse,
      },
    );

    Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
          factor *= -1;
        }
        gsap
          .timeline({
            defaults: {
              ease: "none",
            },
          })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      },
    });
    return () => {
      tl.kill();
    };
  }, [items, reverse]);

  return (
    <div
      ref={containerRef}
      className={`marquee-text-responsive flex h-20 w-full items-center overflow-hidden font-light whitespace-nowrap uppercase md:h-[100px] ${className} `}
    >
      <div className="flex">
        {items.map((text, index) => (
          <span
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="flex items-center gap-x-32 px-16"
          >
            {text} <Icon icon={icon} className={iconClassName} />{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
