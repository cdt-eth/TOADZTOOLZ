/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import MiniNav from "./components/Toolz/MiniNav";
import MiniNavLink from "./components/Toolz/MiniNavLink";
import getTraits from "./api/main";
import { downloadToad } from "./api/main";

const Buildz = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      getTraits();
    }
  }, []);

  return (
    <div className="p-5 text-black bg-toadz-lightgray h-full">
      <Header title="BUILDZ" />
      <PageTitle passedClass="" title="Buildz" />

      <MiniNav passedClass="">
        <MiniNavLink
          link="/"
          newPage={false}
          text="Home"
          pic="mininav/buildz/1.png"
          alt="home"
        />
        <MiniNavLink
          link="/toolz"
          newPage={false}
          text="Toolz"
          pic="mininav/buildz/2.png"
          alt="buildz"
        />
        <MiniNavLink
          link="/filez"
          newPage={false}
          text="Filez"
          pic="mininav/buildz/3.png"
          alt="filez"
        />
        <MiniNavLink
          link="/ideaz"
          newPage={false}
          text="Ideaz"
          pic="mininav/buildz/4.png"
          alt="ideaz"
        />
      </MiniNav>
      <script type="text/javascript" src="/main.js" defer></script>
      <div className="canvasWrap">
        <canvas id="canvas"></canvas>
        <div className="export cursor-pointer" onClick={downloadToad}>
          Download me
        </div>
      </div>
      <div className="selectionWrap"></div>
    </div>
  );
};

export default Buildz;
