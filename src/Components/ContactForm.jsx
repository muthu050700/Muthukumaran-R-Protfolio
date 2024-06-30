import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const form = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_maku7ua", "template_jbosbi9", form.current, {
        publicKey: "2kCSH5_rvIopNbzXF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setErrorMsg("Message sent sucessfully ✅");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorMsg("Form submission failed ❌");
        }
      );
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  return (
    <div className="flex flex-col flex-1 justify-center">
      <p className="text-2xl xl:text-3xl font-bold  tracking-wide pb-6">
        message me
      </p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="p-2 w-full rounded-sm border-2 border-solid border-slate-950 text-black "
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="p-2 w-full  rounded-sm border-2 border-solid border-slate-950 text-black "
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          className=" text-black  rounded-sm p-2 border-2 border-solid border-slate-950"
        />
        <p
          className={`${
            errorMsg !== "Form submission failed"
              ? "font-medium text-lg md:text-xl lg:text-2xl dark:text-green-500 text-green-700 tracking-wide "
              : "font-medium text-lg md:text-xl lg:text-2xl dark:text-red-500 text-red-700 tracking-wide"
          }`}
        >{`${errorMsg !== "" ? errorMsg : errorMsg}`}</p>
        <button
          type="submit"
          className="text-center px-3 py-2  text-lg font-medium text-white bg-[#CE5A67] hover:bg-[#C73659] w-fit  rounded-md"
        >
          send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
