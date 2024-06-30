import { useState } from "react";
import ResumeRightContent from "./ResumeRightContent";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeSkills from "./ResumeSkills";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";
const Resume = ({ handleDarkMode, theme }) => {
  const [experience, setExperience] = useState(true);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);

  const handleExperience = () => {
    if (!experience) {
      setExperience(!experience);
    }
    setEducation(false);
    setSkills(false);
  };
  const handleEducation = () => {
    if (!education) {
      setEducation(!education);
    }
    setExperience(false);
    setSkills(false);
  };
  const handleSkills = () => {
    if (!skills) {
      setSkills(!skills);
    }
    setExperience(false);
    setEducation(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className={theme ? "dark" : " light"}
    >
      <div className=" dark:bg-neutral-900   lg:gap-12 md:px-10 container mx-auto lg:px-32">
        <div className="text-center pt-20 pb-10 ">
          <p className="font-bold pb-4  text-4xl md:text-4xl lg:text-5xl dark:text-white tracking-wide pt-20">
            Resume
          </p>
        </div>
        <div className=" md:justify-center md:items-center dark:text-white flex flex-col md:flex-row gap-10 pb-20 md:pb-20">
          <div className="flex flex-col flex-1">
            <ResumeRightContent
              handleExperience={handleExperience}
              handleEducation={handleEducation}
              handleSkills={handleSkills}
            />
          </div>
          <>
            {experience && <ResumeExperience />}
            {education && <ResumeEducation />}
            {skills && <ResumeSkills />}
          </>
        </div>
        <DarkMode handleDarkMode={handleDarkMode} theme={theme} />
      </div>
    </motion.div>
  );
};

export default Resume;
