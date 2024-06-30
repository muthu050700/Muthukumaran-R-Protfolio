const ResumeRightContent = ({
  handleExperience,
  handleEducation,
  handleSkills,
}) => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-7">
      <h1 className="text-3xl font-bold ">Why Hire Me?</h1>
      <p className="text-justify text-lg leading-7 px-2 md:px-0">
        As a front-end developer with 2 years of experience,I specialize in
        modern web technologies and creating user-friendly designs. My
        dedication to continuous learning and innovative problem-solving ensures
        exceptional results for the team.
      </p>
      <div className="flex flex-col gap-4">
        <button
          className="w-full bg-[#CE5A67] py-2 px-[110px] hover:bg-[#C73659]  rounded-md font-medium text-lg"
          onClick={handleExperience}
        >
          Experience
        </button>
        <button
          className="w-full bg-[#CE5A67] py-2 px-[112px] hover:bg-[#C73659]  rounded-md font-medium text-lg"
          onClick={handleEducation}
        >
          Education
        </button>
        <button
          className="w-full bg-[#CE5A67] py-2 px-[112px] hover:bg-[#C73659]  rounded-md font-medium text-lg"
          onClick={handleSkills}
        >
          Skills
        </button>
      </div>
    </div>
  );
};

export default ResumeRightContent;
