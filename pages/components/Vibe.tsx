/* eslint-disable @next/next/no-img-element */

import React from "react";
import { useTheme } from "next-themes";

const Vibe = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="cursor-pointer pt-5 px-3 outline-none justify-center max-w-max m-auto flex text-scratchy">
      {theme && (
        <button
          className="text-black dark:text-white flex outline-none vibe"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          !Vibe M
          <img
            src={theme === "light" ? "squirtle.png" : "vibe-squirtle.png"}
            alt="vibez"
            className="h-4 self-center outline-none"
          />
          de
        </button>
      )}
    </div>
  );
};

export default Vibe;
