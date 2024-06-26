import { motion } from "framer-motion";

const ResumeEducation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col justify-center items-center md:items-start gap-7 xl:flex-1"
    >
      <h1 className="text-3xl font-bold ">Education</h1>
      <p className="text-justify text-lg leading-7 px-2 md:px-0">
        I hold a degree in Computer Science Engineering and am currently
        enhancing my front-end development skills through a 6-month course. This
        course focuses on advanced techniques and modern web development tools.
        My goal is to stay updated with industry trends and improve my
        proficiency in creating user-friendly web applications.
      </p>

      <div className=" grid lg:grid-cols-1 xl:grid-cols-2 gap-5 h-[400px] md:h-[200px]  overflow-y-auto lg:hover:overflow-y-auto px-3 lg:overflow-y-hidden scrolling">
        <div className="flex flex-col justify-center items-center shadow-md shadow-black  bg-neutral-900 text-[#C73659] py-4 px-3 my-2 w-[full]  h-[170px] gap-3 cursor-pointer">
          <p className="font-medium text-sm">2023 - 2024 (6 Months)</p>
          <p className="font-bold text-xl text-center">Front-End Developer</p>
          <p className="font-medium text-sm text-center">GUVI</p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-md shadow-black  bg-neutral-900 text-[#C73659] py-4 px-3 my-2 w-[full] h-[170px]  gap-3 cursor-pointer">
          <p className="font-medium text-sm">2018 - 2022</p>
          <p className="font-bold text-xl text-center">
            Computer Science and Engineering
          </p>
          <p className="font-medium text-sm text-center">
            Rajalakshmi Institute Of Technology.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-md shadow-black  bg-neutral-900 text-[#C73659] py-4 px-3 my-2 w-[full] h-[170px]  gap-3 cursor-pointer">
          <p className="font-medium text-sm">2017 - 2018</p>
          <p className="font-bold text-xl text-center">Computer Science</p>
          <p className="font-medium text-sm text-center">
            Calavala Cunnan Chetty's Hindu Matric HR.SEC.SCHOOL
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeEducation;
