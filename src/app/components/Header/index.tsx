"use client";

import { useAuthContext } from "@/app/context/authContext";
import logout from "@/app/firebase/auth/logout";
import LanguageSwitcher from "@/app/utility/LanguageSwitcher";
import { ThemeSwitcher } from "@/app/utility/ThemeSwitcher";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user }: any = useAuthContext();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  const profileClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setShowLoginModal((prevShowLoginModal) => {
      return !prevShowLoginModal;
    });
  };

  const signupClick = (event: React.SyntheticEvent) => {
    setShowLoginModal((prevShowLoginModal) => {
      return !prevShowLoginModal;
    });
  };

  const signinClick = (event: React.SyntheticEvent) => {
    setShowLoginModal((prevShowLoginModal) => {
      return !prevShowLoginModal;
    });
  };

  const logoutUser = (event: React.SyntheticEvent) => {
    setShowLoginModal((prevShowLoginModal) => {
      return !prevShowLoginModal;
    });
    logout();
    router.push("/");
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
        <Link
          href={"/settings"}
          className="text-sm leading-[1] hidden lg:inline-block"
        >
          Settings
        </Link>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <div className="text-lg relative">
          <Link onClick={profileClick} href={"#"}>
            <FaUserCircle />
          </Link>
          <div
            className={`${
              showLoginModal ? "visible" : "invisible"
            } absolute rounded-sm py-5 px-2 w-48 bg-slate-900 dark:bg-slate-100 right-0 top-7 transition-all ease-linear duration-75`}
          >
            <div className="h-0 absolute -top-[6px] right-[3px] w-0 border-x-[6px] border-x-transparent border-b-[8px] border-b-slate-900 dark:border-b-slate-100"></div>
            {!user && (
              <>
                <Link
                  className="block text-sm rounded-xl text-center py-2 px-2 mx-3 bg-slate-50 dark:bg-slate-900"
                  href={"/signup"}
                  onClick={signupClick}
                >
                  Sign Up
                </Link>

                <Link
                  className="block text-sm rounded-xl text-center py-2 px-2 mx-3 bg-[#ef4444] text-slate-50 mt-4"
                  href={"/login"}
                  onClick={signinClick}
                >
                  Login
                </Link>
              </>
            )}

            {user && (
              <>
                <p className="dark:text-slate-900 text-slate-50 text-sm text-left mx-3">
                  Hi, {user.displayName ? user.displayName : "User"}
                </p>

                <Link
                  className="block text-sm rounded-xl text-center py-2 px-2 mx-3 bg-slate-50 dark:bg-slate-900"
                  href={"/"}
                  onClick={logoutUser}
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
