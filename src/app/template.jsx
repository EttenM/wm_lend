"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Template({ children }) {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".swap", {
        scaleY: 0,
        duration: 0,
      }).to(".swap", {
        scaleY: 0,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="">
      {children}
      <div className="swap absolute top-0 left-0 w-full h-screen bg-[#ffff] origin-top z-[900] rounded-b-[40px]">
        <div className="absolute w-[90%] h-[100%] bg-[#cff501]  rounded-b-[40px]"></div>
      </div>
    </div>
  );
}
