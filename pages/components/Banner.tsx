/* eslint-disable @next/next/no-img-element */
import React from "react";
import HardhatToadz from "./HardhatToadz";

const Banner = () => {
  return (
    <div className="mx-9">
      <div className="flex pt-4">
        <HardhatToadz toadz="tall-toadboat.png" />
        <HardhatToadz toadz="small-bones.png" />
        <HardhatToadz toadz="small-gummyslime.png" />
        <HardhatToadz toadz="small-gorilla.png" />
        <HardhatToadz toadz="small-angry.png" />
      </div>

      <img
        className="xs:w-3/4 sm:w-1/2 m-auto"
        src="toadztoolz.gif"
        alt="title"
      />
    </div>
  );
};

export default Banner;
