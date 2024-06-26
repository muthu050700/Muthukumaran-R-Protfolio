import { useState } from "react";
import ResumeRightContent from "./ResumeRightContent";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeSkills from "./ResumeSkills";
const Resume = () => {
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
    <div className=" bg-zinc-900 md:h-screen md:justify-center md:items-center mt-[77px] text-white flex flex-col md:flex-row gap-10 lg:gap-12 md:px-10 container mx-auto py-20 lg:px-20">
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
  );
};

export default Resume;
