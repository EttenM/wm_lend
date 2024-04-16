import React from "react";
import blockchain from "./icons/blockchain.svg";
import social from "./icons/social.svg";
import friendly from "./icons/friendly.svg";
import game from "./icons/game.svg";
import heart from "./icons/heart.svg";
import safety from "./icons/safety.svg";
import sand from "./icons/sand.svg";
import Image from "next/image";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Social = () => {
  const for_cards = [
    {
      id: 1,
      color: "#00CADE",
      icon: social,
      subtitle: "For crypto degens",
      title: "Social",
      text: "Communicate, find like-minded people. Make deals, share your experience and knowledge.",
    },
    {
      id: 2,
      color: "#CFF501",
      icon: blockchain,
      subtitle: "For social creators",
      title: "Blockchain",
      text: "Wrap everything in a blockchain, it's easier than it seems. Turn your ideas into digital reality.",
    },
  ];
  const pixy_cards = [
    {
      id: 1,
      icon: heart,
      text: "Usability",
    },
    {
      id: 2,
      icon: safety,
      text: "Safety",
    },
    {
      id: 3,
      icon: game,
      text: "Gamification",
    },
    {
      id: 4,
      icon: friendly,
      text: "User friendly",
    },
  ];

  useGSAP(() => {
    gsap.to(".loading_line", {
      width: "100%",
      duration: 1.5,
      ease: "BezierEasing(0.19,1,0.22,1)",
      scrollTrigger: {
        trigger: ".loading",
        start: "center bottom",
      },
      onComplete: () => {
        textTl.play();
      },
    });

    let sand_tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    sand_tl
      .to(".sand", {
        rotate: "180deg",

        duration: 1,
      })
      .to(".sand", {
        rotate: "360deg",

        duration: 1,
      });

    let textTl = gsap.timeline({ repeat: -1 }).pause();
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to(".loading_text", { duration: 1, text: "..." });
    textTl.add(tl);
  });
  return (
    <section className="relative w-full py-[30px] sm:py-[80px]">
      <div className="max-w-[1660px] mx-auto px-6">
        <div className="flex flex-col xs:flex-row gap-[20px]">
          {for_cards.map((card, index) => (
            <div
              className={`${
                card.id % 2 === 0 ? "bg-[#CFF501]" : "bg-[#00CADE]"
              } py-[5%] px-[5%] m:py-[40px] m:px-[40px] flex flex-col xl:flex-row items-center rounded-[25px] gap-[10px] xl:gap-[60px] `}
              key={card.id}
            >
              <div className="w-full xl:w-[256px] h-[160px] s:h-[256px] bg-[#fff] rounded-[25px] flex justify-center items-center flex-shrink-0">
                <Image
                  src={card.icon}
                  alt="card_icon"
                  className="w-auto h-[60%] xs:h-[50%] sm:h-auto object-contain"
                />
              </div>
              <div className="flex flex-col m:py-[20px]">
                {/* <h3 className="text-right xs:text-left text-[14px] xs:text-[18px] ">
                  {card.subtitle}
                </h3> */}
                <h2 className="text-[28px] s:text-[40px] m:text-[60px] m:mb-[20px] font-semibold m:leading-none">
                  {card.title}
                </h2>
                <p className="text-[16px] sm:text-[20px] m:text-[24px]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pixy */}
        <div className="my-[30px] sm:my-[70px] flex flex-col l:flex-row gap-[20px]">
          <div className="w-full l:w-[33%] flex self-start l:mt-[70px]  items-center gap-[20px] flex-1">
            <h3 className=" font-lexend text-[28px] font-semibold">WrapMe</h3>
            <hr className="bg-[#000] h-[2px] w-full" />
          </div>

          <div className="flex flex-wrap m:flex-nowrap gap-[20px] justify-center m:justify-center ">
            {pixy_cards.map((card, index) => (
              <div
                className=" flex flex-col gap-[20px] items-center"
                key={card.id}
              >
                <div
                  className={`w-[140px] h-[140px] xs:w-[195px] xs:h-[195px] xl:w-[256px] xl:h-[256px] flex justify-center items-center border-[2px] border-[#000] 
                rounded-[25px] ${
                  card.id % 2 === 0
                    ? "hover:bg-[#CFF501]"
                    : "hover:bg-[#00CADE]"
                } duration-150 ease-in-out`}
                >
                  <Image
                    src={card.icon}
                    alt="pixy_card"
                    className="w-[calc((1vh+1vw)*6)] h-[calc((1vh+1vw)*6)] m:w-auto m:h-auto object-contain"
                  />
                </div>
                <p className="text-[14px] s:text-[18px] m:text-[28px] text-center">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cooming soon */}
        <div className="loading w-full h-[100px] rounded-[25px]  border-[2px] border-[#000] flex items-center s:justify-between px-[25px] sm:px-[50px] relative overflow-hidden">
          <div className="loading_line absolute top-0 left-0 w-0 h-full bg-[#CFF501] z-[-1]"></div>
          <div className="w-full s:w-auto flex gap-[20px] items-center justify-between s:justify-normal">
            <p className=" font-semibold text-[24px] s:text-[28px] uppercase">
              Cooming soon
            </p>
            <Image src={sand} alt="sand" className="sand" />
          </div>
          <div className=" font-pixy text-[45px] hidden s:block">
            Loading<span className="loading_text"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
