import AboutContent from "./AboutContent";
const About = () => {
  return (
    <>
      <div className=" py-20   mt-[77px]   bg-green-400 container mx-auto flex flex-col justify-center">
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
