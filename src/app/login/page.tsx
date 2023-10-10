"use client";

import Link from "next/link";
import SiteTitle from "../components/siteTitle";
import Image from "next/image";
import LoginImage from "/public/image/ajeet-mestry-BtURpnC-J3U-unsplash.jpg";
import LoginImageDark from "/public/image/raju-sharma-0gbnZU9KwBA-unsplash.jpg";
import signIn from "../firebase/auth/signIn";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface firebaseError {
  message: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [formError, setFormError] = useState<firebaseError | string>("");

  const handleForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return setFormError(error.toString());
    }

    // else successful
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 mx-auto mb-24 lg:py-0">
      <div className="absolute top-[18px] left-5 lg:left-10 lg:top-[26px]">
        <Link href={"/"}>
          <SiteTitle className="text-2xl" />
        </Link>
      </div>
      <div className="lg:flex lg:flex-row w-full max-w-6xl my-20">
        <div className="w-1/2 hidden px-5 lg:flex relative flex-col items-start">
          <picture>
            <source
              srcSet={LoginImageDark.src}
              media="prefers-color-scheme:dark"
            />
            <Image
              src={LoginImage}
              alt="Login Page Image"
              className="max-w-[500px] h-auto rounded-2xl"
            />
          </picture>
          <p className="dark:hidden text-xs mt-3 text-left">
            Photo by{" "}
            <a href="https://unsplash.com/@ajeetmestry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Ajeet Mestry
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/BtURpnC-J3U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
          <p className="light:hidden text-white text-xs mt-3 text-left">
            Photo by{" "}
            <a href="https://unsplash.com/@capturenewph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Raju Sharma
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/0gbnZU9KwBA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
        </div>

        <div className="block lg:w-1/2">
          <div className="rounded-lg md:mt-0 sm:max-w-md lg:ml-10 xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleForm}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white dark:bg-slate-50 bg-slate-900 dark:text-slate-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign In
                </button>
                {formError && (
                  <p className="my-2 text-xs text-red-500">
                    {formError.toString()}
                  </p>
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Do not have an account?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Signup here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
