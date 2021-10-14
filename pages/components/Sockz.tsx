import React from "react";
import FormModal from "./FormModal";

const Sockz = () => {
  return (
    <div className="flex xs:py-7 sm:py-2 md:w-3/4 m-auto xs:px-2">
      <FormModal />

      <p className="self-center xs:text-xl sm:text-4xl copy">
        Check and see if your exclusive Toad-holder NFTs have been claimed!
      </p>
    </div>
  );
};

export default Sockz;
