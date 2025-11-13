"use client";
import { useModalState } from "@/utils/modalState";
import CopyModal from "./CopyModal";
import { RxCross2 } from "react-icons/rx";

export default function ModalCard() {
  const modal = useModalState();
  return (
    <div
      className={`transition-all duration-300 fixed h-[400px] md:w-[580px] bg-gray-300/60 border-black border-2 text-white px-8 py-2 flex flex-col justify-center items-center gap-4 z-20 ${
        !modal.isModalOpen ? "-top-[40rem]" : "top-30"
      }`}
    >
      <div className="absolute inset-0 backdrop-blur-sm -z-10" />
      <div className="absolute top-5 right-5">
        <button
          className="text-black font-bold bg-[var(--primary-color)] cursor-pointer"
          onClick={modal.toggleIsModalOpen}
        >
          <RxCross2 className="size-5 md:size-8" />
        </button>
      </div>
      <h2
        className="text-4xl md:text-5xl text-black font-bold"
        style={{ fontFamily: "sans-serif" }}
      >
        <span className="bg-[var(--primary-color)]"> Pick A Date </span> <br />
        On Calendly
      </h2>
      <p className="text-gray-700">
        Pick A date and book a call with your flaxible time
      </p>
      <CopyModal />
    </div>
  );
}
