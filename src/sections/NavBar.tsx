import { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-scroll";

export const NavBar = () => {
  const navRef = useRef(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);
  const socialMediaRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const emailLabelRef = useRef(null);
  const emailRef = useRef(null);

  const tl = useRef<gsap.core.Timeline | null>(null);
  const iconTl = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    const splitEmail = new SplitText(emailRef.current, {
      type: "chars, ",
    });

    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set(
      [linksRef.current, socialMediaRef.current, emailLabelRef.current],
      {
        autoAlpha: 0,
        x: -20,
      },
    );

    tl.current = gsap
      .timeline({
        paused: true,
      })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.Out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2",
      )
      .to(
        socialMediaRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2",
      )
      .to(
        emailLabelRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0,2",
      )
      .from(
        splitEmail.chars,
        {
          autoAlpha: 0,
          y: 20,
          stagger: 0.04,
          duration: 0.03,
          ease: "power2.out",
        },
        "<",
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<",
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current?.reverse();
      iconTl.current?.reverse();
    } else {
      tl.current?.play();
      iconTl.current?.play();
    }
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex h-full w-full flex-col justify-between gap-y-10 bg-black px-10 py-28 text-white/80 uppercase md:left-1/2 md:w-1/2"
      >
        <div className="flex flex-col gap-y-2 text-5xl md:text-6xl lg:text-8xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div
                key={index}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
              >
                <Link
                  className="inline-block cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-white"
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                >
                  {section}
                </Link>
              </div>
            ),
          )}
        </div>

        <div className="flex flex-col flex-wrap justify-between gap-8 md:flex-row">
          <div className="font-light">
            <p ref={emailLabelRef} className="tracking-wider text-white/50">
              E-mail
            </p>
            <p
              ref={emailRef}
              className="text-xl tracking-widest text-pretty lowercase"
            >
              Leonicvarc@gmail.com
            </p>
          </div>

          <div className="font-light" ref={socialMediaRef}>
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap gap-x-2 md:flex-row">
              {socials.map((social, index) => (
                <a
                  key={index}
                  className="cursor-pointer text-sm leading-loose tracking-widest uppercase transition-colors duration-300 hover:text-white"
                  href={social.href}
                  target="_blank"
                >
                  {"{ "} {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div
        className="fixed top-4 right-5 z-50 flex h-14 w-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-black transition-all duration-300 md:right-10 md:h-20 md:w-20"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="origin- block h-0.5 w-8 rounded-full bg-white"
        ></span>
        <span
          ref={bottomLineRef}
          className="origin- block h-0.5 w-8 rounded-full bg-white"
        ></span>
      </div>
    </>
  );
};
