import styles from "./style.module.scss";
import Image from "next/image";
import HeroSvg from "./icons/hero.svg";
import GearsSvg from "./icons/gears.svg";
import GearsMSvg from "./icons/gears-m.svg";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export function Hero() {
  const text = useRef();
  const hero_image = useRef();
  const words = ["Socials", "Ideas", "Assets"];

  useGSAP(() => {
    gsap.fromTo(
      ".gears",
      { yPercent: -100, opacity: 0 },
      {
        delay: 4,
        duration: 1,
        yPercent: 0,
        opacity: 1,
        onComplete: () => {
          textTl.play();
        },
      }
    );

    let textTl = gsap.timeline({ repeat: -1 }).pause();
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(text.current, { duration: 1, text: word });
      textTl.add(tl);

      hero_image.current.addEventListener("mousemove", (e) => {
        let moveX = (e.clientX / window.innerWidth) * 50;
        let moveY = (e.clientY / window.innerHeight) * 25;

        gsap.to(".hero_image", {
          x: -moveX,
          y: -moveY,

          ease: "power1",
          duration: 0.5,
        });
      });
    });
  });

  return (
    <section className="relative w-full m:min-h-screen mx-auto flex justify-center m:items-center px-6 pb-8 flex-col m:flex-row mt-[60px] xs:mt-[100px]">
      <div className="flex flex-col  max-w-[90%] xs:max-w-[65%] m:max-w-[460px] l:max-w-[540px] xl:max-w-[40%] m:min-w-[460px] l:min-w-[540px] xl:min-w-[648px] mt-[50px] m:mt-0 z-[3]">
        <h1 className="text-[34px] s:text-[46px] m:text-[52px] l:text-[64px] xl:text-[calc((1vh+1vw)*3)] font-semibold leading-[130%] mb-6 sm:mb-9 m:mb-5 xl:mb-11">
          Touch the blockchain world in few clicks
        </h1>
        <div className="mb-8 sm:mb-12 m:mb-5 xl:mb-16 flex items-center gap-2">
          <h2 className="text-[24px] l:text-[28px] xl:text-[39px]">
            Tokenize your{" "}
            <span ref={text} className="accent font-semibold "></span>
          </h2>
          <div
            className={`w-[1px] h-[33px] xl:w-[2px] xl:h-[62px] bg-black ${styles.blinkCursor}`}
          />
        </div>
        <button
          className={`${styles.clipInner} text-white text-[18px] sm:text-[24px] xl:text-[28px] min-w-[127px] sm:min-w-[173px] w-fit min-h-[57px] sm:min-h-[77px] h-fit 
          hover:bg-[#00D9EE] hover:text-[#000] duration-200`}
        >
          Explore
        </button>
      </div>
      <div className="xl:w-[50%]">
        <Image
          src={HeroSvg}
          alt="hero-image"
          className="hero_image w-full h-auto object-contain will-change-transform"
          ref={hero_image}
        />
      </div>
      <Image
        src={GearsSvg}
        alt="gears-hero-image"
        className="gears absolute top-[-40px] l:top-[-120px] left-[7%] hidden m:block"
      />
      <Image
        src={GearsMSvg}
        alt="gears-hero-image-m"
        className="w-[30%] gears absolute m:hidden right-4 top-[-20px] z-[2]"
      />
    </section>
  );
}
