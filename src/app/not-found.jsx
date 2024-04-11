import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center  gap-[40px] ">
      <h1 href="/" className="text-[36px] text-main-color text-center">
        Page not found
      </h1>
      <Link href="/" className="text-[36px] text-main-color text-center">
        Home
      </Link>
    </section>
  );
};

export default NotFound;
