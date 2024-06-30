import { ReactTyped } from "react-typed";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center gap-5 xl:ml-10">
      <h3 className="font-bold text-2xl lg:text-3xl dark:text-white  tracking-wider">
        I'm a Muthukumaran and
        <ReactTyped
          className="pl-2 dark:text-[#A91D3A] text-[#A91D3A]"
          strings={["Front-end Developer.", "React Js Developer."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h3>
      <p className="text-justify md:w-[full] lg:w-[full] text-lg leading-7 dark:text-white tracking-wider">
        I'am a dedicated front-end developer focused on creating attractive and
        user-friendly websites. I am passionate about translating design
        concepts into interactive digital experiences and continuously improving
        my skill set to stay updated with the latest industry trends. My
        portfolio showcases a variety of projects that demonstrate my ability to
        deliver responsive and dynamic web applications.
      </p>
      <div className="flex flex-wrap justify-between ">
        <div className=" mb-2">
          {/* <div className=" absolute bg-black blur-sm -inset-0.3 border border-black w-28 h-16  rounded-sm  "></div> */}
          <div className=" relative flex flex-col justify-center shadow-md shadow-black  items-center bg-neutral-900 text-[#C73659] cursor-pointer w-28 h-16 rounded-sm hover:scale-105 duration-300">
            <p className="font-bold text-lg">Experience</p>
            <p className="font-bold text-sm">2 years</p>
          </div>
        </div>
        <div className=" mb-2">
          <div className="  flex flex-col justify-center shadow-md shadow-black  items-center bg-neutral-900 text-[#C73659] cursor-pointer w-28 h-16 rounded-sm hover:scale-105 duration-300">
            <p className="font-bold text-lg">Projects</p>
            <p className="font-bold text-sm">3 Projects</p>
          </div>
        </div>
        <div className=" mb-2">
          <div className="  flex flex-col justify-center shadow-md shadow-black  items-center bg-neutral-900 text-[#C73659]  cursor-pointer  w-28 h-16 rounded-sm hover:scale-105 duration-300">
            <p className="font-bold text-lg">Language</p>
            <p className="font-bold text-sm">English</p>
          </div>
        </div>
      </div>
      <div>
        <a
          href="./assets/CV_2023051911551980.pdf"
          download
          className=" text-lg  font-medium text-white bg-[#CE5A67] hover:bg-[#C73659] w-36 py-2 px-4 rounded-sm"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
