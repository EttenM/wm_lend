import Image from "next/image";
import HeadImage from "./icons/head-svg.svg";
import StepsDImage from "./icons/steps-d.svg";
import top_img from "./icons/top.svg";
import bottom_img from "./icons/bottom.svg";
import StepsMImage from "./icons/steps-m.svg";
import background from "./icons/background.svg";
import Step from "./Step";

export function Steps() {
  return (
    <section className="relative w-full mx-auto  bg-[#fff] rounded-t-[50px] py-[30px] xs:py-[70px] overflow-hidden border-[2px] border-[#000] mt-[-70px]">
      <Image
        src={top_img}
        alt="head-image"
        className="w-full h-auto object-contain mx-auto absolute top-0 left-0 right-0"
      />
      <Image
        src={bottom_img}
        alt="head-image"
        className="w-full h-auto object-contain mx-auto absolute bottom-0 left-0"
      />
      <div className="max-w-[1535px] mx-auto relative px-6 z-[2]">
        <h2
          className="text-[20px] xs:text-[24px] sm:text-[30px] m:leading-[50px] l:text-[40px] text-center font-semibold max-w-[90%] s:max-w-[70%] 
        sm:max-w-[60%] l:max-w-[696px] mx-auto leading-[34px] l:leading-[61px] mt-[2vw]"
        >
          <span className="accent">Web3</span> WrapMe module
        </h2>

        <Image
          src={StepsMImage}
          className="mx-auto block sm:hidden mt-10"
          alt="steps-d-image"
        />

        <Image
          src={StepsDImage}
          alt="steps-m-image"
          className="mx-auto hidden sm:block mt-[10vh]"
        />
      </div>
    </section>
  );
}
