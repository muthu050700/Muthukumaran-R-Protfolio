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
    <div className=" h-24 flex justify-between items-center text-white w-full max-w-[1224px] mx-auto">
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
      <div onClick={handleNav} className="block md:hidden">
        {showNav ? <MdClose size={25} /> : <RiMenu3Line size={25} />}
      </div>
      <div
        className={
          showNav
            ? "fixed left-0 top-0 sm:w-[50%] w-[60%] h-full  bg-black ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="font-bold text-white mt-8 pl-4 text-xl">
          Muthukumaran.
        </h1>
        <ul className="pt-8 uppercase p-4 text-white ">
          <li className="pb-4">
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
          <li className="pb-4">
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
          <li className="pb-4">
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
          <li className="pb-4">
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
          <li className="pb-4">
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
    </div>
  );
};
export default Header;
