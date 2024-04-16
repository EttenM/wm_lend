import styles from "./styles.module.css";
import { HeadIcon } from "./icons/head-icon";
import { useEffect, useRef, useState } from "react";
import nail from "./icons/nail.svg";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function BoardInfo() {
  const board = useRef();
  useGSAP(() => {
    gsap.fromTo(
      board.current,
      { yPercent: -200 },
      {
        yPercent: 0,
        duration: 2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".conveyor",
          start: "+=20% center",
        },
      }
    );
  });
  return (
    <div
      className="relative max-w-[70%] xs:max-w-[50%] sm:max-w-[46%] xl:max-w-[calc((1vh+1vw)*31)] ml-auto xl:mb-[calc((1vh+1vw)*25)] z-[1] mr-[20px] xl:mr-[calc((1vh+1vw)*5)] 
    flex flex-col will-change-transform mt-[-5px]"
      ref={board}
    >
      <div className=" border-x-[7px] border-[#000] w-[88%] s:w-[92%]  h-[185px] sm:h-[254px] mx-auto"></div>
      <div className="relative bg-[#CFF501] border-[2px] border-[#000] rounded-[25px] pl-[30px] pr-[15px] m:px-[50px] py-[25px] m:py-[45px] mt-[-3px]">
        <h2
          className="text-[calc((1vh+1vw)*1)] xxs:text-[16px] m:text-[20px] l:text-[24px] xl:text-[calc((1vh+1vw)*1)]  leading-[17px] 
        s:leading-[20px] m:leading-[28px] l:leading-[34px] xl:leading-[calc((1vh+1vw)*1.1)]"
        >
          <span className="font-bold">WrapMe</span> is a socially oriented
          platform for tokenization, interaction and trading of digital assets.
          A gateway between Web2 and Web3 world, aimed at mass adoption.
        </h2>
        <Image
          src={nail}
          alt="nail"
          className="absolute w-[4%] s:w-[2%] h-auto left-[15px] m:left-[30px]  top-[15px]"
        />
        <Image
          src={nail}
          alt="nail"
          className="absolute w-[4%] s:w-[2%] h-auto right-[15px] m:right-[30px]  top-[15px]"
        />{" "}
        <Image
          src={nail}
          alt="nail"
          className="absolute w-[4%] s:w-[2%] h-auto left-[15px] m:left-[30px]  bottom-[15px]"
        />{" "}
        <Image
          src={nail}
          alt="nail"
          className="absolute w-[4%] s:w-[2%] h-auto right-[15px] m:right-[30px]  bottom-[15px]"
        />
      </div>
    </div>
  );
}
