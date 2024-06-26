const ResumeRightContent = ({
  handleExperience,
  handleEducation,
  handleSkills,
}) => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-7">
      <h1 className="text-3xl font-bold ">Why Hire Me?</h1>
      <p className="text-justify text-lg leading-7 px-2 md:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi,
        eligendi consequatur asperiores suscipit dolores aliquid non ex sapiente
        blanditiis quas?
      </p>
      <div className="flex flex-col gap-4">
        <button
          className="w-full bg-green-500 py-2 px-[110px] rounded-md font-medium text-lg"
          onClick={handleExperience}
        >
          Experience
        </button>
        <button
          className="w-full bg-green-500 py-2 px-[112px] rounded-md font-medium text-lg"
          onClick={handleEducation}
        >
          Education
        </button>
        <button
          className="w-full bg-green-500 py-2 px-[112px] rounded-md font-medium text-lg"
          onClick={handleSkills}
        >
          Skills
        </button>
      </div>
    </div>
  );
};

export default ResumeRightContent;
