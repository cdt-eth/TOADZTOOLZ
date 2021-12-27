/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ToolProps {
  name: string;
  pic: string;
  description: string;
  link: string;
}

const Tool = ({ name, pic, description, link }: ToolProps) => {
  return pic ? (
    <div className="my-4 xs:w-1/2 sm:w-1/5 px-2 ">
      <a
        className="cursor-pointer "
        href={link}
        download={link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-2xl transform hover:scale-105 transition duration-200"
          src={`/toolz/${pic}`}
          alt={name}
        />

        <span className="text-blue-300 xs:flex xs:justify-evenly sm:justify-start hover:text-blue-700 transition py-3 duration-200 text-scratchy">
          {" "}
          {name}
        </span>
      </a>
      <div className="xs:hidden sm:block italic">{description}</div>
    </div>
  ) : (
    <></>
  );
};

export default Tool;
