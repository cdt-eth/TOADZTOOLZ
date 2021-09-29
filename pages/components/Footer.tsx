/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "./Link";
import Tip from "./Tip";

const Footer = () => {
  return (
    <div className="py-4 footer flex">
      {/* <div className="bg-green-900 py-4 text-white"> */}

      <div>
        <img src="toadz.gif" alt="toadz-gif" />
      </div>

      <div className="self-center">
        <Tip />

        <br />

        <div className="text-center">
          Inspired by
          <Link
            link="https://twitter.com/mehranhydary"
            passedClasses="ml-1"
            newPage={true}
            text="@mehranhydary's"
          />{" "}
          <Link
            link="https://loot-query.vercel.app/"
            passedClasses=""
            newPage={true}
            text="Loot Query"
          />{" "}
          • Built by
          <Link
            link="https://twitter.com/cdt_works"
            passedClasses="ml-1"
            newPage={true}
            text="@cdt_works"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
