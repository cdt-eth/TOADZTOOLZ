/* eslint-disable @next/next/no-img-element */
import React from "react";
import HardhatToadz from "./HardhatToadz";
import { useTheme } from "next-themes";

const Banner = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mx-9">
      <div className="flex pt-4">
        <HardhatToadz toadz="tall-toadboat.png" />
        <HardhatToadz toadz="small-bones.png" />
        <HardhatToadz toadz="small-gummyslime.png" />
        <HardhatToadz toadz="small-gorilla.png" />
        <HardhatToadz toadz="small-angry.png" />
      </div>

      {theme && (
        <img
          className="xs:w-3/4 sm:w-1/2 m-auto"
          src={theme === "light" ? "toadztoolz.gif" : "toadztoolz-white.gif"}
          alt="title"
        />
      )}
    </div>
  );
};

export default Banner;
