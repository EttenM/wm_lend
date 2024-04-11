import Image from "next/image";
import ShadowPatternD from "./icons/shadow-pattern-d.svg";
import ShadowPatternM from "./icons/shadow-pattern-m.svg";

export function ShadowBackPattern() {
  return (
    <div className="absolute top-[60px] xs:top-[140px] z-[-2] w-full h-[60%] xs:h-[calc((1vh+1vw)*20)]">
      <Image
        src={ShadowPatternD}
        className="object-cover l:object-contain w-full h-auto hidden xs:block"
        fill
        alt="back pattern d"
      />
      <Image
        src={ShadowPatternM}
        className="object-contain w-full h-full block xs:hidden"
        fill
        alt="back pattern m"
      />
    </div>
  );
}
