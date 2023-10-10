import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="text-slate-900 dark:text-white h-[100vh] justify-center fixed w-full flex items-center top-0 left-0">
      <div className="-mt-20 text-3xl animate-spin">
        <AiOutlineLoading3Quarters />
      </div>
    </div>
  );
};

export default Loading;
