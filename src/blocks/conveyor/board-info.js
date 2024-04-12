import styles from "./styles.module.css";
import { HeadIcon } from "./icons/head-icon";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function BoardInfo() {
  const [height, setHeight] = useState(0);
  const [name, setName] = useState("");
  const inner = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    const color = getComputedStyle(inner.current).getPropertyValue("height");
    parent.current.style.setProperty("height", color);
    document.addEventListener("resize", () => {
      const color = getComputedStyle(inner.current).getPropertyValue("height");
      parent.current.style.setProperty("height", color);
    });
    return () => window.removeEventListener("resize", () => {});
  });
  // useGSAP(() => {
  //   // gsap.set(parent.current, { height: height });
  //   const color = getComputedStyle(inner.current).getPropertyValue("height");
  //   parent.current.style.setProperty("height", color);
  // }, [height]);

  return (
    <div className="relative max-w-[60%] xs:max-w-[50%] sm:max-w-[46%] xl:max-w-[calc((1vh+1vw)*31)] ml-auto  mt-[154px] sm:mt-[254px] xl:mb-[calc((1vh+1vw)*25)] z-[1] mr-[30px] xl:mr-[calc((1vh+1vw)*5)]">
      <div className="w-full z-[6] relative top-[9px] m:top-[10px]">
        <HeadIcon className="mx-auto max-w-[100px] m:max-w-full" />
      </div>
      <div
        className={`relative w-full xs:min-h-[200px] s:min-h-[220px] m:min-h-[283px]`}
        ref={parent}
      >
        <div
          className={`${styles.clipInner} flex items-center justify-center`}
          ref={inner}
        >
          <h2 className="text-[calc((1vh+1vw)*1)] xxs:text-[16px] m:text-[20px] l:text-[24px] xl:text-[calc((1vh+1vw)*1)] px-4 m:px-12 py-6 s:py-14 xl:py-18 leading-[17px] s:leading-[20px] m:leading-[28px] l:leading-[34px] xl:leading-[calc((1vh+1vw)*1.1)]">
            <span className="font-bold">WrapMe</span> is social orienteered
            platform for tokenization and trading of social, physical, and
            digital assets. Wrap everything you want, place it on the market and
            share it with your friends. Your portal into web3 world.
          </h2>
        </div>
        <div className={`${styles.clipBack}`} />
      </div>
    </div>
  );
}
