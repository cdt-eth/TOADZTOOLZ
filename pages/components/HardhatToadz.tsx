/* eslint-disable @next/next/no-img-element */
import React from "react";

interface HardhatProps {
  toadz: string;
}

const HardhatToadz = ({ toadz }: HardhatProps) => {
  return <img className="w-1/5 flex-1" src={`/hardhat/${toadz}`} alt={toadz} />;
};

export default HardhatToadz;
