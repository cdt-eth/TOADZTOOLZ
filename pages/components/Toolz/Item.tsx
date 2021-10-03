import React from "react";

interface ItemProps {
  name: string;
  description: string;
  link: string;
}

const Item = ({ name, description, link }) => {
  return (
    <ul className="list-disc list-outside">
      <li>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 hover:text-blue-700 transition duration-200"
        >
          {name}
        </a>
        : {description}
      </li>
    </ul>
  );
};

export default Item;
