import { ReactTyped } from "react-typed";
const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center gap-5 xl:ml-10">
      <h3 className="lg:text-3xl md:text-2xl text-[18px]">
        I'm a Muthukumaran and
        <ReactTyped
          className="pl-2"
          strings={["Front-end Developer.", "React Js Developer."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h3>
      <p className="text-justify md:w-[full] lg:w-[full] text-lg leading-7">
        I'am a dedicated front-end developer focused on creating attractive and
        user-friendly websites. I am passionate about translating design
        concepts into interactive digital experiences and continuously improving
        my skill set to stay updated with the latest industry trends. My
        portfolio showcases a variety of projects that demonstrate my ability to
        deliver responsive and dynamic web applications.
      </p>
      <div className="flex flex-wrap justify-between">
        <div className="relative mb-2">
          <div className=" absolute bg-pink-700 blur-sm -inset-0.3 border border-white w-28 h-16  rounded-sm  "></div>
          <div className=" relative flex flex-col justify-center items-center bg-black text-white w-28 h-16 rounded-sm">
            <p className="font-bold text-lg">Experience</p>
            <p className="font-bold text-sm">2 years</p>
          </div>
        </div>
        <div className="relative mb-2">
          <div className=" absolute bg-pink-700 blur-sm -inset-0.3  border border-white w-28 h-16 rounded-sm  "></div>
          <div className=" relative flex flex-col justify-center items-center bg-black text-white w-28 h-16 rounded-sm">
            <p className="font-bold text-lg">Projects</p>
            <p className="font-bold text-sm">3 Projects</p>
          </div>
        </div>
        <div className="relative mb-2">
          <div className=" absolute bg-pink-700 blur-sm -inset-0.3 border border-white w-28 h-16 rounded-sm  "></div>
          <div className=" relative flex flex-col justify-center items-center bg-black text-white w-28 h-16 rounded-sm">
            <p className="font-bold text-lg">Language</p>
            <p className="font-bold text-sm">English</p>
          </div>
        </div>
      </div>
      <div>
        <button className=" bg-orange-700 w-36 py-2 px-4 rounded-sm">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
