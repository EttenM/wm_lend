import Link from "next/link";
import { DiscordIcon } from "./icons/discord-icon";
import { MailIcon } from "./icons/mail-icon";
import { MediumIcon } from "./icons/medium-icon";
import { TelegramIcon } from "./icons/telegram-icon";
import { XIcon } from "./icons/x-icon";

export function SocialIconLinks() {
  return (
    <div className="flex items-center flex-wrap xxs:flex-nowrap  gap-4">
      <Link
        href="/"
        className=" hover:opacity-70 duration-300 ease-in-out hover:invert-[50]"
      >
        <TelegramIcon />
      </Link>
      <Link
        href="/"
        className=" hover:opacity-70 duration-300 ease-in-out hover:invert-[50]"
      >
        <XIcon />
      </Link>
      <Link
        href="/"
        className=" hover:opacity-70 duration-300 ease-in-out hover:invert-[50] "
      >
        <DiscordIcon />
      </Link>
      <Link
        href="/"
        className=" hover:opacity-70 duration-300 ease-in-out hover:invert-[50]"
      >
        <MediumIcon />
      </Link>
      <Link
        href="/"
        className=" hover:opacity-70 duration-300 ease-in-out hover:invert-[50]"
      >
        <MailIcon />
      </Link>
    </div>
  );
}
