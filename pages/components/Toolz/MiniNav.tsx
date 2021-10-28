/* eslint-disable @next/next/no-img-element */
import React from "react";

const MiniNav = ({ children, passedClass }) => {
  return <div className={`flex justify-center ${passedClass}`}>{children}</div>;
};

export default MiniNav;
