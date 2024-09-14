import { FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className={`${theme ? " dark " : " light"}`}
    >
      <div className=" dark:text-white text-[#C73659] h-[77px] dark:bg-[#1F1717] bg-[#f3e4d2] flex justify-center items-center text-center font-medium text-lg md:text-xl  tracking-wide">
        <span>
          Created By{" "}
          <a
            href="https://www.linkedin.com/in/muthukumaran0519/"
            target="_blank"
            className=" dark:text-[#C73659] text-black"
          >
            Muthukumaran
          </a>{" "}
          | <span>{<FaRegCopyright className=" inline-block" />} </span>{" "}
          <span id="year">2024</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Footer;
