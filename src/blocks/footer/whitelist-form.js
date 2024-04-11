"use client";

import { useState } from "react";

export function WhitelistForm() {
  const [mail, setMail] = useState("");

  const mailHandler = (event) => {
    setMail(event.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!mail) return;
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex">
      <input
        placeholder="Enter your email address"
        className="bg-[#F6F6F6] placeholder:text-[16px] placeholder:text-[#ABABAB] px-4 py-[17px] s:max-w-[355px] w-full outline-none focus:border-[1px] focus:border-[#00D9EE]"
        onChange={mailHandler}
        value={mail}
        type="email"
      />
      <button
        type="submit"
        className="bg-black text-white text-[18px] px-[16px] s:px-[33px] py-[17px] hover:bg-[#00D9EE] hover:text-[#fff] duration-200"
      >
        Subscribe
      </button>
    </form>
  );
}
