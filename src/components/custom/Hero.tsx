import React from "react";
import DeshiButton from "../common/Button";
import ModalButton from "../common/ModalButton";
import ModalCard from "../common/ModalCard";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="baseContainer flex max-md:flex-col md:justify-center md:items-center py-5 md:py-10 gap-5">
        <div className="flex flex-col gap-2 md:gap-5 md:w-4/5">
          <h1 className="text-3xl md:text-6xl font-semibold md:font-medium sansTitle text-center">
            Transforming complex customer journeys into effortless, automated
            success
          </h1>
          <p className="text-sm text-center md:w-3/5 mx-auto">
            Leverage next-generation chatbot intelligence and bulletproof web
            architecture with our hero&apos;s deep CRM expertise. Gain
            guaranteed 99.9% system reliability and a 3X increase in automated
            service resolution.
          </p>
          <div className="flex gap-3 justify-center items-center">
            <ModalButton />
            <DeshiButton
              text="Get In Touch"
              href="#contact"
              bgColor="bg-transparent hover:bg-[var(--primary-color-light)]"
              textColor="text-black"
            />
          </div>
        </div>

        <ModalCard />

        {/* <div className="h-[400px] md:w-[320px] bg-[var(--dark-bg)] text-white px-8 py-2 flex flex-col justify-center items-center gap-4">
          <div className="text-2xl uppercase">
            <span className="text-[var(--primary-color)] font-bold">Grand</span>
            Insider
          </div>
          <h2 className="text-3xl font-semibold text-center sansTitle">
            Never miss a grant opportunity.
          </h2>
          <div className="text-center">
            <p className="text-sm px-7">
              Sign up for free weekly funding updates
            </p>
            <p className="text-sm">and expert insights.</p>
          </div>
          <form className="flex flex-col justify-center items-center w-full gap-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-500 placeholder:text-gray-400 p-2 rounded w-full text-sm "
            />
            <button
              type="submit"
              className="bg-white md:px-6 py-3 px-4 text-black text-xs cursor-pointer hover:bg-gray-300"
            >
              Sign up
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
}
