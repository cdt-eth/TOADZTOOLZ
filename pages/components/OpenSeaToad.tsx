/* eslint-disable @next/next/no-img-element */
import React from "react";

const OpenSeaToad = ({ name, price, traits, pic, buy }) => {
  // console.log("traits", traits);

  return (
    <div className="xs:w-1/2 sm:w-1/5 px-1 my-5">
      {/* <p className="text-lg pb-3 text-center">#{name}</p> */}
      <p className=" xs:text-sm md:text-lg	text-scratchy pb-3 text-center">
        {traits && traits[0] && traits[0].value}
      </p>

      <img src={pic} alt={name} />

      {/* <p>
        {traits.map((trait) => {
          trait;
        })}
      </p> */}

      <div className="text-center">
        <button className="bg-blue-800 hover:bg-blue-500 transition duration-200 text-white text-sm rounded-full px-3 py-1">
          <a href={buy} target="_blank" rel="noreferrer">
            {price && price.toFixed(2)} Ξ
          </a>
        </button>
      </div>
    </div>
  );
};

export default OpenSeaToad;
