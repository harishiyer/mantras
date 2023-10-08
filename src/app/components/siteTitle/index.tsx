import { siteTitleText } from "@/app/layout";

interface props {
  className?: string;
}

const SiteTitle = (props: props) => {
  return (
    <h1
      className={
        (props.className
          ? props.className
          : "text-5xl lg:text-7xl") +
        " text-center font-extrabold dark:text-white transition-all ease-linear"
      }
    >
      {siteTitleText.split(" ")[0] + " "}
      <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        {siteTitleText.split(" ")[1]}
      </span>
    </h1>
  );
};

export default SiteTitle;
