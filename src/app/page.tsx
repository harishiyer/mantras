"use client";

import { getMantras } from "@/../sanity/sanity-utils";
import Link from "next/link";
import SiteTitle from "./components/siteTitle";
import { AiOutlineRight } from "react-icons/ai";
import { BsPlusSquareFill } from "react-icons/bs";
import { useAuthContext } from "./context/authContext";
import { useEffect, useState } from "react";
import { Mantra } from "../../types/Mantra";

export default function Home() {
  const [mantras, setMantras] = useState<Mantra[] | null>(null);
  const { user }: any = useAuthContext();

  useEffect(() => {
    const fetchMantras = async () => {
      const mantras = await getMantras();
      setMantras(mantras);
    };
    fetchMantras();
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-4 lg:mx-auto pt-10 pb-20">
        <SiteTitle />
        <div className="mt-10">
          <p className="text-slate-900 dark:text-slate-50 mb-5">
            Featured Mantras
          </p>
          {mantras?.map((mantra) => (
            <Link
              href={`/mantras/${mantra.slug}`}
              className="block leading-[1] relative text-lg md:text-2xl lg:text-4xl text-center border-2 dark:text-slate-700 text-slate-100 rounded mb-4 pt-5 pb-4 lg:pt-9 lg:pb-8 font-medium lg:font-bold bg-slate-900 dark:bg-slate-100"
              key={mantra._id}
            >
              {mantra.name}
              <span className="absolute right-3 top-[35%] lg:top-[46%] text-base">
                <AiOutlineRight />
              </span>
            </Link>
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
