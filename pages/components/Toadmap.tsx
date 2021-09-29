/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";

const Toadmap = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // window is accessible here.
    console.log("window", window);
  }, []);

  return (
    <div className="relative">
      <ModalVideo
        autoplay
        isOpen={isOpen}
        channel="custom"
        url={"/videos/toadmap.mp4"}
        onClose={() => setOpen(false)}
      />

      <button
        className="btn-primary roadmap fixed"
        onClick={() => setOpen(true)}
      >
        <img className="fox" src="roadmap.png" alt="roadmap" />
      </button>
    </div>
  );
};

export default Toadmap;
