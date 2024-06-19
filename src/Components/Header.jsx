import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  const { pathname } = useLocation();
  return (
    <div className="fixed z-10  top-0 w-full">
      <div className="  bg-red-600 h-[78px] flex justify-between items-center text-white w-full container mx-auto md:px-10 lg:px-20">
        {/* Desktop Navbar */}
        <div className="h-24 flex justify-between items-center text-white w-full  mx-auto">
          <h1 className="font-bold text-xl md:text-2xl ml-2 md:ml-0">
            Muthukumaran.
          </h1>
          {/* NavLinks */}
          <NavLinks pathname={pathname} desktop={true} />
        </div>
        <div onClick={handleNav} className=" md:hidden z-20 mr-2 ">
          {showNav ? <MdClose size={30} /> : <RiMenu3Line size={30} />}
        </div>

        {/* MobileNav */}
        <MobileNav
          handleNav={handleNav}
          showNav={showNav}
          pathname={pathname}
        />
      </div>
    </div>
  );
};
export default Header;
