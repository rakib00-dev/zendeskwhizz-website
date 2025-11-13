import Link from "next/link";
import React from "react";

interface ButtonTypes {
  text: React.ReactNode;
  href?: string;
  bgColor?: string;
  className?: string;
  textSize?: string;
  padding?: string;
  target?: string;
  textColor?: string;
  onClick?: () => void;
  link?: boolean;
}

const Button = ({
  text,
  target = "",
  href = "#",
  bgColor = "bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)]",
  className = "",
  padding = "px-6 py-3 max-md:px-4",
  textSize = "text-xs",
  textColor = "text-black",
  onClick,
  link = true,
}: ButtonTypes) => {
  return (
    <>
      {!link ? (
        <button
          className={`transition-ease w-fit duration-200 cursor-pointer ${textColor} border-[1.5px] border-r-4 border-b-4 
      hover:border-r-[1.5px] 
      hover:translate-x-[2px] 
      hover:translate-y-[2px]
      hover:border-b-[1.5px]
      active:border-r-[1.5px] 
      active:border-b-[1.5px]
      shadow-lg
       border-black font-bold ${textSize} rounded-xs ${bgColor} ${padding} ${className}`}
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <Link
          href={href}
          target={target}
          className={`transition-ease w-fit duration-200 cursor-pointer ${textColor} border-[1.5px] border-r-4 border-b-4 
      hover:border-r-[1.5px] 
      hover:translate-x-[2px] 
      hover:translate-y-[2px]
      hover:border-b-[1.5px]
      active:border-r-[1.5px] 
      active:border-b-[1.5px]
      shadow-lg
       border-black font-bold ${textSize} rounded-xs ${bgColor} ${padding} ${className}`}
          onClick={onClick}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
