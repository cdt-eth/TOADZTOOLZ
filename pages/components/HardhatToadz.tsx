/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTheme } from "next-themes";

interface HardhatProps {
  toadz: string;
}

const HardhatToadz = ({ toadz }: HardhatProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme && (
        <img
          className="w-1/5 flex-1"
          src={`/hardhat/${theme === "light" ? `${toadz}` : `vibez/${toadz}`}`}
          alt={toadz}
        />
      )}
    </>
  );
};

export default HardhatToadz;
