import { IoPerson } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Icons from "./Icons";
const ContactDetails = () => {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <p className="text-2xl lg:text-3xl font-bold  tracking-wide">
        React to me!
      </p>
      <p className="text-lg lg:text-xl text-justify  leading-7 font-medium">
        Discuss a Project or just want to say Hi? My inbox is open for all.
      </p>

      <div className="flex items-center gap-4">
        <div>
          <IoPerson size={30} className=" text-[#C73659]" />
        </div>
        <div>
          <p className="text-lg lg:text-xl text-justify  leading-7 font-bold">
            Name
          </p>
          <p className="text-sm lg:text-lg text-justify  leading-7 font-medium">
            Muthukumaran R
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <FaMapMarkerAlt size={30} className=" text-[#C73659]" />
        </div>
        <div>
          <p className="text-lg lg:text-xl text-justify  leading-7 font-bold">
            Address
          </p>
          <p className="text-sm lg:text-lg text-justify  leading-7 font-medium">
            Chennai,India
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <IoMdMail size={30} className=" text-[#C73659]" />
        </div>
        <div>
          <p className="text-lg lg:text-xl text-justify  leading-7 font-bold">
            Email
          </p>
          <p className="text-sm lg:text-lg text-justify  leading-7 font-medium">
            muthukumaran050700@gmail.com
          </p>
        </div>
      </div>
      <div>
        <p className="text-2xl lg:text-3xl font-bold  tracking-wide">
          Stay connected
        </p>
        <Icons contact={true} />
      </div>
    </div>
  );
};

export default ContactDetails;
