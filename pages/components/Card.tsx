import React from "react";

interface CardProps {
  link: string;
  title: string;
  text: string;
  newPage: boolean;
}

const Card = ({ link, title, text, newPage }: CardProps) => {
  return (
    <a
      href={link}
      className="card "
      target={newPage ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <h3 className="text-scratchy">{title} </h3>

      <p className="text-md">{text}</p>
    </a>
  );
};

export default Card;
