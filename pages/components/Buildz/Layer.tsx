/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";

interface LayerProps {
  trait: string;
  traitUrl: string;
}

const Layer = ({ trait, traitUrl }: LayerProps) => {
  const [image, setImage] = useState(null);

  const canvas = useRef(null);

  useEffect(() => {
    const layerImg = new Image();
    layerImg.src = `${traitUrl}${trait}.png`;
    console.log("layer", layerImg);
    layerImg.onload = () => setImage(layerImg);
  }, [trait, traitUrl]);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      // ctx.fill(0, 0, 400, 400);
      ctx.drawImage(image, (400 - 400) / 2, 40);
    }
  }, [image, canvas]);

  return (
    <div className="absolute">
      <canvas ref={canvas} width={60} height={60} />

      {image && <div>{image}</div>}

      {/* {trait !== "" && <img src={`${traitUrl}${trait}.png`} alt={trait} />} */}
    </div>
  );
};

export default Layer;
