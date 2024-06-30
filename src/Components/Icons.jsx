import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
const Icons = ({ contact }) => {
  return (
    <>
      <div
        className={
          contact
            ? `flex gap-4 m-4 w-full mx-auto xl:px-0`
            : `flex gap-4 m-4 w-full mx-auto xl:px-20`
        }
      >
        <SocialIcons text={"LinkedIn"}>
          <a
            href="https://www.linkedin.com/in/muthukumaran0519/"
            target="blank"
          >
            <CiLinkedin size={30} className=" cursor-pointer " />
          </a>
        </SocialIcons>

        <SocialIcons text={"Github"}>
          <a
            href="https://github.com/muthu050700?tab=repositories"
            target="blank"
          >
            <FaGithub size={30} className=" cursor-pointer " />
          </a>
        </SocialIcons>
      </div>
    </>
  );
};

export default Icons;
