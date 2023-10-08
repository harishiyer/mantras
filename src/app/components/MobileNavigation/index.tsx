"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
const MobileNavigation = () => {
  const [showInstallMessage, setinstallMessage] = useState(false);

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

  return (
    <nav className="mobileNavigation lg:hidden fixed z-50 bottom-2 dark:bg-slate-50 bg-slate-900 w-[96%] left-[2%] rounded-2xl">
      <div className="max-w-md flex mx-auto justify-evenly">
        <div className="py-3 px-3 w-1/2 text-slate-200 dark:text-slate-900 text-xl">
          <Link className="flex flex-col items-center gap-1" href={"/"}>
            <AiFillHome />
            <span className="text-xs">Home</span>
          </Link>
        </div>
        <div className="py-3 px-3 w-1/2 text-slate-50 dark:text-slate-900 text-xl">
          <Link
            className="flex flex-col items-center gap-1 select-none"
            href={"/"}
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
