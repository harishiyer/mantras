"use client";

import { ThemeSwitcher } from "@/app/utility/themeSwitcher";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const profileClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setShowLoginModal((prevShowLoginModal) => {
      return !prevShowLoginModal;
    });
  };

  const loginClick = (event: React.SyntheticEvent) => {
    setShowLoginModal((prevShowLoginModal) => {
      return !prevShowLoginModal;
    });
  };

  return (
    <header className="flex gap-5 items-center content-center w-full py-6 px-4 text-slate-900 text-right dark:text-white">
      <div className="ml-auto flex items-center gap-4 lg:gap-6">
        <Link href={"/"} className="text-sm leading-[1] hidden lg:inline-block">
          Home
        </Link>
        <Link
          href={"/browse"}
          className="text-sm leading-[1] hidden lg:inline-block"
        >
          Browse
        </Link>
        <ThemeSwitcher />
        <div className="text-lg relative">
          <Link onClick={profileClick} href={"#"}>
            <FaUserCircle />
          </Link>
          <div
            className={`${
              showLoginModal ? "opacity-100" : "opacity-0"
            } absolute rounded-sm py-5 px-2 w-48 bg-slate-900 dark:bg-slate-100 right-0 top-7 transition-all ease-linear duration-75`}
          >
            <div className="h-0 absolute -top-[6px] right-[3px] w-0 border-x-[6px] border-x-transparent border-b-[8px] border-b-slate-900 dark:border-b-slate-100"></div>
            <Link
              className="block text-sm rounded-xl text-center py-2 px-2 mx-3 bg-slate-50 dark:bg-slate-900"
              href={"/userlogin"}
              onClick={loginClick}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
