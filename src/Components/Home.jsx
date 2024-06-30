import { ReactTyped } from "react-typed";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = ({ handleDarkMode, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className={theme ? "dark" : " light"}
    >
      <div className=" text-[#151515]  py-32 md:py-24  lg:py-44 xl:py-48 container mx-auto flex flex-col justify-center gap-10 lg:flex-row md:items-center dark:bg-neutral-900 lg:px-10 ">
        {/* Left side content */}
        <div className="flex flex-col  ml-2 gap-4 lg:flex-1 lg:gap-5  lg:pl-20">
          <p className="font-bold text-xl md:text-3xl lg:text-4xl dark:text-white md:pt-20 lg:pt-0">
            Hello{" "}
            <p className="  animate__slow animate__animated animate__wobble animate__delay-2s animate__infinite inline-block">
              👋
            </p>{" "}
            I'm
          </p>
          <p className="font-bold text-4xl md:text-5xl xl:text-6xl dark:text-white">
            Muthukumaran R
          </p>
          <div className="font-bold text-2xl lg:text-3xl dark:text-white">
            <p>
              And I'm a
              <span>
                <ReactTyped
                  className="pl-[5px] dark:text-[#A91D3A] text-[#A91D3A]"
                  strings={["Front-end Developer.", "React Js Developer."]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-7 mt-2  md:flex-row md:gap-4 text-lg font-medium text-white">
            <div>
              <a
                href="./assets/CV_2023051911551980.pdf"
                download
                className=" bg-[#CE5A67] hover:bg-[#C73659] w-36 py-2 px-4 rounded-sm  "
              >
                Download CV
              </a>
            </div>
            <div>
              <Link
                to="/contact"
                CE5A67
                className=" bg-[#CE5A67]  hover:bg-[#C73659] w-36 py-2 px-4 rounded-sm"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className=" blob mx-auto md:m-2 lg:mr-20 w-[300px]"></div>
        <DarkMode handleDarkMode={handleDarkMode} theme={theme} />
      </div>
    </motion.div>
  );
};
export default Home;
