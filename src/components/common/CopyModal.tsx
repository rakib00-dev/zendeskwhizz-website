"use client";

import React, { JSX, useState } from "react";
import { Typography, Button, Tooltip } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const COPY_URL = "https://calendly.com/rehan-cxcourseschool/30min";

export default function CopyModal(): JSX.Element {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (): void => {
    copy(COPY_URL);
    setCopied(true);
  };

  const handleMouseLeave = (): void => {
    setCopied(false);
  };

  return (
    <div>
      <Tooltip content={copied ? "Copied" : "Copy"}>
        <Link
          href={COPY_URL}
          // type="button"
          target="_blank"
          onMouseLeave={handleMouseLeave}
          onClick={handleCopy}
          className="relative flex cursor-pointer text-black items-center gap-x-3 px-4 py-2.5 lowercase bg-[var(--primary-color)]"
        >
          <Typography
            className="border-r border-gray-400/50 pr-3 font-normal"
            variant="small"
          >
            {COPY_URL}
          </Typography>
          {copied ? (
            <CheckIcon className="h-4 w-4 text-black" />
          ) : (
            <DocumentDuplicateIcon className="h-4 w-4 text-black" />
          )}
        </Link>
      </Tooltip>
    </div>
  );
}
