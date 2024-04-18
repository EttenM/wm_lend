"use client";

import { addToWhitelist } from "@/shared/add-to-whitelist";
import { useState } from "react";

export function WhitelistForm() {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState("");

  const mailHandler = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!email) return;
    const res = await addToWhitelist(email);
    console.log(res);
    if (res.ok) {
      setEmail("");
      setNotification(res.message);
    } else {
      setNotification(res.message);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex relative">
      <input
        placeholder="Enter your email address"
        className="bg-[#F6F6F6] placeholder:text-[16px] placeholder:text-[#ABABAB] px-4 py-[17px] s:max-w-[355px] w-full outline-none focus:border-[1px] focus:border-[#00D9EE]"
        onChange={mailHandler}
        value={email}
        type="email"
      />
      <button
        type="submit"
        className="bg-black text-white text-[18px] px-[16px] s:px-[33px] py-[17px] hover:bg-[#00D9EE] hover:text-[#fff] duration-200"
      >
        Subscribe
      </button>
      {notification && <p className="absolute -bottom-8">{notification}</p>}
    </form>
  );
}
