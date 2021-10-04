import React from "react";

interface ItemProps {
  name: string;
  description: string;
  link: string;
}

const Item = ({ name, description, link }) => {
  return (
    // LIST STYLE
    // <ul className="list-disc list-outside">
    //   <li className="mb-4">
    //     <a
    //       href={link}
    //       target="_blank"
    //       rel="noreferrer"
    //       className="text-blue-300 hover:text-blue-700 transition duration-200"
    //     >
    //       {name}
    //     </a>
    //     <br /> <div className="italic ml-4">{description}</div>
    //   </li>
    // </ul>

    // OTHER STYLE
    <ul className="list-disc list-outside">
      <li className="mb-4">
        <a
          href={link}
          download={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 hover:text-blue-700 transition duration-200"
        >
          {name}
        </a>
        <br /> <div className="italic ml-4">{description}</div>
      </li>
    </ul>
  );
};

export default Item;
