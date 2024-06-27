import React from "react";

const ProjectImageContent = ({ value }) => {
  const { image, source, demo } = value;
  return (
    <div className="shadow-lg shadow-[#3a3c3e]  hover:scale-105 duration-300 w-[350px] h-[450px] bg-slate-400 flex flex-col items-center p-2 rounded-lg">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" group container rounded-md  content-div "
      >
        <div className=" opacity-0 group-hover:opacity-100">
          <span></span>
          <div className="flex justify-center items-center h-[250px] ">
            <a href={`${demo}`} target="blank">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href={`${source}`} target="blank">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>Todo Project</p>
        <div className="flex list-none gap-2">
          <li>React</li>
          <li>Tailwind</li>
        </div>
      </div>
    </div>
  );
};

export default ProjectImageContent;
