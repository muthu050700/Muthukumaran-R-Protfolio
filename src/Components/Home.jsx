// import { ReactTyped } from "react-typed";
// import { Fade } from "react-awesome-reveal";
// const Home = () => {
//   return (
//     <div className=" text-white flex flex-col justify-between items-center md:flex-row md:mt-36 max-w-[1224px] mx-auto px-4 mt-8 h-screen">
//       {/* <Fade direction="left" delay={1} duration={2000} className=" "> */}
//       <div className="flex flex-col md:gap-6">
//         <p className="font-bold text-lg md:text-3xl pb-5 animate__animated animate__fadeInDown animate__delay-1s">
//           Software Developer
//         </p>
//         <h2
//           className=" text-4xl
//         lg:text-7xl md:text-5xl font-bold pb-5 animate__animated  animate__fadeInDown  animate__delay-1s"
//         >
//           Hello{" "}
//           <p className="animate__animated animate__headShake animate__delay-2s inline-block text-6xl animate__infinite">
//             👋
//           </p>{" "}
//           I'm <br />
//           <span className="lg:text-7xl md:text-5xl text-4xl pt-3">
//             Muthukumaran R
//           </span>
//         </h2>
//         <div className="flex pb-5 animate__animated  animate__fadeInDown  animate__delay-1s">
//           <p className="font-bold text-[18px] lg:text-4xl md:text-2xl">
//             And I'm a
//           </p>
//           <ReactTyped
//             className="pl-2 font-bold lg:text-4xl md:text-2xl text-[18px]"
//             strings={["Front-end Developer.", "React Js Developer."]}
//             typeSpeed={40}
//             backSpeed={50}
//             loop
//           />
//         </div>
//       </div>
//       {/* </Fade> */}
//       <Fade direction="right" delay={1000} duration={1000}>
//         <div className=" blob mt-6">
//           {/* <img src="./assets/profile-img.jpeg" alt="img" className="" /> */}
//         </div>
//       </Fade>
//     </div>
//   );
// };
// export default Home;
import { ReactTyped } from "react-typed";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  return (
    // <div className="m-28 text-white flex flex-col md:justify-between items-center md:flex-row md:mt-4 max-w-[1224px] mx-auto px-4   md:h-screen">
    //   {/* <Fade direction="left" delay={1} duration={2000} className=" "> */}
    //   <div className="flex flex-col flex-1 md:gap-6 justify-center">
    //     <p className="font-bold items-start text-lg md:text-3xl ">
    //       Software Developer
    //     </p>
    //     <h2
    //       className=" text-4xl
    //     lg:text-7xl md:text-5xl font-bold pb-5 "
    //     >
    //       Hello{" "}
    //       <p className="animate__animated animate__headShake animate__delay-2s inline-block text-6xl animate__infinite">
    //         👋
    //       </p>{" "}
    //       I'm <br />
    //       <span className="lg:text-7xl md:text-5xl text-4xl pt-3">
    //         Muthukumaran R
    //       </span>
    //     </h2>
    //     <div className=" pb-5 ">
    //       <p className="font-bold text-[18px] lg:text-4xl md:text-2xl">
    //         And I'm a{" "}
    //         <ReactTyped
    //           className="pl-2 font-bold lg:text-4xl md:text-2xl text-[18px]"
    //           strings={["Front-end Developer.", "React Js Developer."]}
    //           typeSpeed={40}
    //           backSpeed={50}
    //           loop
    //         />
    //       </p>
    //     </div>
    //   </div>
    //   {/* </Fade> */}
    //   {/* <Fade direction="right" delay={1000} duration={1000}> */}
    //   <div className=" blob mt-6 w-16">
    //     {/* <img src="./assets/profile-img.jpeg" alt="img" className="" /> */}
    //   </div>
    //   {/* </Fade> */}
    // </div>
    <>
      <div className=" bg-white text-black  mt-[13vh] md:mt-[11vh] lg:mt-[10vh] xl:mt-[9vh]  h-[87vh] md:h-[90vh] container mx-auto flex flex-col justify-center gap-10 md:flex-row md:items-center ">
        {/* Left side content */}
        <div className="flex flex-col ml-2 gap-2 md:flex-1 lg:gap-5">
          <p className="font-bold text-2xl md:text-3xl lg:text-5xl">
            Hello 👋 I'm
          </p>
          <p className="font-bold text-4xl md:text-5xl lg:text-7xl">
            Muthukumaran R
          </p>
          <div className="font-bold text-2xl lg:text-4xl">
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
        <div className=" blob mx-auto md:m-2 "></div>
      </div>
    </>
  );
};
export default Home;
