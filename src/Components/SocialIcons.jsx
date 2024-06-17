import React from "react";

import { useRef, useState } from "react";
const SocialIcons = ({ text, children }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <div
      className="flex items-center bg-red-600 px-3 py-3 text-black rounded-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`${hovered && "bg-orange-600 text-blue-900 rounded-full"} `}
      >
        {children}
      </div>

      <div
        style={{ width: hovered ? ref.current.offsetWidth || 0 : 0 }}
        className="  overflow-x-hidden transition-all duration-500 ease-out bg-white "
      >
        <span ref={ref} className=" text-black pl-1 pr-3  ">
          {text}
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
