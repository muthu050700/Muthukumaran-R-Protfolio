const ToolTip = ({ children, text }) => {
  return (
    <div className=" group relative inline-block">
      <div className=" flex justify-center items-center ">
        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition absolute  bg-[#C73659] text-[neutral-900] rounded-sm py-1 px-3 text-sm whitespace-nowrap top-[-30px] text-center">
          {text}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center shadow-md shadow-black   bg-neutral-900 text-[#C73659] cursor-pointer  py-2 px-2 w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[110px] xl:h-[100px] gap-4 hover:scale-105 duration-300 ">
        {children}
      </div>
    </div>
  );
};

export default ToolTip;
