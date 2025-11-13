import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import Button from "../common/Button";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={`bg-[var(--dark-bg)]`}>
      <div className="max-w-7xl mx-auto w-full">
        <footer className="flex flex-col md:flex-row flex-wrap md:place-items-start w-full px-6 md:px-10 pt-20 gap-10 *:text-white">
          <div className="flex flex-col gap-10 w-full lg:w-1/2">
            <h3 className="pb-5 text-xl md:text-2xl font-bold text-gray-300 ">
              Subscribe
            </h3>
            <div className="grid gap-3 pr-10">
              <input
                type="text"
                className="border border-gray-300 w-full bg-white py-2 px-4 rounded placeholder:text-gray-300"
                placeholder="Enter your email..."
              />
              <Button text="Subscribe" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-15 max-md:py-5 md:gap-5">
            <div className="flex flex-col gap-5 md:gap-10 w-full">
              <h3 className="md:pb-5 text-xl md:text-2xl font-bold text-gray-200">
                Services
              </h3>
              <div className="flex flex-col space-y-4 text-gray-200 text-sm max-md:text-gray-300 md:text-md">
                <Link href="" className="block hover:text-gray-300 capitalize">
                  ManyChat
                </Link>
                <Link
                  href="/courses/intercom-certification"
                  className="block hover:text-gray-300 capitalize"
                >
                  Intercom
                </Link>
                <Link
                  href="/courses/fresh-desk"
                  className="block hover:text-gray-300 capitalize"
                >
                  Zendesk
                </Link>
                <Link
                  href="/courses/gorgias"
                  className="block hover:text-gray-300 capitalize"
                >
                  Other It Services
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-10 w-full">
              <h3 className="md:pb-5 text-xl md:text-2xl font-bold text-gray-200">
                About
              </h3>
              <div className="flex flex-col space-y-4 text-gray-300 text-sm max-md:text-gray-300 md:text-md">
                <Link
                  href="/contact"
                  className="block hover:text-gray-300 capitalize"
                >
                  Contact
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block hover:text-gray-300 capitalize"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="block hover:text-gray-300 capitalize"
                >
                  Terms Of Use
                </Link>
                <Link
                  href="/about"
                  className="block hover:text-gray-300 capitalize"
                >
                  About
                </Link>
                <Link
                  href="/refund-policy"
                  className="block hover:text-gray-300 capitalize"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-5 w-full">
              <h3 className="pb-5 text-xl md:text-2xl font-bold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-1 text-white text-md">
                <Link
                  href={""}
                  // target="_blank"
                  className="transition-all duration-200 p-3 bg-gray-700 hover:bg-[var(--primary-color)]"
                >
                  <FaFacebookF className="size-5" />
                </Link>
                <Link
                  href={""}
                  // target="_blank"
                  className="transition-all duration-200 p-3 bg-gray-700 hover:bg-[var(--primary-color)]"
                >
                  <FaYoutube className="size-5" />
                </Link>
                <Link
                  href={""}
                  // href={"mailto:info@cxcourseschool.com"}
                  className="transition-all duration-200 p-3 bg-gray-700 hover:bg-[var(--primary-color)]"
                >
                  <MdOutlineMail className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <div className="grid place-items-center w-full py-10 text-gray-400 bg-[var(--dark-bg)]">
          Copyright © {new Date().getFullYear()} Cxschool | Powered by Cxschool
        </div>
      </div>
    </div>
  );
};

export default Footer;
