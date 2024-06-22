import { ReactTyped } from "react-typed";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import AboutContent from "./AboutContent";
const About = () => {
  return (
    // <div className=" text-white h-screen md:flex justify-center flex-col  ">
    //   <div className="flex flex-col justify-center items-center mt-28 md:mt-10 m-10">
    //     <h1 className="font-bold text-2xl">About</h1>
    //     <p className=" font-normal text-lg">My Introduction</p>
    //   </div>
    //   <div className=" flex flex-col gap-5 md:justify-between md:items-center md:flex-row md:mt-4 max-w-[1224px] mx-auto px-4">
    //     <div className="flex flex-col w-[500px]">
    //       <img
    //         src="./assets/profile-img.jpeg"
    //         alt="img"
    //         className="w-[250px] h-[200px] md:w-[350px] md:h-[350px] rounded-lg"
    //       />
    //     </div>
    //     <div className="flex flex-col justify-center gap-5">
    //       <h3 className="lg:text-3xl md:text-2xl text-[18px]">
    //         I'm a Muthukumaran and
    //         <ReactTyped
    //           className="pl-2"
    //           strings={["Front-end Developer.", "React Js Developer."]}
    //           typeSpeed={40}
    //           backSpeed={50}
    //           loop
    //         />
    //       </h3>
    //       <p className="text-justify md:w-[700px] text-lg leading-7">
    //         I'am a dedicated front-end developer focused on creating attractive
    //         and user-friendly websites. I am passionate about translating design
    //         concepts into interactive digital experiences and continuously
    //         improving my skill set to stay updated with the latest industry
    //         trends. My portfolio showcases a variety of projects that
    //         demonstrate my ability to deliver responsive and dynamic web
    //         applications.
    //       </p>
    //       <div className="flex flex-wrap justify-between">
    //         <div className="relative m-2">
    //           <div className=" absolute bg-pink-700 blur-sm -inset-0.3 border border-white w-28 h-16  rounded-sm  "></div>
    //           <div className=" relative flex flex-col justify-center items-center bg-black w-28 h-16 rounded-sm">
    //             <p className="font-bold text-lg">Experience</p>
    //             <p className="font-bold text-sm">2 years</p>
    //           </div>
    //         </div>
    //         <div className="relative m-2">
    //           <div className=" absolute bg-pink-700 blur-sm -inset-0.3  border border-white w-28 h-16 rounded-sm  "></div>
    //           <div className=" relative flex flex-col justify-center items-center bg-black w-28 h-16 rounded-sm">
    //             <p className="font-bold text-lg">Projects</p>
    //             <p className="font-bold text-sm">3 Projects</p>
    //           </div>
    //         </div>
    //         <div className="relative m-2">
    //           <div className=" absolute bg-pink-700 blur-sm -inset-0.3 border border-white w-28 h-16 rounded-sm  "></div>
    //           <div className=" relative flex flex-col justify-center items-center bg-black w-28 h-16 rounded-sm">
    //             <p className="font-bold text-lg">Language</p>
    //             <p className="font-bold text-sm">English</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <button className=" bg-orange-700 w-36 py-2 px-4 rounded-sm">
    //           Download CV
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex gap-4 m-4 w-full max-w-[1224px] mx-auto">
    //     <SocialIcons text={"LinkedIn"}>
    //       <CiLinkedin size={30} className=" cursor-pointer " />
    //     </SocialIcons>
    //     <SocialIcons text={"Github"}>
    //       <FaGithub size={30} className=" cursor-pointer " />
    //     </SocialIcons>
    //   </div>
    // </div>
    <>
      <div className=" py-20 md:py-20 bg-green-400 container mx-auto flex flex-col justify-center">
        <div className="flex flex-col items-center mb-10">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">About</h1>
          <p className="font-medium text-lg md:text-xl lg:text-2xl md:pt-2 lg:pt-3">
            My Introduction
          </p>
        </div>
        <AboutContent />
      </div>
    </>
  );
};

export default About;
