/* eslint-disable @next/next/no-img-element */
import React from "react";

const OpenSeaToad = ({ name, price, traits, pic, buy }) => {
  return (
    <div className="xs:w-1/2 sm:w-1/5 px-1 my-5">
      <img src={pic} alt={name} />

      <div className="text-center">
        <button className="bg-blue-800 hover:bg-blue-500 transition duration-200 text-white text-sm rounded-full px-3 py-1">
          <a href={buy} target="_blank" rel="noreferrer">
            Buy for {price && price.toFixed(2)} Ξ
          </a>
        </button>
      </div>

      <div className="sm:px-4 m-4">
        {traits &&
          traits.map((trait) => {
            return (
              <p
                key={trait.value}
                className="xs:text-sm md:text-sm  pb-1 text-left"
              >
                <span className="font-semibold">{trait.trait_type}:</span>{" "}
                {trait.value}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default OpenSeaToad;
