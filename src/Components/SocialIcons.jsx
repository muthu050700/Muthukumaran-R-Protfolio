import { useRef, useState } from "react";
const SocialIcons = ({ text, children }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <div
      className="flex items-center dark:bg-white group dark:text-[#C73659] bg-[#C73659] hover:bg-[#C73659] hover:dark:bg-[#C73659] px-3 py-3 text-white rounded-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`${hovered && " text-white rounded-full"} `}>
        {children}
      </div>

      <div
        style={{ width: hovered ? ref.current.offsetWidth || 0 : 0 }}
        className="  overflow-x-hidden transition-all duration-500 ease-out  "
      >
        <span
          ref={ref}
          className="pl-1 pr-3 text-white  text-lg  font-medium  "
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
