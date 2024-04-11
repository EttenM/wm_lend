import Image from "next/image";
import styles from "./styles.module.scss";
import CharacterWithTokens from "./icons/character-with-tokens.svg";
import CharacterWithTokensM from "./icons/character-with-tokens-m.svg";
import CustomToken from "./icons/custom-token.svg";
import ContentToken from "./icons/content-token.svg";
import ProductToken from "./icons/product-token.svg";
import FanTokenOne from "./icons/fan-token-1.svg";
import FanTokenTwo from "./icons/fan-token-2.svg";
import { HeadIcon } from "./icons/head-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function Tokens() {
  useGSAP(() => {
    gsap.fromTo(
      ".character",
      { yPercent: -100 },
      {
        yPercent: 0,

        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sda",
          start: "bottom bottom",
        },
      }
    );
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card, index) => {
      let xPos;
      let delay;
      if (index % 2 == 0) {
        xPos = -50;
        delay = 0;
      } else {
        xPos = 50;
        delay = 0.5;
      }
      gsap.fromTo(
        card,
        { xPercent: xPos, opacity: 0 },
        {
          delay: delay,
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "+=20% bottom",
          },
        }
      );
    });

    gsap.fromTo(
      ".tokens",
      {},
      {
        scrollTrigger: {
          trigger: ".tokens",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      }
    );
  });
  return (
    <section className="tokens relative  bg-[#CFF501] pb-[70px] rounded-t-[50px] border-[2px] border-[#000] border-b-0">
      <div className="w-full z-[6] relative -top-[16px]">
        <HeadIcon className="mx-auto max-w-[200px] m:max-w-full" />
      </div>
      <div className="max-w-[1660px] mx-auto px-6 overflow-hidden mb-4 m:mb-8 mt-[-16px]">
        <div className="sda relative w-full min-h-[320px] sm:min-h-[220px] m:min-h-[300px]">
          <h3 className="text-[16px] m:text-[24px] xl:text-[28px] sm:max-w-[50%] l:max-w-[47%] left-6 xl:left-[4%] top-5 m:top-[60px] m:leading-[34px] absolute z-[10] pr-6">
            <span className="font-semibold">Social Digital Assets (SDA)</span>{" "}
            are a type of tokenized assets issued on the WrapMe platform,
            representing real-world assets in the field of social activity and
            users interaction. Which allow users to capture anything in the
            blockchain.
          </h3>
          <Image
            src={CharacterWithTokens}
            alt="Character with tokens"
            className="character absolute top-0 right-0 z-[1] max-w-[480px] l:max-w-full hidden sm:block will-change-transform"
          />
          <Image
            src={CharacterWithTokensM}
            alt="Character with tokens"
            className="absolute bottom-[-10%] right-0 z-[1] max-w-[360px] xs:max-w-[480px] sm:hidden will-change-transform"
          />
        </div>
        <div className="grid grid-cols-1 s:grid-cols-2 mt-[32px] z-[0] gap-5">
          <div className="card relative w-full min-h-[390px] xs:min-h-[500px] s:min-h-[420px] m:min-h-[580px] l:min-h-[660px] xl:min-h-[754px] h-fit will-change-transform">
            <div className={styles.clipInnerOne}>
              <Image
                src={ContentToken}
                alt="Content token"
                className="absolute top-0"
              />
              <h3 className="text-[16px] m:text-[24px] xl:text-[28px] s:max-w-[688px] mb-[10%] px-5 z-[0] m:leading-[34px]">
                <span className="accent font-semibold">Content token</span>{" "}
                provides an opportunity to tokenize the results of your
                intellectual activities in various fields, such as education,
                art, science, etc.
              </h3>
            </div>
            <div className={styles.clipBackOne} />
          </div>
          <div className="card relative w-full min-h-[390px] xs:min-h-[500px] s:min-h-[420px] m:min-h-[580px] l:min-h-[660px] xl:min-h-[754px] h-fit will-change-transform">
            <div className={styles.clipInnerTwo}>
              <Image
                src={ProductToken}
                alt="Product token"
                className="absolute right-0 top-0"
              />
              <h3 className="text-[16px] m:text-[24px] xl:text-[28px] s:max-w-[688px] mb-[10%] px-5 z-[0] m:leading-[34px]">
                Tokenize your digital assets rights, and services with the
                Digital{" "}
                <span className="accent font-semibold">Product Token.</span>{" "}
                Post ads, engage in social activities, provide services, make
                deals, and more.
              </h3>
            </div>
            <div className={styles.clipBackTwo} />
          </div>
          <div className="card relative w-full min-h-[390px] xs:min-h-[500px] s:min-h-[420px] m:min-h-[580px] l:min-h-[660px] xl:min-h-[754px] h-fit will-change-transform">
            <div className={styles.clipInnerTwo}>
              <Image
                src={CustomToken}
                alt="Custom token"
                className="absolute top-0"
              />
              <h3 className="text-[16px] m:text-[24px] xl:text-[28px] s:max-w-[688px] mb-[10%] px-5 z-[0] m:leading-[34px]">
                <span className="accent font-semibold">Custom</span> setups
                allows you to turn anything into a{" "}
                <span className="accent font-semibold">token!</span> Wrap any
                digital or physical item, assign a unique utility, trade, and
                have fun!
              </h3>
            </div>
            <div className={styles.clipBackTwo} />
          </div>
          <div className="card relative w-full min-h-[390px] xs:min-h-[500px] s:min-h-[420px] m:min-h-[580px] l:min-h-[660px] xl:min-h-[754px] h-fit will-change-transform">
            <Swiper
              className={styles.clipInnerOne}
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
              pagination={{
                clickable: true,
                type: "bullets",
                el: ".slider-pags",
                bulletActiveClass: styles.activePag,
                renderBullet: (index, className) => {
                  return `<svg class="${className} ${styles.pag} width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.83105V12.6896L11.8585 14.8311H1V3.97254L3.14149 1.83105H14Z" stroke="black" stroke-width="2"/>
</svg>
`;
                },
              }}
              modules={[Pagination, EffectCreative]}
            >
              <SwiperSlide>
                <div className="flex flex-col justify-end items-center h-full bg-[#fff]">
                  <Image
                    src={FanTokenOne}
                    alt="Fan token one"
                    className="absolute top-0"
                  />
                  <h3 className="text-[16px] m:text-[24px] xl:text-[28px] s:max-w-[688px] mb-[10%] px-5 z-[0] m:leading-[34px]">
                    Are you an influencer? Start interactingwith your audience
                    on a new level, create{" "}
                    <span className="accent font-semibold">Fan token</span> and
                    share unique content.
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-end items-center h-full bg-[#fff]">
                  <Image
                    src={FanTokenTwo}
                    alt="Fan token two"
                    className="absolute top-0"
                  />
                  <h3 className="text-[16px] m:text-[24px] xl:text-[28px] s:max-w-[688px] mb-[10%] px-5 z-[0] m:leading-[34px]">
                    Are you a fan? Get a unique opportunity to connect with your
                    favorite artist directly, hold{" "}
                    <span className="accent font-semibold">Fan tokens</span>,
                    and become part of an exclusive community.
                  </h3>
                </div>
              </SwiperSlide>
              <div
                className={`slider-pags absolute bottom-4 m:bottom-8 z-[2] left-0 right-0 flex gap-2 m:gap-3 justify-center`}
              ></div>
            </Swiper>
            <div className={styles.clipBackOne} />
          </div>
        </div>
      </div>
    </section>
  );
}
