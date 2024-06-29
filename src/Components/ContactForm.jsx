import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_maku7ua", "template_jbosbi9", form.current, {
        publicKey: "2kCSH5_rvIopNbzXF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col flex-1 justify-center">
      <p className="text-2xl xl:text-3xl font-bold  tracking-wide pb-6">
        message me
      </p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="name"
          name="name"
          required
          className="p-2 w-full rounded-sm border-2 border-solid border-slate-950"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="p-2 w-full  rounded-sm border-2 border-solid border-slate-950"
        />
        <textarea
          name="message"
          rows={6}
          placeholder="message"
          required
          className=" text-black  rounded-sm p-2 border-2 border-solid border-slate-950"
        />
        <div className="flex justify-start ">
          <button className="text-center px-3 py-2  text-lg font-medium text-white bg-[#CE5A67] hover:bg-[#C73659] w-fit  rounded-md">
            send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
