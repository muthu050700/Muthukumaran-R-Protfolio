import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
const Header = ({ theme }) => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  const { pathname } = useLocation();
  //Header Color Change
  const [color, setColor] = useState(false);

  const colorChange = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", colorChange);
  return (
    <div className={theme ? "dark" : " light"}>
      <div className="fixed z-10  top-0 w-full">
        <div
          className={`${
            color
              ? "bg-[#CE5A67] dark:text-white h-[78px] flex justify-between items-center  w-full container  mx-auto md:px-10 lg:px-32 transition duration-300 "
              : "dark:bg-neutral-900 dark:text-white h-[78px] flex justify-between items-center  w-full container mx-auto md:px-10 lg:px-32"
          }`}
        >
          {/* Desktop Navbar */}
          <div className="h-24 flex justify-between items-center w-full  mx-auto">
            <Link to={"/"}>
              <h1
                className={`font-medium text-xl md:text-2xl lg:text-3xl ml-2 md:ml-0 logo  tracking-wider ${
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
            {/* NavLinks */}
            <NavLinks pathname={pathname} desktop={true} color={color} />
          </div>
          <div onClick={handleNav} className=" md:hidden z-20 mr-2  ">
            {showNav ? (
              <MdClose
                size={30}
                className="dark:text-white text-white hover:text-[#A91D3A] cursor-pointer"
              />
            ) : (
              <RiMenu3Line
                size={30}
                className="dark:text-white hover:text-[#A91D3A]  cursor-pointer"
              />
            )}
          </div>

          {/* MobileNav */}
          <MobileNav
            handleNav={handleNav}
            showNav={showNav}
            pathname={pathname}
            color={color}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
