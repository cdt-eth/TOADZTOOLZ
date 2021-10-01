/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { useTheme } from "next-themes";

const Toadmap = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setOpen] = useState(false);

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
        <img
          className="fox"
          src={theme === "light" ? "roadmap.png" : "fox-vibe.png"}
          alt="roadmap"
        />
      </button>
    </div>
  );
};

export default Toadmap;
