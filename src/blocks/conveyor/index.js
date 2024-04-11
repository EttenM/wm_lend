import Image from "next/image";

import { ShadowBackPattern } from "./shadow-back-pattern";
import { TopCraneIcon } from "./icons/top-crane-icon";
import { BoardInfo } from "./board-info";
import ConveyorSvg from "./icons/conveyor.svg";
import BlueCraneSvg from "./icons/blue-crane.svg";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function Conveyor() {
  useGSAP(() => {
    gsap.fromTo(
      ".top_crane",
      { xPercent: -200 },
      {
        xPercent: 0,
        duration: 1.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".conveyor",
          start: "center bottom",
        },
      }
    );
  });
  return (
    <section className="conveyor relative w-full max-w-[1920px] mx-auto min-h-[900px] m:min-h-[1080px] overflow-hidden">
      <RailLine />
      <TopCraneIcon className="top_crane absolute top-0 left-[-50px] s:left-[10%] m:left-[30%] z-[1] max-h-[443px] m:max-h-full will-change-transform" />
      <BoardInfo />
      <ShadowBackPattern />
      <Image
        src={ConveyorSvg}
        className="absolute bottom-0 object-cover m:object-contain w-full h-full m:w-auto m:h-auto max-h-[214px] s:max-h-[250px] m:max-h-full -right-11 m:right-0"
        alt="conveyor-image"
      />
      <Image
        src={BlueCraneSvg}
        className="absolute bottom-0 -left-[140px] s:left-0 max-w-[300px] m:max-w-[350px] l:max-w-[450px] xl:max-w-full"
        alt="crane-image"
      />
    </section>
  );
}

export function RailLine() {
  return (
    <>
      <div className="w-full h-[5px] bg-black" />
      <div className="border-b-[2px] border-black border-dashed" />
    </>
  );
}
