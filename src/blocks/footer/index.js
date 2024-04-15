import Link from "next/link";
import { SoonIcon } from "./icons/soon-icon";
import { SocialIconLinks } from "./social-icon-links";
import { WhitelistForm } from "./whitelist-form";
import { WrapMeIcon } from "../header/icons/wrapme-icon";

export function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 py-[40px] xs:py-[80px]  max-w-[1660px] mx-auto px-6 gap-10 border-t-[2px] border-t-[#000]">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2 s:gap-4">
          <WrapMeIcon className="max-w-[40px] s:max-w-full" />
          <h2 className="font-lexend text-[32px] m:text-[28px] font-semibold tracking-[-.08em]">
            WrapMe
          </h2>
        </div>

        <SocialIconLinks />
        <WhitelistForm />
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:max-w-[594px] w-full sm:justify-items-end sm:ml-auto gap-y-10">
        <div className="flex flex-col items-start gap-3 col-span-2 xs:col-span-1">
          <ColumnTitle title="Get started" />
          <button className="footer_link flex items-center justify-center gap-2 ">
            App
            <SoonIcon />
          </button>
        </div>
        <div className="flex flex-col items-start gap-3">
          <ColumnTitle title="Community" />
          <Link href="/" className="footer_link">
            Telegram
          </Link>
          <Link href="/" className="footer_link">
            Twitter
          </Link>
          <Link href="/" className="footer_link">
            Medium
          </Link>
          <Link href="/" className="footer_link">
            Discord
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <ColumnTitle title="Resourses" />
          <Link href="/" className="footer_link">
            Docs
          </Link>
          <Link href="/" className="footer_link">
            Privacy policy
          </Link>
          <Link href="/" className="footer_link">
            Terms of use
          </Link>
          <Link href="/" className="footer_link">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function ColumnTitle({ title }) {
  return (
    <>
      <h3 className="text-[16px] font-semibold">{title}</h3>
      <div className="w-[36px] h-[1px] bg-black" />
    </>
  );
}
