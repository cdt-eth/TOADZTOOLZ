import React from "react";
import FormModal from "./FormModal";

const Sockz = () => {
  return (
    <div className="flex xs:py-7 sm:py-6 md:w-3/4">
      <FormModal />

      <p className="self-center xs:text-2xl sm:text-4xl copy">
        Check and see if your Sockz have been claimed!
      </p>
    </div>
  );
};

export default Sockz;
