import { PortableText } from "@portabletext/react";
import { getMantra } from "../../../../sanity/sanity-utils";
import Link from "next/link";
import SiteTitle from "@/app/components/siteTitle";

type Props = {
  params: { mantra: string };
};

const Mantra = async ({ params }: Props) => {
  const slug = params.mantra;

  const project = await getMantra(slug);

  return (
    <section className="mx-6">
      <div className="absolute left-10 top-[26px]">
        <Link href={"/"}>
          <SiteTitle className="text-2xl" />
        </Link>
      </div> 
      <section className="max-w-5xl mx-auto pt-10 pb-20">
        <h1 className="text-3xl lg:text-5xl text-center font-extrabold text-slate-900 dark:text-white">
          {project.name}
        </h1>

        <div className="blog-content mt-10 text-lg lg:text-xl text-center text-slate-900 dark:text-slate-400">
          <PortableText value={project.content} />
        </div>
      </section>
    </section>
  );
};

export default Mantra;
