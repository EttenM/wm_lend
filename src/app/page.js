"use client";
import { Hero } from "@/blocks/hero";
import { Conveyor } from "@/blocks/conveyor";
import { Steps } from "@/blocks/steps";
import { Tokenize } from "@/blocks/tokenize";
import { Tokens } from "@/blocks/tokens";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.fromTo(
      ".blen_wrapp",
      {},
      {
        scrollTrigger: {
          trigger: ".blen_wrapp",
          start: "bottom bottom",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      }
    );
  });
  return (
    <main>
      <Hero />
      <div className="blen_wrapp">
        <Conveyor />
        <Tokenize />
      </div>

      <Tokens />
      <Steps />
    </main>
  );
}
