import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

interface TestimonialCardTypes {
  src: string;
  p: string;
  fiveStar?: boolean;
  title?: string;
  name: string;
  borderCss?: string;
}

const TestimonialCard = ({
  src,
  p = "The secrets of cakes",
  fiveStar = false,
  title = "ZenDesk Administrators",
  name,
  borderCss = "border-black",
}: TestimonialCardTypes) => {
  return (
    <div
      className={`grid w-auto bg-gray-50 place-items-center p-4 border ${borderCss}`}
    >
      <div className="grid place-items-center">
        <Image
          src={src}
          alt={src}
          width={60}
          height={60}
          // style={{ width: '100%', height: 'auto' }}
          className="rounded-full"
        />
        <h5 className="font-bold">{name}</h5>
        <span>{title}</span>
      </div>
      <span className="flex gap-1 justify-start items-center font-medium">
        {fiveStar ? (
          <>
            <FaStar className="fill-amber-400 text-2xl" />
            <FaStar className="fill-amber-400 text-2xl" />
            <FaStar className="fill-amber-400 text-2xl" />
            <FaStar className="fill-amber-400 text-2xl" />
            <FaStar className="fill-amber-400 text-2xl" />
          </>
        ) : (
          <>
            <FaStar className="fill-amber-400 text-2xl" />
            <FaStar className="fill-amber-400 text-2xl" />
            <FaStar className="fill-amber-400 text-2xl" />
            <FaStar className="fill-amber-400 text-2xl" />
            <FaStar className="fill-amber-400 text-2xl" />
            <FaRegStarHalfStroke className="fill-amber-400 text-2xl" />
          </>
        )}
      </span>
      <p className="text-md py-4 text-center">{p}</p>
    </div>
  );
};

export default TestimonialCard;
