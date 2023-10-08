import { ThemeSwitcher } from "@/app/utility/themeSwitcher";

const Header = () => {
  return (
    <header className="flex gap-5 items-center content-center w-full py-6 px-4 text-slate-900 text-right dark:text-white">
      <div className="ml-auto flex items-center">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
