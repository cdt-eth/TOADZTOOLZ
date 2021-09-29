import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="items flex m-auto sm:py-10 sm:pt-2 xs:text-lg">
      <Card
        link="https://cryptoadz.io/"
        title="Derivatives"
        text="See what the Toadz community is building!"
      />
      <Card
        link="https://www.ghosts.market/"
        title="Ghosts Market"
        text="Marketplace for Ghost Cryptoadz"
      />
      <Card
        link="https://www.sockz.exchange/"
        title="Sockz Exchange"
        text="Claim your sockz here!"
      />
      <Card
        link="https://partybidv2.vercel.app/party/0x3E6348a0e9F230a15ef71EDc50C4eDF4C7783598"
        title="PartyToad"
        text="GhostsDAO's partybid on the rarest Ghost Toad"
      />
      <Card
        link="https://opensea.io/collection/cryptoadz-by-gremplin"
        title="Buy Toadz"
        text="Shop for Cryptoadz on OpenSea!"
      />
      <Card
        link="https://etherscan.io/address/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6"
        title="Etherscan"
        text="Learn more by seeing exploring the deployed smart contract."
      />
    </div>
  );
};

export default Projects;
