import React from "react";

interface CardProps {
  link: string;
  title: string;
  text: string;
}

const Card = ({ link, title, text }: CardProps) => {
  return (
    <a href={link} className="card " target="_blank" rel="noreferrer">
      <h3 className="text-scratchy">{title} </h3>
      {/* <h3 className="text-scratchy">{title} &rarr;</h3> */}
      <p className="text-md">{text}</p>
    </a>
  );
};

export default Card;
