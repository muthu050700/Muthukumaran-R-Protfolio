import { ReactTyped } from "react-typed";
const Home = () => {
  return (
    <div className=" text-white flex flex-col justify-between items-center md:flex-row md:mt-36 max-w-[1224px] mx-auto px-4">
      <div>
        <p className="font-bold text-lg md:text-2xl pb-5">Software Developer</p>
        <h2 className=" text-4xl md:text-5xl font-bold pb-5">
          Hello 👋 I'm <br />
          <span className="md:text-6xl text-4xl">Muthukumaran R</span>
        </h2>
        <div className="flex pb-5">
          <p className="font-bold text-xl md:text-3xl">And I'm a</p>
          <ReactTyped
            className="pl-2 font-bold md:text-3xl text-xl"
            strings={["Front-end Developer", "React Js Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
      </div>

      <div className=" blob">
        {/* <img src="./assets/profile-img.jpeg" alt="img" className="" /> */}
      </div>
    </div>
  );
};
export default Home;
