import Link from "next/link";
import { SoonIcon } from "./icons/soon-icon";
import { SocialIconLinks } from "./social-icon-links";
import { WhitelistForm } from "./whitelist-form";

export function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2  pt-24 pb-14 max-w-[1660px] mx-auto px-6 gap-10">
      <div className="flex flex-col gap-8">
        <h2 className="font-lexend text-[28px] font-semibold tracking-[-.08em]">
          WrapMe
        </h2>
        <SocialIconLinks />
        <WhitelistForm />
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:max-w-[594px] w-full sm:justify-items-end sm:ml-auto gap-y-10">
        <div className="flex flex-col items-start gap-3 col-span-2 xs:col-span-1">
          <ColumnTitle title="Get started" />
          <button className="flex items-center justify-center gap-2 ">
            App
            <SoonIcon />
          </button>
        </div>
        <div className="flex flex-col items-start gap-3">
          <ColumnTitle title="Community" />
          <Link href="/">Telegram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Medium</Link>
          <Link href="/">Discord</Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <ColumnTitle title="Resourses" />
          <Link href="/">Docs</Link>
          <Link href="/">Privacy policy</Link>
          <Link href="/">Terms of use</Link>
          <Link href="/">Disclaimer</Link>
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
