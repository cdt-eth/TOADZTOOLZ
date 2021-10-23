/* eslint-disable @next/next/no-img-element */
import React from "react";
import HardhatToadz from "./HardhatToadz";
import { useTheme } from "next-themes";

const Banner = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mx-9">
      {theme && (
        <img
          className="xs:w-3/4 sm:w-1/2 m-auto"
          src={theme === "light" ? "toadztoolz.gif" : "toadztoolz-white.gif"}
          alt="title"
        />
      )}
      <div className="flex pt-4 sm:px-40">
        <HardhatToadz toadz="tall-toadboat" />
        <HardhatToadz toadz="small-bones" />
        <HardhatToadz toadz="small-gummyslime" />
        <HardhatToadz toadz="small-gorilla" />
        <HardhatToadz toadz="small-angry" />
      </div>
    </div>
  );
};

export default Banner;
