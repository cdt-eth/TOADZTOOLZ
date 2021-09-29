import React from "react";

interface LinkProps {
  text: string;
  link: string;
  newPage: boolean;
  passedClasses: string;
}

const Link = ({ link, passedClasses, newPage, text }: LinkProps) => {
  return (
    <a
      href={link}
      className={passedClasses}
      target={newPage ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default Link;
