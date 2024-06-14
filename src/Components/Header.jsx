import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  const { pathname } = useLocation();
  return (
    <div className=" h-24 flex justify-between items-center text-white w-full max-w-[1224px] mx-auto  ">
      <div className="animate__animated animate__fadeInDown animate__delay-1s h-24 flex justify-between items-center text-white w-full max-w-[1224px] mx-auto">
        <h1 className="font-bold text-xl px-3 md:text-2xl">Muthukumaran.</h1>
        <ul className="md:flex gap-8 hidden px-4">
          <li>
            <Link
              to={"/"}
              className={`${
                pathname === "/" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={`${
                pathname === "/about" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/resume"}
              className={`${
                pathname === "/resume" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to={"/project"}
              className={`${
                pathname === "/project" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={`${
                pathname === "/contact" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        onClick={handleNav}
        className="block md:hidden m-4 animate__animated animate__fadeInDown animate__delay-1s"
      >
        {showNav ? <MdClose size={30} /> : <RiMenu3Line size={30} />}
      </div>

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
          <div
            onClick={handleNav}
            className="absolute right-0 top-[14px] md:hidden m-4 "
          >
            {showNav ? <MdClose size={30} /> : ""}
          </div>
        </div>

        <ul className="pt-12 gap-8 uppercase p-4 text-white flex flex-col items-center">
          <li className="pb-4">
            <Link
              to={"/"}
              className={`${
                pathname === "/" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
              onClick={handleNav}
            >
              Home
            </Link>
          </li>
          <li className="pb-4">
            <Link
              to={"/about"}
              className={`${
                pathname === "/about" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
              onClick={handleNav}
            >
              About
            </Link>
          </li>
          <li className="pb-4">
            <Link
              to={"/resume"}
              className={`${
                pathname === "/resume" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
              onClick={handleNav}
            >
              Resume
            </Link>
          </li>
          <li className="pb-4">
            <Link
              to={"/project"}
              className={`${
                pathname === "/project" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
              onClick={handleNav}
            >
              Project
            </Link>
          </li>
          <li className="pb-4">
            <Link
              to={"/contact"}
              className={`${
                pathname === "/contact" &&
                "font-bold text-orange-700 border-b-2 border-green-600"
              } hover:text-red-700 transition-all`}
              onClick={handleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
