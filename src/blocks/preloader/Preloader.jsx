"use client";

import React, { useLayoutEffect } from "react";
import pacecss from "./preloader.css";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

const Preloader = () => {
  useGSAP(() => {
    let tlLoader = gsap.timeline();

    tlLoader
      .set("body", { overflow: "hidden" })
      .to(".mech", { left: "50%", x: "-50%", duration: 1 })
      .to(".logo", { y: "34vh", ease: "bounce.out", duration: 1 })
      .to(".loading__text", { opacity: 1, duration: 1 })

      .to(".preloader", {
        yPercent: -100,
        duration: 0.75,
      })
      .to("body", { overflow: "auto" })
      .to(".preloader", {
        display: "none",
      });
  });

  return (
    <>
      {/* <div className="preloader "> */}
      <div className="preloader w-full h-[110vh] bg-[#CFF501] rounded-b-[40px]">
        <div className="absolute w-[100%] h-[105vh] bg-[#ffff]  rounded-b-[40px] flex justify-center pt-[60vh]">
          <div className=" relative w-[80%] m:w-[40%] bg-[#CFF501] h-[30px] rounded-[24px]">
            <h1
              className="loading__text opacity-0 absolute top-[15px] l:top-[0] left-[50%] translate-x-[-50%] 
              text-[calc((1vh+1vw)*4)] font-semibold"
            >
              WrapMe
            </h1>
          </div>
          {/* <div className="loading__text">
            <div className=" text-[calc((1vw+1vh)*6)] font-semibold">
              WrapMe
            </div>
          </div> */}
        </div>
        <div className="mech w-max flex flex-col justify-center items-center absolute top-0 left-[-100%] will-change-transform">
          <svg
            className="w-[30%] h-auto"
            viewBox="0 0 96 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70703 134.742V170.745"
              stroke="black"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48.0369 109.773L9.70312 133.823"
              stroke="black"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.4148 134.741C16.4148 130.485 12.9577 127.023 8.70743 127.023C4.45716 127.023 1 130.485 1 134.741C1 138.997 4.45716 142.459 8.70743 142.459C12.9577 142.459 16.4148 138.997 16.4148 134.741Z"
              fill="white"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.3484 134.742C12.3484 132.727 10.7215 131.078 8.68787 131.078C6.65425 131.078 5.02734 132.706 5.02734 134.742C5.02734 136.777 6.65425 138.406 8.68787 138.406C10.7215 138.406 12.3484 136.777 12.3484 134.742Z"
              fill="white"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M87.125 134.742V170.745"
              stroke="black"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M47.793 109.773L86.1064 133.823"
              stroke="black"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M79.4141 134.741C79.4141 130.485 82.8712 127.023 87.1215 127.023C91.3718 127.023 94.8289 130.485 94.8289 134.741C94.8289 138.997 91.3718 142.459 87.1215 142.459C82.8712 142.459 79.4141 138.997 79.4141 134.741Z"
              fill="white"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M83.4609 134.742C83.4609 132.727 85.0878 131.078 87.1215 131.078C89.1551 131.078 90.782 132.706 90.782 134.742C90.782 136.777 89.1551 138.406 87.1215 138.406C85.0878 138.406 83.4609 136.777 83.4609 134.742Z"
              fill="white"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M57.0452 -31H39.0273V88.3509H57.0452V-31Z"
              fill="black"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48.0381 130.382C36.6701 130.382 27.4375 121.158 27.4375 109.754V28.4219H68.6184V109.754C68.6184 121.137 59.406 130.382 48.0177 130.382H48.0381Z"
              fill="#CFF501"
            />
            <path
              d="M73.1523 25.0781H22.9219V37.6832H73.1523V25.0781Z"
              fill="white"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48.0362 126.108C57.0438 126.108 64.3459 118.797 64.3459 109.777C64.3459 100.757 57.0438 93.4453 48.0362 93.4453C39.0286 93.4453 31.7266 100.757 31.7266 109.777C31.7266 118.797 39.0286 126.108 48.0362 126.108Z"
              fill="white"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48.0364 117.515C52.3043 117.515 55.7641 114.051 55.7641 109.777C55.7641 105.504 52.3043 102.039 48.0364 102.039C43.7684 102.039 40.3086 105.504 40.3086 109.777C40.3086 114.051 43.7684 117.515 48.0364 117.515Z"
              fill="black"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            className="logo w-[35%] h-auto mt-[-10%] will-change-transform"
            viewBox="0 0 127 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_620_6)">
              <path
                d="M67.7995 92.4844C55.3383 100.014 42.529 105.42 29.1641 107.464C30.7136 112.16 32.8656 115.138 34.3664 116.783C38.4342 120.049 45.3286 122.269 56.9401 119.379C66.0767 117.103 78.0942 110.993 89.5903 103.145C80.7891 101.14 71.308 94.9374 67.8013 92.4862L67.7995 92.4844Z"
                fill="black"
              />
              <path
                d="M118.288 84.5003C118.754 75.0369 116.226 61.5906 111.809 48.2031C107.144 56.3093 99.4846 62.9354 95.3086 66.1818C99.0679 80.3769 100.601 94.2732 98.5718 107.695C98.5718 107.695 117.02 110.32 118.29 84.5003H118.288Z"
                fill="black"
              />
              <path
                d="M33.0261 11.3589C27.2898 18.4049 21.5985 29.9602 17.2656 42.6326C21.6472 41.1171 29.8224 38.8864 41.1922 38.2905C46.5407 25.1164 53.4459 13.4117 62.8008 4.01409C62.8008 4.01409 49.4359 -8.79887 33.0261 11.3589Z"
                fill="black"
              />
              <path
                d="M102.833 17.6895C93.9056 14.2884 80.2359 12.4206 66.0195 12.3281C68.1481 15.128 71.9813 21.0373 78.5023 33.466C93.148 34.4515 106.818 37.3955 118.949 43.4471C118.949 43.4471 127.285 27.0071 102.833 17.6895Z"
                fill="black"
              />
              <path
                d="M23.6269 65.2317C17.3639 58.7496 12.0731 51.7605 8.0685 44.0938C8.0685 44.0938 -8.46221 52.5877 5.79922 74.277C9.1418 79.361 14.4452 85.0639 20.8471 90.6921L23.6269 65.2317Z"
                fill="black"
              />
              <path
                d="M0.594746 53.25C0.581683 53.2869 0.574219 53.309 0.574219 53.309L0.594746 53.25Z"
                fill="#CFF501"
              />
              <path
                d="M78.5013 33.4619C71.9803 21.0332 68.1452 15.1239 66.0185 12.324C41.2946 12.1621 14.9111 17.3634 8.91142 29.1945L0.59375 53.2514C0.947309 52.2571 6.51046 37.9321 34.7519 34.949C49.8882 33.3498 64.6313 32.528 78.4995 33.4619H78.5013Z"
                fill="#CFF501"
              />
              <path
                d="M29.0902 80.5649C32.1856 65.58 35.9377 51.2248 41.1906 38.2891C29.8207 38.885 21.6456 41.1156 17.264 42.6312C9.20065 66.2132 5.84905 93.6624 15.7018 103.11L36.4337 118.212C35.5823 117.581 23.4206 108.016 29.0902 80.5667V80.5649Z"
                fill="white"
              />
              <path
                d="M39.8343 39.2603C35.3716 50.5381 31.6646 63.6588 28.2084 80.3888C25.8038 92.0259 26.2331 101.916 29.4837 109.782C30.0357 111.12 30.6274 112.29 31.2226 113.308L16.292 102.43C11.9627 98.2376 10.0181 89.8682 10.6693 78.2204C11.2447 67.9263 13.8405 55.5509 17.9822 43.3285C22.5586 41.7845 29.8986 39.9114 39.8362 39.2603M41.1945 38.2891C29.8246 38.885 21.6495 41.1156 17.2679 42.6312C9.20455 66.2132 5.85295 93.6624 15.7057 103.11L36.4377 118.212C35.5862 117.581 23.4245 108.016 29.0941 80.5667C32.1895 65.5817 35.9416 51.2265 41.1945 38.2908V38.2891Z"
                fill="black"
              />
              <path
                d="M36.4336 118.211C36.4649 118.234 36.4833 118.247 36.4833 118.247L36.4336 118.211Z"
                fill="white"
              />
              <path
                d="M36.4336 118.211C36.4649 118.234 36.4833 118.247 36.4833 118.247L36.4336 118.211Z"
                fill="black"
              />
              <path
                d="M111.81 48.2054C104.174 25.0645 90.8907 2.10506 77.6431 0.219494L51.8711 0.0078125C52.939 0.0256009 68.4776 0.722903 80.2424 26.2172C86.4658 39.7061 91.8377 53.0723 95.3102 66.1841C99.4862 62.9377 107.145 56.3115 111.81 48.2054Z"
                fill="#00D9EE"
              />
              <path
                d="M126.843 56.4674L119.534 32.0938C119.826 33.1024 123.686 47.9645 102.381 66.4964C91.0434 76.3583 79.5744 85.3699 67.7969 92.487C71.3036 94.9383 80.7848 101.141 89.5859 103.146C110.069 89.1624 128.898 69.6557 126.843 56.4674Z"
                fill="white"
              />
              <path
                d="M120.696 39.1059L125.961 56.6595C126.838 62.4887 123.387 70.1911 115.975 78.9359C109.416 86.6756 99.9906 94.9222 89.4037 102.187C81.7011 100.328 73.5296 95.294 69.4402 92.5297C79.6447 86.2486 90.3417 78.1567 102.98 67.1635C112.012 59.3064 117.716 51.1611 119.929 42.9518C120.306 41.5572 120.549 40.2711 120.697 39.1059M119.534 32.0938C119.826 33.1024 123.686 47.9645 102.381 66.4964C91.0434 76.3583 79.5744 85.3699 67.7969 92.487C71.3036 94.9383 80.7848 101.141 89.5859 103.146C110.069 89.1624 128.898 69.6557 126.843 56.4674L119.534 32.0938Z"
                fill="black"
              />
              <path
                d="M71.2028 99.6753C57.7928 92.1028 45.1963 84.1123 34.4164 75.1719C33.3503 78.7776 30.5849 89.2567 31.2181 99.0296C51.3547 113.89 76.5729 125.518 88.7094 119.283L109.755 104.61C108.884 105.206 95.8581 113.598 71.2028 99.6753Z"
                fill="#CFF501"
              />
              <path
                d="M34.4171 75.1674C33.2266 74.1802 32.0595 73.184 30.914 72.1719C30.279 74.9433 29.6729 77.7432 29.0903 80.5662C27.8312 86.6658 27.456 91.8743 27.6364 96.3071C28.8089 97.2232 30.0049 98.1304 31.2189 99.0252C30.5857 89.2523 33.351 78.7731 34.4171 75.1674Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_620_6">
                <rect width="127" height="121" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Preloader;
