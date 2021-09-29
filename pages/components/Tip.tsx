/* eslint-disable @next/next/no-img-element */
import React from "react";

const Tip = () => {
  return (
    <div className="w-auto xs:px-4">
      <img className="m-auto" src="/lines/toadz-line-2.gif" alt="line2" />

      <div className="text-center">
        <p className="py-2 italic font-bold xs:text-md  sm:text-xl">
          Want to support ongoing development?
          <br /> <span className="not-italic	">Tip jar:</span>{" "}
          <span className="text-scratchy not-italic address">
            christianturner.eth
          </span>
        </p>
      </div>

      <img className="m-auto" src="/lines/toadz-line-1.gif" alt="line1" />
    </div>
  );
};

export default Tip;
