import React, { useState } from "react";
import "@material-tailwind/react"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3c5e7d10-758c-11ed-a126-b172cf164538";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl mt-10 text-center">Thank you!</div>
        <div className="text-md text-center mt-2">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0 mt-10">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-transparent text-sm border-0 border-b-2 border-b-blue-100 focus:outline-none w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 mt-5">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-transparent text-sm border-0 border-b-2 border-b-blue-100 focus:outline-none w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 mt-5">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-transparent text-sm border-0 border-b-2 border-b-blue-100 focus:outline-none w-full resize-none"
          required
          rows={8}
        />
      </div>
      <div className="mb-3 pt-0 flex flex-col items-center">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;