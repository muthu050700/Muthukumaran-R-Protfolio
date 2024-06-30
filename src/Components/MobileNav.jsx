import NavLinks from "./NavLinks";
import { Link } from "react-scroll";
const MobileNav = (props) => {
  const { handleNav, showNav, pathname, color } = props;
  return (
    <>
      <div
        className={
          showNav
            ? "fixed left-0 top-0 sm:w-[50%] w-[100%] h-full dark:bg-neutral-900 bg-[#CE5A67] ease-in-out duration-300 md:hidden z-10"
            : "fixed left-[-100%] top-0  h-full dark:bg-neutral-900 bg-[#CE5A67] ease-in-out duration-300 md:hidden"
        }
      >
        <div className="flex justify-between">
          <Link to={"/"}>
            <h1
              className={`font-medium text-xl md:text-2xl lg:text-3xl ml-2 mt-6 md:ml-0 logo  tracking-wider ${
                color ? " dark:text-white" : "text-[#A91D3A] "
              }`}
            >
              Muthu
              <span
                className={`${
                  color
                    ? " text-white dark:text-black logo  tracking-wider"
                    : " text-black dark:text-white  logo  tracking-wider"
                }`}
              >
                kumaran R
              </span>
            </h1>
          </Link>
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
