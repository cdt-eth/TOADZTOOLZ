/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useDvdScreenSaver } from "react-dvd-screensaver";
import Header from "./pages/components/Header";

const DVD = () => {
  const [impactCount, setImpactCount] = useState<number>(0);
  const [colorToad, setColorToad] = useState<boolean>(true);

  const dvdScreenSaver = useDvdScreenSaver({ speed: 0.1 });

  const handleComponentImpactCount = (count: number) => {
    setImpactCount(count);
  };

  useEffect(() => {
    setColorToad(!colorToad);
  }, [dvdScreenSaver.impactCount]);

  return (
    <div className="page404">
      <Header title="404" />
      <div
        ref={dvdScreenSaver.parentRef}
        className={`hooks-parent ${colorToad ? "blue" : "red"}`}
      >
        <div ref={dvdScreenSaver.childRef} className="hooks-child">
          <Link href="/" passHref>
            <a className="text-scratchy cursor-pointer">
              <img
                src={colorToad ? "/404Toad.jpg" : "/404Toad_Red.jpg"}
                alt="404"
              />
              <div className="text-center text-white w-full m-auto">
                Go Home
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DVD;
