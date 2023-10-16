"use client";

import Link from "next/link";
import { useAuthContext } from "../../context/authContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import {
  arrayRemove,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/app/firebase/config";

type props = {
  _id: String;
  favorites: Array<String>;
};

const FavoriteButton = (props: props) => {
  const { user }: any = useAuthContext();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const favoriteMantraItem = async (_id: String) => {
    // return if not logged in
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    // check if not favorite and update
    if (!favorite) {
      try {
        await updateDoc(doc(db, "users", user.uid), {
          mantra_ids: arrayUnion(_id),
          lastUpdate: serverTimestamp(),
        });
        setFavorite(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await updateDoc(doc(db, "users", user.uid), {
          mantra_ids: arrayRemove(_id),
          lastUpdate: serverTimestamp(),
        });
        setFavorite(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    props.favorites?.map((favoriteMantra) => {
      if (props._id == favoriteMantra) {
        setFavorite(true);
      }
    });
  }, [props.favorites]);

  useEffect(() => {
    setTimeout(() => {
      setShowLoginModal(false);
    }, 5000);
  }, [showLoginModal]);

  return (
    <>
      <button
        onClick={() => favoriteMantraItem(props._id)}
        className="hover:cursor-pointer"
        type="button"
      >
        {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      {!user && (
        <div
          className={`${
            showLoginModal ? "visible" : "invisible"
          } absolute inline-block w-64 text-sm text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm text-center dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800 right-12 lg:right-12`}
        >
          <div className="px-3 pb-2 pt-3">
            <p>
              <Link href={"/login"} className="font-bold underline">
                Log in
              </Link>{" "}
              or{" "}
              <Link href={"/signup"} className="font-bold underline">
                Sign up
              </Link>{" "}
              to save and curate your mantras.
            </p>
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
    </>
  );
};

export default FavoriteButton;
