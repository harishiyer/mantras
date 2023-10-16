"use client";

import { getMantras, getUserMantra } from "@/../sanity/sanity-utils";
import Link from "next/link";
import SiteTitle from "./components/siteTitle";
import { AiOutlineClose, AiOutlineHeart, AiOutlineRight } from "react-icons/ai";
import { BsPlusSquareFill } from "react-icons/bs";
import { useAuthContext } from "./context/authContext";
import { useEffect, useState } from "react";
import { Mantra } from "../../types/Mantra";
import {
  arrayRemove,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase/config";

export default function Home() {
  const [mantras, setMantras] = useState<Mantra[] | null | undefined>(null);
  const [editMantraList, setEditMantraList] = useState<boolean>(false);
  const { user }: any = useAuthContext();

  useEffect(() => {
    const fetchMantras = async () => {
      // if logged in get the user mantras
      if (user) {
        const mantra_data = await getDoc(doc(db, "users", user.uid));

        if (mantra_data.exists()) {
          const mantraIds: Array<string> = mantra_data.data().mantra_ids;
          if (mantraIds.length == 0) {
            // fetch default featured mantras
            const mantras = await getMantras();
            setMantras(mantras);
          }

          // fetch the user mantras
          const userMantras = await getUserMantra(mantraIds);
          setMantras(userMantras);
        }

        return;
      }

      // fetch default featured mantras if not logged in
      const mantras = await getMantras();
      setMantras(mantras);
    };
    fetchMantras();
  }, []);

  const removeUserMantra = async (_id: String) => {
    // fail safe - proceed only if logged in
    if (user) {
      try {
        await updateDoc(doc(db, "users", user.uid), {
          mantra_ids: arrayRemove(_id),
          lastUpdate: serverTimestamp(),
        });

        setMantras(
          mantras?.filter((mantra) => {
            return mantra._id != _id;
          })
        );
      } catch (e) {
        console.log(e);
      }
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
                  className="hover:cursor-pointer ml-auto mr-1 text-xs lg:text-sm pr-1 font-medium dark:text-slate-50 text-slate-950 mb-0"
                >
                  Edit
                </p>
              )}
            </div>
          )}
          {mantras &&
            mantras?.map((mantra) => (
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
                  onClick={() => removeUserMantra(mantra._id)}
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
