"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

import ListItem from "../common/ListItem";
import Button from "../common/Button";
import Intercom from "@intercom/messenger-js-sdk";
import ModalButton from "../common/ModalButton";

const Navbar: React.FC = () => {
  Intercom({
    app_id: "vitkh011",
  });

  const user = false;

  const scrollToTop = () => window.scrollTo(0, 0);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navBarFix = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navBarFix.current) return;
      if (window.scrollY >= 82) {
        navBarFix.current.style.position = "sticky";
      } else {
        navBarFix.current.style.position = "";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`mx-auto transition-all w-full h-20 bg-white/30 relative top-0 z-50 `}
        ref={navBarFix}
      >
        <nav className="relative flex justify-between  items-center px-4 md:px-12 py-4 max-w-7xl w-full h-20 m-auto lg:py-2.5">
          <div className="absolute inset-0 backdrop-blur-sm -z-10" />

          <div className="text-md font-medium w-32 md:w-64 md:text-lg">
            <Link
              href="/"
              className="flex items-center font-bold text-xl md:text-[1.7rem]"
              onClick={scrollToTop}
            >
              <span className="text-[var(--text-primary-color)]">
                cx <span className="text-black">{" | "}</span>{" "}
                <span className="text-black"> services</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-end items-center">
            <ul className="flex justify-end mx-auto items-center gap-5">
              <ListItem href="/" onClick={scrollToTop}>
                home
              </ListItem>
              <ListItem href="#pricing" onClick={scrollToTop}>
                Pricing
              </ListItem>
              <ListItem href="#services" onClick={scrollToTop}>
                Services
              </ListItem>
              <ListItem href="#about" onClick={scrollToTop}>
                About
              </ListItem>
              <ListItem href="#contact" onClick={scrollToTop}>
                Contact
              </ListItem>
              {!user ? (
                <div className="flex gap-2">
                  {/* <button className=" bg-transparent hover:bg-[var(--primary-color)] px-4 py-1.5 text-xs md:text-sm transition-all w-fit duration-300 cursor-pointer text-black font-bold rounded border border-[var(--primary-color)]">
                    Login
                  </button> */}
                  <ModalButton />
                </div>
              ) : (
                <div className="relative flex gap-2">
                  {user && <Button href="/dashboard" text="Dashboard" />}
                </div>

                // <div className="relative flex gap-2">
                //   <Image
                //     id="avatarButton"
                //     width={20}
                //     height={20}
                //     data-dropdown-toggle="userDropdown"
                //     data-dropdown-placement="bottom-start"
                //     src="/images/navbar/user.png"
                //     alt="User dropdown"
                //     className="relative w-10 h-10 rounded-full cursor-pointer border"
                //     onClick={() => setIsUserClicked((prev) => !prev)}
                //   />

                //   <div
                //     id="userDropdown"
                //     className={`absolute top-10 right-0 z-10 bg-white divide-y rounded-lg shadow-sm w-44 overflow-hidden ${
                //       isUserClicked ? 'block' : 'hidden'
                //     }`}
                //   >
                //     <div className="px-4 py-3 text-sm text-gray-900 ">
                //       <div className="text-xs font-bold">
                //         {user?.given_name} {user?.family_name}
                //       </div>
                //       <div className="font-medium truncate text-xs">
                //         {user?.email}
                //       </div>
                //     </div>
                //     <ul
                //       className="py-2 text-sm text-gray-700 "
                //       aria-labelledby="avatarButton"
                //     >
                //       <li>
                //         <Link
                //           href="#"
                //           className="block px-4 py-2 hover:bg-gray-100  hover:text-black"
                //         >
                //           Dashboard
                //         </Link>
                //       </li>
                //       <li>
                //         <Link
                //           href="#"
                //           className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                //         >
                //           Settings
                //         </Link>
                //       </li>
                //     </ul>
                //     <div className="">
                //       <LogoutLink className="block px-4 py-2 text-sm font-bold hover:bg-red-300 hover:text-black bg-red-600 text-white">
                //         Sign out
                //       </LogoutLink>
                //     </div>
                //   </div>
                // </div>
              )}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative flex justify-center items-center gap-5">
            <div className="md:hidden ">
              {user && <Button href="/dashboard" text="Dashboard" />}
              {/* {!user ? (
                <></>
              ) : (
                <div className="relative flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsUserClicked((prev) => !prev);
                    }}
                  >
                    <Image
                      id="avatarButton"
                      width={20}
                      height={20}
                      data-dropdown-toggle="userDropdown"
                      data-dropdown-placement="bottom-start"
                      src="/images/navbar/user.png"
                      alt="User dropdown"
                      className="relative w-10 h-10 rounded-full cursor-pointer border z-30"
                    />
                  </button>
                  {isUserClicked && (
                    <div
                      id="userDropdown"
                      className={`transition-all absolute top-10 right-0 z-10 bg-white divide-y rounded-lg shadow-sm w-44 overflow-hidden ${''}`}
                    >
                      <div className="px-4 py-3 text-sm text-gray-900 ">
                        <div className="text-xs font-bold">
                          {user?.given_name} {user?.family_name}
                        </div>
                        <div className="font-medium truncate text-xs">
                          {user?.email}
                        </div>
                      </div>
                      <ul
                        className="py-2 text-sm text-gray-700 "
                        aria-labelledby="avatarButton"
                      >
                        <li>
                          <Link
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100  hover:text-black"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                          >
                            Settings
                          </Link>
                        </li>
                      </ul>
                      <div className="">
                        <LogoutLink className="block px-4 py-2 text-sm font-bold hover:bg-red-300 hover:text-black bg-red-600 text-white">
                          Sign out
                        </LogoutLink>
                      </div>
                    </div>
                  )} 
                </div>
              )}*/}
            </div>
            {!isNavOpen ? (
              <RiMenu3Fill
                className="text-3xl"
                onClick={() => setIsNavOpen(true)}
              />
            ) : (
              <RiCloseFill
                className="text-3xl"
                onClick={() => setIsNavOpen(false)}
              />
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <OutsideClickHandler onOutsideClick={() => setIsNavOpen(false)}>
        {/* {isNavOpen && ( */}
        <div
          className={`fixed transition-all duration-300 flex flex-col w-full pb-10 h-full pl-5 md:px-10 pt-5 gap-10 bg-white overflow-y-auto lg:hidden z-50 ${
            isNavOpen ? "top-20" : "-top-[200%]"
          }`}
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

          <ul className="flex flex-col leading-6 mr-4 overflow-x-auto w-full mb-10">
            <ListItem href="/" onClick={() => setIsNavOpen(false)}>
              Home
            </ListItem>
            <ListItem href="#pricing" onClick={() => setIsNavOpen(false)}>
              Pricing
            </ListItem>
            <ListItem href="#services" onClick={() => setIsNavOpen(false)}>
              Services
            </ListItem>
            <ListItem href="#about" onClick={() => setIsNavOpen(false)}>
              About
            </ListItem>
            <ListItem href="#contact" onClick={() => setIsNavOpen(false)}>
              Contact
            </ListItem>
            <div className="grid place-items-start">
              {user ? (
                <div className="flex gap-2">
                  <Button href="/dashboard" text="Dashboard" />
                </div>
              ) : (
                <div className="flex gap-2">
                  <ModalButton />
                </div>
              )}
            </div>
          </ul>
        </div>
        {/* )} */}
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
