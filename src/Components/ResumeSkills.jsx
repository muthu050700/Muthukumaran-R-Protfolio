import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import ToolTip from "./ToolTip";

const ResumeSkills = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-7 flex-1">
      <h1 className="text-2xl font-bold ">Skills</h1>
      <p className="text-justify text-lg leading-7 px-2 md:px-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        illo eveniet nostrum minus et qui dolorum optio quo facere assumenda
        numquam aperiam,
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
