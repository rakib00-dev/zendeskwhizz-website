"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  return (
    <section id="contact" className="baseContainer">
      <div className="px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-0">
        <div className="flex flex-col gap-15 py-10 md:py-20">
          <h2 className="text-4xl font-bold ">
            <span className="pb-2 border-b-4 border-[var(--primary-color)]">
              Get
            </span>{" "}
            in Touch
          </h2>
          <div className="grid">
            <div className="flex flex-col gap-5">
              <div className="flex justify-start gap-2">
                <div className="p-4 h-fit rounded-full border text-gray-400 bg-gray-100 w-fit">
                  <FaPhoneAlt className="size-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Phone</span>{" "}
                  <Link href="tel:+880 1764-571348">+880 1764-571348</Link>
                </div>
              </div>
              <div className="flex justify-start gap-2">
                <div className="p-4 h-fit rounded-full border text-gray-400 bg-gray-100 w-fit">
                  <IoMdMail className="size-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Email</span>{" "}
                  <Link href={"mailto:info@cxcourseschool.com"}>
                    info@cxcourseschool.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-3 py-6 px-6 pr-15 bg-white shadow-xl mb-5 w-fit rounded -top-10 relative">
          <Form />
        </div>
      </div>
    </section>
  );
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      id="form"
      action="https://api.web3forms.com/submit"
      method="POST"
      className="mx-auto w-full mt-8 mb-8 relative"
      // onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="access_key"
        value="d31b0f00-633b-482e-a008-4a2e63a862bb"
      />
      <div id="name-email-container" className="flex gap-4 mb-4">
        <div id="name-container" className="w-full">
          <label htmlFor="name" className="text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            className="p-3 border border-gray-300 rounded-md w-full mt-1"
          />
        </div>
        <div id="email-container" className="w-full">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
            className="p-3 border border-gray-300 rounded-md w-full mt-1"
          />
        </div>
      </div>
      <div id="email-container" className="w-full">
        <label htmlFor="email" className="text-sm font-medium text-gray-600">
          Service
        </label>
        <select
          name="service"
          id="service"
          required
          className="p-3 border border-gray-300 rounded-md w-full mt-1"
        >
          <option value="Manychat">Manychat</option>
          <option value="Intercom ">Intercom </option>
          <option value="Zendesk">Zendesk</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div id="message-container" className="w-full mb-4">
        <label htmlFor="message" className="text-sm font-medium text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          spellCheck="false"
          className="p-3 border border-gray-300 rounded-md w-full h-32 mt-1 resize-none"
        ></textarea>
      </div>

      <Button text="Submit" />
    </form>
  );
}

interface ButtonTypes {
  text: string;
  href?: string;
  bgColor?: string;
  className?: string;
  textSize?: string;
  padding?: string;
  target?: string;
  textColor?: string;
}

const Button = ({
  text,
  bgColor = "bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)]",
  className = "",
  padding = "px-6 py-3 max-md:px-4",
  textSize = "text-xs",
  textColor = "text-black",
}: ButtonTypes) => {
  return (
    <button
      type="submit"
      className={`transition-ease w-fit duration-200 cursor-pointer ${textColor} border-[1.5px] border-r-4 border-b-4 
      hover:border-r-[1.5px] 
      hover:translate-x-[2px] 
      hover:translate-y-[2px]
      hover:border-b-[1.5px]
      active:border-r-[1.5px] 
      active:border-b-[1.5px]
      shadow-lg
       border-black font-bold ${textSize} rounded-xs ${bgColor} ${padding} ${className}`}
    >
      {text}
    </button>
  );
};
