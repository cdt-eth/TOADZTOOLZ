import React from "react";
import Link from "./Link";

const Footer = () => {
  return (
    <div className="py-4 ">
      {/* <div className="bg-green-900 py-4 text-white"> */}
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
  );
};

export default Footer;
