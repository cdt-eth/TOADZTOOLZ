/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "./Link";
import Credit from "./Credit";

const Footer = () => {
  return (
    <div className="py-4 footer flex">
      <div>
        <img src="toadz.gif" alt="toadz-gif" />
      </div>

      <div className="self-center">
        <Credit />

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
