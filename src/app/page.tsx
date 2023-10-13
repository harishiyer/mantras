"use client";

import { getMantras } from "@/../sanity/sanity-utils";
import Link from "next/link";
import SiteTitle from "./components/siteTitle";
import { AiOutlineClose, AiOutlineHeart, AiOutlineRight } from "react-icons/ai";
import { BsPlusSquareFill } from "react-icons/bs";
import { useAuthContext } from "./context/authContext";
import { useEffect, useState } from "react";
import { Mantra } from "../../types/Mantra";

export default function Home() {
  const [mantras, setMantras] = useState<Mantra[] | null>(null);
  const [editMantraList, setEditMantraList] = useState<boolean>(false);
  const { user }: any = useAuthContext();

  useEffect(() => {
    const fetchMantras = async () => {
      const mantras = await getMantras();
      setMantras(mantras);
    };
    fetchMantras();
  }, []);

  const removeUserMantra = () => {
    // fail safe - proceed only if logged in
    if (user) {
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-4 lg:mx-auto pt-10 pb-20">
        <SiteTitle />
        <div className="mt-10">
          {!user && (
            <p className="text-slate-900 dark:text-slate-50 text-lg font-medium mb-5">
              Featured Mantras{" "}
            </p>
          )}

          {user && (
            <div className="flex items-center mb-5">
              <p className="text-slate-900 dark:text-slate-50 text-lg font-medium mb-0">
                Your Mantras{" "}
              </p>
              {user && (
                <p
                  onClick={() => setEditMantraList((prevVal) => !prevVal)}
                  className="hover:cursor-pointer ml-auto mr-1 text-xs lg:text-sm lg:px-6 font-medium dark:text-slate-50 text-slate-950 mb-0"
                >
                  Edit
                </p>
              )}
            </div>
          )}
          {mantras?.map((mantra) => (
            <div
              className="flex transition-all ease-linear mb-4 gap-5"
              key={mantra._id}
            >
              <Link
                href={`/mantras/${mantra.slug}`}
                className="block leading-[1] relative text-lg md:text-2xl lg:text-4xl flex-grow text-center border-2 dark:text-slate-700 text-slate-100 rounded pt-5 pb-4 lg:pt-9 lg:pb-8 font-medium lg:font-bold bg-slate-900 dark:bg-slate-100"
              >
                {mantra.name}
                <span className="absolute right-3 top-[35%] lg:top-[46%] text-base">
                  <AiOutlineRight />
                </span>
              </Link>
              <div
                onClick={removeUserMantra}
                className={`${
                  editMantraList ? "block" : "hidden"
                } text-red transition-all text-xl flex text-red-600 items-center justify-center`}
              >
                <AiOutlineClose />
              </div>
            </div>
          ))}
          <Link
            href={user ? "/browse" : "/login"}
            className="text-sm mb-5 mt-10 flex flex-col items-center dark:text-slate-50 gap-3"
          >
            <span className="mx-auto text-4xl">
              <BsPlusSquareFill />
            </span>
            {!user && (
              <p className="text-sm">
                Login or Sign Up to curate your daily mantra.
              </p>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
