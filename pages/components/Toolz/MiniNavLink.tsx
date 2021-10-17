/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

interface MiniNavLink {
  link: string;
  newPage: boolean;
  text: string;
  pic: string;
  alt: string;
}

const MiniNavLink = ({ link, newPage, text, pic, alt }: MiniNavLink) => {
  return (
    <div className="flex px-2 transform hover:scale-110 transition duration-200">
      <Link passHref href={`${link}`}>
        <a
          className="text-center text-scratchy transform hover:scale-110 transition duration-200"
          target={`${newPage ? "_blank" : "_self"}`}
        >
          {text}
          <img className="h-16 m-auto mt-1" src={`${pic}`} alt={`${alt}`} />
        </a>
      </Link>
    </div>
  );
};

export default MiniNavLink;
