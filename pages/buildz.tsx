/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Header from "./components/Header";
import getTraits from "./api/main";
import { downloadToad } from "./api/main";
import Nav from "./components/Nav";

const Buildz = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      getTraits();
    }
  }, []);

  return (
    <>
      <Nav color="toadz-lightgray" light />
      <div className="p-5 w-full text-black bg-toadz-lightgray h-full">
        <Header title="BUILDZ" />

        <script type="text/javascript" src="/main.js" defer></script>
        <div className="canvasWrap">
          <canvas id="canvas"></canvas>
          <div className="export cursor-pointer" onClick={downloadToad}>
            Download me
          </div>
        </div>
        <div className="selectionWrap"></div>
      </div>
    </>
  );
};

export default Buildz;
