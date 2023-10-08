import MobileNavigation from "../MobileNavigation";

const Footer = () => {
  return (
    <>
      <MobileNavigation />
      <footer className="text-center py-5 hidden lg:block">
        <h4 className="text-center dark:text-slate-100 text-slate-900 font-medium">
          Curated Mantras for you
        </h4>
      </footer>
    </>
  );
};

export default Footer;
