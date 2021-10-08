/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";

const Error = dynamic(() => import("../DVD"), {
  ssr: false,
});

const Toad404 = () => {
  return <Error />;
};

export default Toad404;
