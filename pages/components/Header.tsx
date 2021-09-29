import React from "react";
import HardhatToadz from "./HardhatToadz";

const Header = () => {
  return (
    <div className="mx-9">
      <div className="flex ">
        <HardhatToadz toadz="tall-toadboat.png" />
        <HardhatToadz toadz="small-bones.png" />
        <HardhatToadz toadz="small-gummyslime.png" />
        <HardhatToadz toadz="small-gorilla.png" />
        <HardhatToadz toadz="small-angry.png" />
      </div>

      <p className="title xs:text-4xl sm:text-8xl">TOADZTOOLZ</p>
    </div>
  );
};

export default Header;
