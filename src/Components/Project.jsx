import dataForProject from "../utils.js/ProjectImage";
import { useState, useRef } from "react";
import ProjectImageContent from "./ProjectImageContent";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";
const Project = ({ handleDarkMode, theme }) => {
  const [visible, setVisible] = useState(3);
  const ref = useRef("show more");
  const handleShowMore = () => {
    if (ref.current.innerText !== "show more") {
      setVisible(3);
    } else {
      setVisible((preValue) => preValue + 3);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className={theme ? "dark" : " light"}
    >
      <div className=" dark:bg-neutral-900  md:justify-center md:items-center  flex flex-col  gap-10 lg:gap-12 md:px-10 container mx-auto py-20 lg:px-20">
        <div className="text-center pt-20  ">
          <p className="font-bold text-4xl md:text-4xl lg:text-5xl  tracking-wide pb-4 dark:text-white ">
            Projects
          </p>
          <p className="font-medium text-lg md:text-xl lg:text-2xl md:pt-2 lg:pt-3 dark:text-white tracking-wide">
            Check my work
          </p>
        </div>
        <div className="grid place-content-center gap-10 md:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
          {dataForProject.slice(0, visible).map((value, index) => {
            return (
              <div key={index}>
                <ProjectImageContent value={value} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleShowMore}
            ref={ref}
            className=" bg-[#CE5A67] hover:bg-[#C73659] w-36 py-2 px-4 rounded-sm   text-lg font-medium text-center text-white"
          >
            {dataForProject.length === visible ||
            dataForProject.length > visible
              ? "show more"
              : "show less"}
          </button>
        </div>
        <DarkMode handleDarkMode={handleDarkMode} theme={theme} />
      </div>
    </motion.div>
  );
};

export default Project;
