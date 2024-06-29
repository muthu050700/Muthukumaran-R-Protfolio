const ProjectImageContent = ({ value }) => {
  const { image, source, demo, name, used } = value;
  return (
    <div className="shadow-lg shadow-[#3a3c3e]  hover:scale-105 duration-300 w-[340px] h-[350px] bg-slate-400 flex flex-col items-center px-1 py-2 rounded-lg">
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
      <div className="flex flex-col gap-2 my-2">
        <p className=" text-center text-xl font-bold">{name}</p>
        <p className="font-medium text-xl">{used.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectImageContent;
