import NavLinks from "./NavLinks";
const MobileNav = (props) => {
  const { handleNav, showNav, pathname } = props;
  return (
    <>
      <div
        className={
          showNav
            ? "fixed left-0 top-0 sm:w-[50%] w-[100%] h-full bg-black ease-in-out duration-200 md:hidden z-10"
            : "fixed left-[-100%] top-0  h-full bg-black ease-in-out duration-200 md:hidden"
        }
      >
        <div className="flex justify-between">
          <h1 className="font-bold text-white mt-8 pl-4 text-xl">
            Muthukumaran.
          </h1>
        </div>
        {/* NavLinks */}
        <NavLinks
          pathname={pathname}
          desktop={false}
          showNav={showNav}
          handleNav={handleNav}
        />
      </div>
    </>
  );
};

export default MobileNav;
