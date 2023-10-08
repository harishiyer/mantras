"use client";

import { PortableText } from "@portabletext/react";
import { getMantra } from "../../../../sanity/sanity-utils";
import Link from "next/link";
import SiteTitle from "@/app/components/siteTitle";
import { useEffect, useState } from "react";
import { Mantra } from "@/../../types/Mantra";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  params: { mantra: string };
};

const Mantra = ({ params }: Props) => {
  const slug = params.mantra;

  const [project, setProject] = useState<Mantra | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const singleProject = await getMantra(slug);
      setProject(singleProject);
    };
    fetchProjects();
  }, [project]);

  return (
    <section className="mx-6">
      <div className="absolute top-[18px] lg:left-10 lg:top-[26px]">
        <Link href={"/"}>
          <SiteTitle className="text-2xl" />
        </Link>
      </div>

      {project ? (
        <section className="max-w-5xl mx-auto pt-10 pb-20">
          <h1 className="text-3xl lg:text-5xl text-center font-extrabold text-slate-900 dark:text-white">
            {project.name}
          </h1>

          <div className="blog-content mt-10 text-lg lg:text-xl text-center text-slate-900 dark:text-slate-400">
            <PortableText value={project.content} />
          </div>
        </section>
      ) : (
        <div className="text-white h-[100vh] justify-center fixed w-full flex items-center top-0 left-0">
          <div className="-mt-20 text-3xl animate-spin">
            <AiOutlineLoading3Quarters />
          </div>
        </div>
      )}
    </section>
  );
};

export default Mantra;
