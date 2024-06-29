const ResumeExperience = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-7 flex-1">
      <h1 className="text-2xl font-bold ">My Experience</h1>
      <p className="text-justify text-lg leading-7 px-2 md:px-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        illo eveniet nostrum minus et qui dolorum optio quo facere assumenda
        numquam aperiam, atque cum corporis. Sunt ratione excepturi quam
        obcaecati.
      </p>
      <div className="flex justify-center ">
        <div className="relative flex flex-col justify-center shadow-md shadow-black  items-center bg-neutral-900 text-[#C73659]  cursor-pointer py-4  w-[250px] h-[150px] gap-4 hover:scale-105 duration-300">
          <p className="font-medium text-sm">2022 - 2024 Present</p>
          <p className="font-bold text-xl">Front-End Developer</p>
          <li className="font-medium text-sm">ATOS</li>
        </div>
      </div>
    </div>
  );
};

export default ResumeExperience;
