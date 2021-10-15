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
        newPage={false}
        link="/toolz"
        title="Toolz"
        text="Full list of resources & projects from the Toadz!"
      />
      <Card
        newPage={true}
        link="https://toadz.world/"
        title="Toadz World"
        text="CrypToadz news round-up sent straight to your inbox weekly."
      />
      <Card
        newPage={true}
        link="/ideaz"
        title="Ideaz"
        text="Submit your project or idea for the site here!"
      />
    </div>
  );
};

export default Projects;
