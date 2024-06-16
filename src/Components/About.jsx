import { ReactTyped } from "react-typed";
const About = () => {
  return (
    <div className=" text-white flex flex-col justify-between items-center md:flex-row md:mt-36 max-w-[1224px] mx-auto px-4 mt-8">
      <div className="">
        <img
          src="./assets/profile-img.jpeg"
          alt="img"
          className="w-[250px] h-[200px] md:w-[350px] md:h-[350px] rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-5">
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
        <p className="text-justify md:w-[700px] text-lg">
          I am a dedicated front-end developer focused on creating attractive
          and user-friendly websites. I am passionate about translating design
          concepts into interactive digital experiences and continuously
          improving my skill set to stay updated with the latest industry
          trends. My portfolio showcases a variety of projects that demonstrate
          my ability to deliver responsive and dynamic web applications.
        </p>
        <div className="flex flex-wrap justify-evenly">
          <div className="relative m-2">
            <div className=" absolute bg-pink-700 blur-sm -inset-0.3 border border-white w-28 h-16  rounded-sm  "></div>
            <div className=" relative flex flex-col justify-center items-center bg-black w-28 h-16 rounded-sm">
              <p className="font-bold text-lg">Experience</p>
              <p className="font-bold text-sm">2 years</p>
            </div>
          </div>
          <div className="relative m-2">
            <div className=" absolute bg-pink-700 blur-sm -inset-0.3  border border-white w-28 h-16 rounded-sm  "></div>
            <div className=" relative flex flex-col justify-center items-center bg-black w-28 h-16 rounded-sm">
              <p className="font-bold text-lg">Projects</p>
              <p className="font-bold text-sm">3 Projects</p>
            </div>
          </div>
          <div className="relative m-2">
            <div className=" absolute bg-pink-700 blur-sm -inset-0.3 border border-white w-28 h-16 rounded-sm  "></div>
            <div className=" relative flex flex-col justify-center items-center bg-black w-28 h-16 rounded-sm">
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
    </div>
  );
};

export default About;
