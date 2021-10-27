/* eslint-disable @next/next/no-img-element */
import React from "react";

interface LayerProps {
  trait: string;
  traitUrl: string;
}

const Layer = ({ trait, traitUrl }: LayerProps) => {
  return (
    <div className="absolute">
      {trait !== "" && <img src={`${traitUrl}${trait}.png`} alt={trait} />}
    </div>
  );
};

export default Layer;
