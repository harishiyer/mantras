"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaThList } from "react-icons/fa";

const MobileNavigation = () => {
  const [showInstallMessage, setinstallMessage] = useState(false);

  useEffect(() => {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      setinstallMessage(true);
    }
  }, []);

  return (
    <nav className="mobileNavigation lg:hidden fixed z-50 bottom-4 dark:bg-slate-50 bg-slate-900 w-[96%] left-[2%] rounded-2xl">
      <div className="max-w-md flex mx-auto justify-evenly">
        <div className="py-3 px-3 w-1/3 text-slate-200 dark:text-slate-900 text-xl">
          <Link className="flex flex-col items-center gap-1" href={"/"}>
            <AiFillHome />
            <span className="text-xs">Home</span>
          </Link>
        </div>
        <div className="py-3 px-3 w-1/3 text-slate-50 dark:text-slate-900 text-xl">
          <Link
            className="flex flex-col text-lg items-center gap-1 select-none"
            href={"/browse"}
          >
            <FaThList />
            <span className="text-xs">Browse</span>
          </Link>
        </div>
        <div className="py-3 px-3 w-1/3 text-slate-50 dark:text-slate-900 text-xl">
          <Link
            className="flex flex-col items-center gap-1 select-none"
            href={"/settings"}
          >
            <AiFillSetting />
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
