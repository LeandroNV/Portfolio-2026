import { useGSAP } from "@gsap/react";
import { AnimatedHeaderSection } from "../components/AnimatedHeaderSection";
import { Marquee } from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const text = `Got a question, how or project Idea?
    WE’D love to hear from you and discus further!`;

const items = [
  "just imagine, I code",
  "just imagine, I code",
  "just imagine, I code",
  "just imagine, I code",
  "just imagine, I code",
];

export const Contact = () => {
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-between bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subtitle={"You Dream It, I Code It"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="mb-10 flex px-10 text-[26px] leading-none font-light text-white uppercase lg:text-[32px]">
          <div className="flex w-full flex-col gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="my-2 h-px w-full bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                Leonicvarc@gmail.com
              </p>
            </div>

            <div className="social-link">
              <h2>Phone</h2>
              <div className="my-2 h-px w-full bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                +57 320 279 7281
              </p>
            </div>

            <div className="social-link">
              <h2>Social Media</h2>
              <div className="my-2 h-px w-full bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-widest uppercase transition-colors duration-200 hover:text-white/80 md:text-sm"
                    target="_blank"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee items={items} className="bg-transparent text-white" />
    </section>
  );
};
