"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "./style.module.css";
import { WrapMeIcon } from "./icons/wrapme-icon";
import { DotsIcon } from "./icons/dots-icon";
import { useEffect, useState } from "react";
import arrow from "./icons/Arrow.svg";

import gsap from "gsap/gsap-core";
import CloseIcon from "./icons/close";
import { useGSAP } from "@gsap/react";
import { SoonIcon } from "../footer/icons/soon-icon";

gsap.registerPlugin(useGSAP);

export function Header() {
  const menu = [
    {
      id: 1,
      title: "Get Started",
      links: [{ link: "App", href: "/", soon: true }],
    },
    {
      id: 2,
      title: "Community",
      links: ["Telegram", "Twitter", "Medium", "Discord"],
      links: [
        { link: "Telegram", target: "_blank", href: "/" },
        { link: "Twitter", target: "_blank", href: "/" },
        { link: "Medium", target: "_blank", href: "/" },
        { link: "Discord", target: "_blank", href: "/" },
      ],
    },
    {
      id: 3,
      title: "Resourses",
      links: [
        { link: "Docs", target: "_blank", href: "/" },
        { link: "Privacy Policy", href: "/" },
        { link: "Terms of Use", href: "/" },
      ],
    },
  ];

  const [isActiveMenu, setisActiveMenu] = useState(false);
  const [toggleState, setToggleState] = useState(-1);

  const toggleTab = (index) => {
    if (window.innerWidth <= 1000) {
      if (index === toggleState) {
        setToggleState(0);
      } else {
        setToggleState(index);
      }
    }
  };

  const toggleBurger = () => {
    let state = isActiveMenu;
    setisActiveMenu(!state);
    toggleTab(0);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setisActiveMenu(false);
      }
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <header
      className={`header ${
        isActiveMenu
          ? `fixed m-auto left-0 right-0 top-0 w-[100%] h-[100vh] bg-[#fff] z-[100] overflow-auto py-5 px-6`
          : "absolute top-0 left-0 right-0 flex items-center justify-between mx-auto max-w-[100%] xl:max-w-[89%] py-5 px-6  z-[3]"
      }
      `}
    >
      <Link href="/" className="flex items-center gap-2 s:gap-4 z-[1]">
        <WrapMeIcon className="max-w-[40px] s:w-full shrink-0" />
        <h2 className="font-lexend text-[20px] xs:text-[32px] m:text-[28px] xl:text-[calc((1vh+1vw)*1)] font-semibold tracking-[-.08em]">
          WrapMe
        </h2>
      </Link>
      <nav>
        <ul
          className={`${
            isActiveMenu ? "flex flex-col gap-[30px] mt-[80px] " : "hidden"
          } m:flex`}
        >
          {menu.map((item, index) => (
            <li
              className={`menu_nav w-full m:w-[180px] xl:w-[calc((1vh+1vw)*7)] ${
                toggleState === item.id ? "!bg-[#cff501]" : ""
              }`}
              key={item.id}
              onClick={() => {
                toggleTab(item.id);
              }}
            >
              <div className="menu_nav__title text-[24px] m:text-[16px] xl:text-[calc((1vh+1vw)*0.6)] font-semibold flex justify-between items-center">
                <span>{item.title}</span>
                <Image
                  src={arrow}
                  alt="arrow"
                  className={`arrow ${
                    toggleState === item.id ? "rotate-[90deg]" : "rotate-[0deg]"
                  } duration-150`}
                />
              </div>
              <ul
                className={`dropdown_menu w-full m:w-[180px] xl:w-[calc((1vh+1vw)*7)] ${
                  toggleState === item.id ? "!flex" : ""
                }`}
              >
                {item.links.map((link_item, index) => (
                  <li className="menu_link" key={index}>
                    <Link
                      className="flex items-center gap-[5px] xl:text-[calc((1vh+1vw)*0.6)]"
                      href={link_item.href}
                      target={link_item.target}
                      onClick={() => {
                        setisActiveMenu(false);
                      }}
                    >
                      {link_item.link}
                      {link_item.soon ? <SoonIcon /> : ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden m:block relative min-w-[197px] w-fit min-h-[60px] h-fit">
        <button
          className={`${styles.clipInner} font-semibold text-[24px] hover:bg-[#00D9EE] hover:text-[#fff] duration-200`}
        >
          Get Started
        </button>
        <div className={styles.clipBack} />
      </div>
      <button
        className={`${
          isActiveMenu
            ? "active_burger absolute top-[28px] right-[24px]"
            : "relative"
        } block m:hidden z-[3]`}
        onClick={() => {
          toggleBurger();
        }}
      >
        {isActiveMenu ? (
          <CloseIcon className={"w-[24px] xs:w-auto"} />
        ) : (
          <DotsIcon className={"w-[24px] xs:w-auto"} />
        )}
      </button>
    </header>
  );
}
