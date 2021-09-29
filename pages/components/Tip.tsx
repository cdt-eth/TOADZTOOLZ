/* eslint-disable @next/next/no-img-element */
import React from "react";

const Tip = () => {
  return (
    <div className=" w-auto">
      <img className="m-auto" src="/lines/toadz-line-2.gif" alt="line2" />

      <div className="text-center">
        <p className="py-2 italic font-bold text-xl">
          Want to support ongoing development? Tip jar:{" "}
          <span className="text-scratchy address">christiantuner.eth</span>
        </p>
      </div>

      <img className="m-auto" src="/lines/toadz-line-1.gif" alt="line1" />
    </div>
  );
};

export default Tip;
