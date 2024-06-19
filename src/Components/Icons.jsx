import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
const Icons = () => {
  return (
    <>
      <div className="flex gap-4 m-4 w-full mx-auto xl:px-20">
        <SocialIcons text={"LinkedIn"}>
          <CiLinkedin size={30} className=" cursor-pointer " />
        </SocialIcons>

        <SocialIcons text={"Github"}>
          <FaGithub size={30} className=" cursor-pointer " />
        </SocialIcons>
      </div>
    </>
  );
};

export default Icons;
