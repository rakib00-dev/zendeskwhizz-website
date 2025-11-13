import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { CSSProperties, HTMLElementType, ReactNode } from "react";

interface ListItemProps {
  className?: string;
  smallClassName?: string;
  href: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  children: HTMLElementType | ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  notLink?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  className,
  smallClassName,
  href,
  onMouseOver,
  onMouseOut,
  children,
  onClick,
  notLink,
  style,
}) => {
  const pathname: string = usePathname();

  return (
    <li className="pb-5 lg:pb-0 flex">
      {notLink ? (
        <span
          style={style}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={onClick}
          className={
            smallClassName
              ? smallClassName
              : `flex justify-center items-center gap-1 relative text-xl  text-gray-700 font-bold cursor-pointer transition-all duration-100 capitalize  lg:text-sm ${
                  className || ""
                }`
          }
        >
          {children}
        </span>
      ) : (
        <Link
          href={href}
          style={style}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={onClick}
          className={
            smallClassName
              ? smallClassName
              : `transition-all duration-300 flex justify-center items-center gap-1 relative text-xl font-bold cursor-pointera capitalize md:text-[1rem] hover:text-[var(--primary-color)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:flex before:justify-center before:items-center before:h-[2px] before:bg-[var(--primary-color)]
                 ${className || ""} ${
                  pathname === href
                    ? "text-[var(--primary-color-hover)] before:w-full"
                    : "text-gray-700"
                }`
          }
        >
          {children}
        </Link>
      )}
    </li>
  );
};

export default ListItem;
