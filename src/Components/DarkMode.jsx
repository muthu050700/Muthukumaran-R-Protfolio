import React from "react";

const DarkMode = ({ handleDarkMode, theme }) => {
  return (
    <div className="fixed bottom-0  right-0 ">
      <button
        onClick={() => {
          handleDarkMode();
        }}
        className=" bg-[#CE5A67] hover:bg-[#C73659] text-lg font-medium text-white px-4 py-5 mb-2 lg:mr-32 xl:mr-36  mr-2 md:mr-10   w-fit rounded-full"
      >
        {theme ? " light" : "dark"}
      </button>
    </div>
  );
};

export default DarkMode;
