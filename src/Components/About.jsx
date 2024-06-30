import AboutContent from "./AboutContent";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";
const About = ({ handleDarkMode, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className={theme ? "dark" : " light"}
    >
      <div className=" py-20  dark:bg-neutral-900  container mx-auto flex flex-col justify-center lg:px-10">
        <div className="flex flex-col items-center mb-10">
          <h1 className="font-bold pt-20 text-4xl md:text-4xl lg:text-5xl dark:text-white tracking-wide">
            About
          </h1>
          <p className="font-medium text-lg md:text-xl lg:text-2xl md:pt-2 lg:pt-3 dark:text-white tracking-wide">
            My Introduction
          </p>
        </div>
        <AboutContent />
        <DarkMode handleDarkMode={handleDarkMode} theme={theme} />
      </div>
    </motion.div>
  );
};

export default About;
