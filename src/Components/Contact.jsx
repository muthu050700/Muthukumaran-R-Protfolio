import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";

const Contact = ({ handleDarkMode, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className={theme ? "dark" : " light"}
    >
      <div className="dark:bg-neutral-900   lg:gap-12 md:px-10 container mx-auto pt-20 pb-10  lg:px-18 ">
        <div className="text-center pt-20 pb-10">
          <p className="font-bold pb-4  text-4xl md:text-4xl lg:text-5xl dark:text-white tracking-wide ">
            Contact Me
          </p>
          <p className="font-medium text-lg md:text-xl lg:text-2xl md:pt-2 lg:pt-3 dark:text-white tracking-wide">
            get in touch
          </p>
        </div>
        <div className="lg:justify-center lg:items-center  dark:text-white flex flex-col lg:flex-row gap-10 lg:px-20 px-2 md:px-0 pb-20 ">
          <ContactDetails />
          <ContactForm />
        </div>
        <DarkMode handleDarkMode={handleDarkMode} theme={theme} />
      </div>
    </motion.div>
  );
};

export default Contact;
