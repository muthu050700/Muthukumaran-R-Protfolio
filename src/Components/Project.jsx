import dataForProject from "../utils.js/ProjectImage";
import { useState, useRef } from "react";
import ProjectImageContent from "./ProjectImageContent";
import { BsDashLg } from "react-icons/bs";
const Project = () => {
  const [visible, setVisible] = useState(3);
  const ref = useRef("show more");
  const handleShowMore = () => {
    if (ref.current.innerText !== "show more") {
      setVisible(3);
    } else {
      setVisible((preValue) => preValue + 3);
    }
  };
  return (
    <>
      <div className=" bg-zinc-900 md:justify-center md:items-center  text-white flex flex-col  gap-10 lg:gap-12 md:px-10 container mx-auto py-20 lg:px-20">
        <div className="text-center pt-20  ">
          <p className="font-bold text-4xl pb-4 ">Projects</p>
          <p>Check my work</p>
        </div>
        <div className="grid place-content-center gap-10 md:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
          {dataForProject.slice(0, visible).map((value, index) => {
            return (
              <div key={index}>
                <ProjectImageContent value={value} />
              </div>
            );
          })}
        </div>
        <button
          onClick={handleShowMore}
          ref={ref}
          className=" bg-orange-500 px-4 py-2 rounded-md font-medium text-lg hover:text-black"
        >
          {dataForProject.length === visible || dataForProject.length > visible
            ? "show more"
            : "show less"}
        </button>
      </div>
    </>
  );
};

export default Project;
