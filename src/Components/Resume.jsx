import { useState } from "react";

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
    <div className=" bg-zinc-900 md:h-screen md:justify-center md:items-center mt-[77px] text-white flex flex-col md:flex-row gap-10 lg:gap-20 md:px-10 container mx-auto py-20 lg:px-20">
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-center md:items-start gap-7">
          <h1 className="text-3xl font-bold ">Why Hire Me?</h1>
          <p className="text-justify text-lg leading-7 px-2 md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi,
            eligendi consequatur asperiores suscipit dolores aliquid non ex
            sapiente blanditiis quas?
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
      </div>
      <div>
        {experience && (
          <div className="flex flex-col justify-center items-center md:items-start gap-7 ">
            <h1 className="text-2xl font-bold ">My Experience</h1>
            <p className="text-justify text-lg leading-7 px-2 md:px-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam illo eveniet nostrum minus et qui dolorum optio quo
              facere assumenda numquam aperiam, atque cum corporis. Sunt ratione
              excepturi quam obcaecati.
            </p>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center shadow-md shadow-slate-100 py-4 my-3 w-[250px] h-[150px] gap-4 hover:scale-105 duration-300">
                <p className="font-medium text-sm">2022 - 2024 Present</p>
                <p className="font-bold text-xl">Front-End Developer</p>
                <li className="font-medium text-sm">ATOS</li>
              </div>
            </div>
          </div>
        )}
        {education && (
          <div className="flex flex-col justify-center items-center md:items-start gap-7 ">
            <h1 className="text-3xl font-bold ">Education</h1>
            <p className="text-justify text-lg leading-7 px-2 md:px-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam illo eveniet nostrum minus et qui dolorum optio quo
              facere assumenda numquam aperiam, atque cum corporis. Sunt ratione
              excepturi quam obcaecati.
            </p>

            <div className=" flex flex-col gap-4 justify-center h-[200px] md:w-[400px]">
              <div className="scroll h-36 overflow-y-auto">
                <div className="flex flex-col justify-center items-center shadow-md shadow-slate-100 py-4 px-3 my-3 w-[250px] h-[170px] gap-4 ">
                  <p className="font-medium text-sm">2023 - 2024 (6 Months)</p>
                  <p className="font-bold text-xl text-center">
                    Front-End Developer
                  </p>
                  <p className="font-medium text-sm text-center">GUVI</p>
                </div>
                <div className="flex flex-col justify-center items-center shadow-md shadow-slate-100 py-4 px-3 my-3 w-[250px] h-[170px] gap-4 ">
                  <p className="font-medium text-sm">2018 - 2022</p>
                  <p className="font-bold text-xl text-center">
                    Computer Science Engineering
                  </p>
                  <p className="font-medium text-sm text-center">
                    Rajalakshmi Institute Of Technology.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center shadow-md shadow-slate-100 py-4 px-3 my-3 w-[250px] h-[170px] gap-4 ">
                  <p className="font-medium text-sm">2017 - 2018</p>
                  <p className="font-bold text-xl text-center">
                    Computer Science
                  </p>
                  <p className="font-medium text-sm text-center">
                    Calavala Cunnan Chetty's Hindu Matric HR.SEC.SCHOOL
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {skills && (
          <div>
            <div className="flex flex-col justify-center items-center md:items-start gap-7 ">
              <h1 className="text-2xl font-bold ">Skills</h1>
              <p className="text-justify text-lg leading-7 px-2 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam illo eveniet nostrum minus et qui dolorum optio quo
                facere assumenda numquam aperiam, atque cum corporis. Sunt
                ratione excepturi quam obcaecati.
              </p>
              <div className="flex flex-col gap-4 justify-center">
                <div className="flex flex-col justify-center items-center shadow-md shadow-slate-100 py-4 px-3 my-3 w-[300px] h-[170px] gap-4 hover:scale-105 duration-300">
                  <p className="font-medium text-sm">2023 - 2024 (6 Months)</p>
                  <p className="font-bold text-xl text-center">
                    Front-End Developer
                  </p>
                  <p className="font-medium text-sm text-center">GUVI</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
