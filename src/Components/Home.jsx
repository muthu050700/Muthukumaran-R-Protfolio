import { ReactTyped } from "react-typed";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  return (
    <>
      <div className=" bg-white md:h-[100vh] text-black py-32 md:py-24  lg:py-44 xl:py-48 container mx-auto flex flex-col justify-center gap-10 lg:flex-row md:items-center ">
        {/* Left side content */}
        <div className="flex flex-col ml-2 gap-2 lg:flex-1 lg:gap-5  lg:pl-20">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Hello 👋 I'm
          </p>
          <p className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Muthukumaran R
          </p>
          <div className="font-bold text-2xl lg:text-3xl">
            <p>
              And I'm a
              <span>
                <ReactTyped
                  className="pl-1"
                  strings={["Front-end Developer.", "React Js Developer."]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </p>
          </div>
        </div>
        {/* Right side image */}
        <div className=" blob mx-auto md:m-2 lg:mr-20"></div>
      </div>
    </>
  );
};
export default Home;
