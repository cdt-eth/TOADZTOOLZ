/* eslint-disable @next/next/no-img-element */
import React from "react";

const Credit = () => {
  return (
    <div className="w-auto xs:px-4 bg-toadz-lightgray pb-6 ">
      <div className="text-center flex gap-2 items-center justify-center">
        <img className="" src="/cdt/5342.png" alt="toadenza" />
        <p className="py-2 italic font-semibold xs:text-md  sm:text-xl">
          <span className="not-italic">built by </span>{" "}
          <a
            href="https://twitter.com/cdt_eth"
            rel="noreferrer"
            target="_blank"
            className="text-scratchy not-italic address"
          >
            cdt.eth
          </a>
        </p>
        <img className="" src="/cdt/1490.png" alt="hoodie" />
      </div>
    </div>
  );
};

export default Credit;
