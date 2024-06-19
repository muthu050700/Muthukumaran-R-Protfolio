import { Link } from "react-router-dom";
const NavLinks = ({ pathname, desktop }) => {
  return (
    <div>
      <ul
        className={`${
          desktop
            ? "md:flex gap-8 hidden mr-2"
            : "pt-12 gap-8 uppercase p-4 text-white flex flex-col items-center"
        }`}
      >
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
  );
};

export default NavLinks;
