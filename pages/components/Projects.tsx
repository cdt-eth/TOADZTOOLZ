import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="items flex m-auto sm:py-10 sm:pt-2 xs:text-lg">
      <Card
        newPage={false}
        link="/toolz"
        title="Toolz"
        text="Full list of resources & projects from the Toadz!"
      />
      <Card
        newPage={false}
        link="/buildz"
        title="Buildz"
        text="Create your own Cryptoadz with the new Toad Builder."
      />
      <Card
        newPage={false}
        link="/filez"
        title="Filez"
        text="Download all Cryptoadz assets."
      />
      <Card
        newPage={false}
        link="/ideaz"
        title="Ideaz"
        text="Submit your project or idea for the site here!"
      />
    </div>
  );
};

export default Projects;
