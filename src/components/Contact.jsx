import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-slate-800 flex justify-center items-center p-4 "
    >
      <form className="space-y-8 w-full max-w-[780px]">
        <div className="flex justify-center ">
          <p className="text-white text-4xl inline font-semibold border-b-4 border-red-600">
            Contact
          </p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row">
          <input
            type="text"
            className="input rounded-xl"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="input rounded-xl"
            placeholder="Your Email"
          />
        </div>
        <input type="text" className="input" placeholder="Subject" />
        <textarea className="textarea" placeholder="Your Message"></textarea>
        <button className="btn btn-md bg-red-600 hover:bg-red-500 md:btn-lg transition-all rounded-xl ">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
