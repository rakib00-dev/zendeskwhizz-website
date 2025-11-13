import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import Button from './Button';

interface CardTypes {
  src: string;
  h5: string;
  href?: string;
  imgClass?: string;
  price?: string;
  fiveStar?: boolean;
}

const Card = ({
  src,
  imgClass = 'bg-gray-200',
  href = '/start-course',
  h5 = 'The secrets of cakes',
  fiveStar = false,
  price = '500',
}: CardTypes) => {
  return (
    <div className="grid w-auto bg-gray-200/10 p-4 shadow-xl rounded border h-[350px]">
      <div className="relative w-full h-[170px]">
        <Image
          src={src}
          alt={src}
          fill
          className={`object-contain rounded p-10 border shadow-xs border-gray-200 ${imgClass}`}
        />
      </div>
      <span className="flex gap-2 font-bold justify-end items-center mt-2 mb-1">
        {fiveStar ? (
          <span className="flex">
            <FaStar className="fill-amber-400 text-xl" />
            <FaStar className="fill-amber-400 text-xl" />
            <FaStar className="fill-amber-400 text-xl" />
            <FaStar className="fill-amber-400 text-xl" />
            <FaStar className="fill-amber-400 text-xl" />
          </span>
        ) : (
          <span className="flex">
            <FaStar className="fill-amber-400 text-xl" />
            <FaStar className="fill-amber-400 text-xl" />
            <FaStar className="fill-amber-400 text-xl" />
            <FaStar className="fill-amber-400 text-xl" />
            <FaRegStarHalfStroke className="fill-amber-400 text-xl" />
          </span>
        )}
      </span>
      <h5 className="font-bold text-xl pt-2 pb-2">{h5}</h5>
      <div className="flex-col flex md:flex-row-reverse justify-between items-center">
        <h3 className="font-bold text-xl md:text-2xl">${price}</h3>
        <Button
          text="start course"
          href={`/courses${href}`}
          className="uppercase text-[var(--primary-color)] font-bold border-b-2 border-b-[var(--primary-color)] py-1 w-fit"
        />
      </div>
    </div>
  );
};

export default Card;
