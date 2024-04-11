import styles from "./styles.module.css";
import Image from "next/image";
import BlenderSvg from "./icons/blender.svg";
import left_side from "./icons/left_side.svg";
import right_side from "./icons/right_side.svg";
import hand from "./icons/hand.svg";
import { CustomizationIcon } from "./icons/customization-icon";
import Blender from "./Blender";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export function Tokenize() {
  useGSAP(() => {
    gsap.fromTo(
      ".pill_crane",
      { xPercent: 300 },
      {
        xPercent: 0,
        duration: 1.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".blender",
          start: "+30% bottom",
        },
      }
    );

    gsap.fromTo(
      ".side",
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blender",
          start: "+=70% bottom",
        },
      }
    );
  });

  return (
    <section className="blender w-full mx-auto relative -top-[2px] pb-[100px] l:pb-[200px]">
      <div className="flex text-[28px] m:text-[70px] font-pixy border-y border-black bg-white text-center z-[2] whitespace-nowrap overflow-hidden">
        {Array(8)
          .fill("TOKENIZE-TO-EARN")
          .map((text, index) => (
            <div key={index} className={styles.marquee}>
              {text}
            </div>
          ))}
      </div>
      <CustomizationIcon className="pill_crane relative mx-auto -top-5 z-[-1] w-[121px] h-[163px] sm:w-[240px] sm:h-[274px] m:w-[301px] m:h-[343px] l:w-auto l:h-auto will-change-transform" />

      <div className="relative mt-[50px] xs:mt-0">
        <Blender
          name={
            "relative mx-auto scale-[1.3] xs:scale-[1] m:ml-0 m:w-full h-auto -top-10 sm:-top-20"
          }
        />
        <Image
          src={left_side}
          alt="left_side"
          className="side w-[20%] h-auto absolute top-[60%] translate-y-[-60%] left-[10%] translate-x-[-10%] will-change-transform"
        />
        <Image
          src={right_side}
          alt="right_side"
          className="side w-[20%] h-auto absolute top-[60%] translate-y-[-60%] right-[5%] translate-x-[-5%] will-change-transform"
        />

        <div className="w-full">
          <Image
            src={hand}
            alt="hand"
            className="w-[50%] h-auto object-contain absolute bottom-[-40%] translate-y-[-40%] xs:bottom-[-20%] 
            xs:translate-y-[-20%] right-[12%] translate-x-[-12%] z-[-1]"
          />
        </div>
      </div>
    </section>
  );
}
