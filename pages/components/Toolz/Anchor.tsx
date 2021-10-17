/* eslint-disable @next/next/no-img-element */
import React from "react";

interface AnchorProps {
  title: string;
}

const Anchor = ({ title }: AnchorProps) => {
  return (
    <div className="text-center m-auto">
      <p className="text-center cursor-pointer text-scratchy transform hover:opacity-60 transition duration-200 xs:text-xs sm:text-base">
        {title}
      </p>
    </div>
  );
};

export default Anchor;
