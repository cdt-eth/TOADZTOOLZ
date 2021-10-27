import React, { useState, Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

interface DropdownProps {
  title: string;
  traitData: any;
  trait: string;
  setTrait: Dispatch<SetStateAction<string>>;
}

const Dropdown = ({ title, traitData, setTrait, trait }: DropdownProps) => {
  //   const [trait, setTrait] = useState("");

  return (
    <div className="sm:py-2 w-full  mx-2 sm:mt-4 border-toadz-dark flex xs:flex-row sm:flex-col xs:1/2 sm:w-1/5">
      <h1 className="sm:text-center text-scratchy text-sm xs:w-1/3 sm:w-full">
        {title}
      </h1>
      <select
        className="xs:m-auto sm:mt-2 bg-transparent outline-none xs:text-left w-2/3  sm:w-1/2"
        name={trait}
        value={trait}
        onChange={(e) => {
          setTrait(e.currentTarget.value as any);
        }}
      >
        <option value="">Select</option>

        {traitData &&
          traitData.map((trait) => (
            <option
              key={uuidv4()}
              label={trait.fileId}
              value={trait.fileId}
              className=""
            >
              {trait.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
