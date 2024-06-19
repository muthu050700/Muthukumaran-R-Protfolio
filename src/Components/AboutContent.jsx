import AboutMe from "./AboutMe";
import Icons from "./Icons";

const AboutContent = () => {
  return (
    <>
      <div className="flex flex-col pl-2 pr-2 xl:flex-row lg:px-20 md:px-10 gap-5 ">
        <div>
          <div>
            <img
              src="./assets/profile-img.jpeg"
              alt="img"
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-lg "
            />
          </div>
          <div className="xl:hidden">
            <Icons />
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <AboutMe />
        </div>
      </div>
      <div className="hidden xl:flex">
        <Icons />
      </div>
    </>
  );
};

export default AboutContent;
