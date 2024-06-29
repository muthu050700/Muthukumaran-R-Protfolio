import { Link } from "react-router-dom";
const NavLinks = ({ pathname, desktop, showNav, handleNav, color }) => {
  return (
    <div>
      <ul
        className={`${
          desktop
            ? "md:flex gap-8 hidden mr-2 "
            : "pt-12 gap-10 uppercase p-4 dark:text-white text-white flex flex-col items-center"
        }`}
      >
        <li>
          <Link
            to={"/"}
            className={`${
              pathname === "/" &&
              `text-[#151515]  ${
                color
                  ? "dark:text-black text-white "
                  : "dark:text-[#C73659] dark:border-white "
              } border-b-[3px] border-[#A91D3A] `
            } hover:text-[#A91D3A] transition-all text-lg font-bold `}
            onClick={handleNav}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className={`${
              pathname === "/about" &&
              `text-[#151515]  ${
                color
                  ? "dark:text-black text-white "
                  : "dark:text-[#C73659] dark:border-white "
              } border-b-[3px] border-[#A91D3A] `
            } hover:text-[#A91D3A] transition-all  text-lg font-bold`}
            onClick={handleNav}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/resume"}
            className={`${
              pathname === "/resume" &&
              `text-[#151515]  ${
                color
                  ? "dark:text-black text-white "
                  : "dark:text-[#C73659] dark:border-white "
              } border-b-[3px] border-[#A91D3A] `
            } hover:text-[#A91D3A] transition-all  text-lg font-bold`}
            onClick={handleNav}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to={"/project"}
            className={`${
              pathname === "/project" &&
              `text-[#151515]  ${
                color
                  ? "dark:text-black text-white "
                  : "dark:text-[#C73659] dark:border-white "
              } border-b-[3px] border-[#A91D3A] `
            } hover:text-[#A91D3A] transition-all  text-lg font-bold`}
            onClick={handleNav}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className={`${
              pathname === "/contact" &&
              `text-[#151515]  ${
                color
                  ? "dark:text-black text-white "
                  : "dark:text-[#C73659] dark:border-white "
              } border-b-[3px] border-[#A91D3A] `
            } hover:text-[#A91D3A] transition-all  text-lg font-bold`}
            onClick={handleNav}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
