"use client";

import Link from "next/link";
import SiteTitle from "../components/siteTitle";
import { getMantras } from "../../../sanity/sanity-utils";
import { AiOutlineRight } from "react-icons/ai";
import FavoriteButton from "../components/FavoriteButton";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuthContext } from "../context/authContext";
import { Suspense, useEffect, useState } from "react";
import { Mantra } from "../../../types/Mantra";

const Browse = () => {
  const { user }: any = useAuthContext();

  const [userFavorites, setUserFavorites] = useState([]);
  const [mantras, setMantras] = useState<Mantra[] | null>(null);

  useEffect(() => {
    // get all mantras from sanity
    const getAllMantras = async () => {
      const all_mantras = await getMantras();
      setMantras(all_mantras);
    };
    getAllMantras();

    // get user mantras
    const fetchUserMantras = async () => {
      const mantra_data = await getDoc(doc(db, "users", user.uid));

      if (mantra_data.exists()) {
        setUserFavorites(mantra_data.data().mantra_ids);
      }
    };

    user && fetchUserMantras();
  }, []);

  return (
    <div className="max-w-5xl mx-4 lg:mx-auto py-20">
      <div className="absolute top-[18px] lg:left-10 lg:top-[26px]">
        <Link href={"/"}>
          <SiteTitle className="text-2xl" />
        </Link>
      </div>
      <h1 className="text-3xl lg:text-5xl hidden lg:block text-center font-extrabold text-slate-900 dark:text-white">
        Browse
      </h1>
      <div className="lg:mt-20 mb-20">
        <div className="search mb-10">
          <input
            className="w-full border-2 rounded-lg px-5 py-5 dark:text-white outline-none text-lg leading-[1]"
            placeholder="Search Mantra..."
          />
        </div>

        <Suspense>
          {mantras?.map((mantra) => (
            <div className="flex mb-4 gap-5" key={mantra._id}>
              <Link
                href={`/mantras/${mantra.slug}`}
                className="block leading-[1] relative text-lg md:text-2xl lg:text-4xl flex-grow text-center border-2 dark:text-slate-700 text-slate-100 rounded pt-5 pb-4 lg:pt-9 lg:pb-8 font-medium lg:font-bold bg-slate-900 dark:bg-slate-100"
              >
                {mantra.name}
                <span className="absolute right-3 top-[35%] lg:top-[46%] text-base">
                  <AiOutlineRight />
                </span>
              </Link>
              <div className="text-red text-2xl lg:text-3xl flex text-red-700 items-center justify-center">
                <FavoriteButton favorites={userFavorites} _id={mantra._id} />
              </div>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Browse;
