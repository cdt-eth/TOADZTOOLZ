import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="items flex m-auto sm:py-10 sm:pt-2 xs:text-lg">
      {/* <Card
        newPage={true}
        link="https://www.ghosts.market/"
        title="Ghosts Market"
        text="Marketplace for Ghost Cryptoadz"
      />
      <Card
        newPage={true}
        link="https://www.sockz.exchange/"
        title="Sockz Exchange"
        text="Claim your sockz here!"
      />
      <Card
        newPage={true}
        link="https://www.partybid.app/party/0xE43f0Bf1Fc7B5f8FA3c29b4B62294CA996C93D93"
        title="PartyGhost"
        text="GhostsDAO's partybid on the rarest Ghost Toad"
      /> */}
      <Card
        newPage={true}
        link="https://opensea.io/collection/cryptoadz-by-gremplin"
        title="Buy Toadz"
        text="Shop for Cryptoadz on OpenSea!"
      />
      <Card
        newPage={false}
        link="/toolz"
        title="Toolz"
        text="Full list of resources & projects from the Toadz!"
      />
      <Card
        newPage={true}
        link="https://etherscan.io/address/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6"
        title="Etherscan"
        text="Learn more by seeing, explore the deployed smart contract."
      />
    </div>
  );
};

export default Projects;
