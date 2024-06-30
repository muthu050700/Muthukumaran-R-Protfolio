import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import ToolTip from "./ToolTip";

const ResumeSkills = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-7 flex-1 ">
      <h1 className="text-2xl font-bold ">Skills</h1>
      <p className="text-justify text-lg leading-7 px-2 md:px-0">
        I specialize in front-end development with expertise in HTML, CSS,
        JavaScript, React, Tailwind CSS, and Bootstrap. I create responsive,
        visually engaging web interfaces with efficient Git version control,
        focusing on user experience and modern design standards to meet project
        requirements.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-4 lg:gap-6">
        <ToolTip text={"HTML 5"}>
          <IoLogoHtml5 size={50} />
        </ToolTip>
        <ToolTip text={"CSS"}>
          <IoLogoCss3 size={50} />
        </ToolTip>
        <ToolTip text={"JavaScript"}>
          <IoLogoJavascript size={50} />
        </ToolTip>
        <ToolTip text={"React"}>
          <IoLogoReact size={50} />
        </ToolTip>
        <ToolTip text={"Bootstrap"}>
          <FaBootstrap size={50} />
        </ToolTip>
        <ToolTip text={"Tailwind"}>
          <RiTailwindCssFill size={50} />
        </ToolTip>
      </div>
    </div>
  );
};

export default ResumeSkills;
