"use client";

import Link from "next/link";
import { useAuthContext } from "../../context/authContext";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";

const FavoriteButton = () => {
  const { user }: any = useAuthContext();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const favoriteMantraItem = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoginModal(false);
    }, 5000);
  }, [showLoginModal]);

  return (
    <>
      <button
        onClick={favoriteMantraItem}
        className="hover:cursor-pointer"
        type="button"
      >
        <AiOutlineHeart />
      </button>
      {!user && (
        <div
          className={`${
            showLoginModal ? "visible" : "invisible"
          } absolute inline-block w-64 text-sm text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm text-center dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800 right-14 lg:right-8`}
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
