/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Toolz",
    description: "Every project being built in the Toadz community.",
    imageUrl: "/projects/1.png",
    link: "/toolz",
    class: "toolzbg",
  },
  {
    name: "Ideaz",
    description: "Submit your project or idea for the site!",
    imageUrl: "/projects/3.png",
    link: "https://addressform.io/form/toadztoolz",
    class: "ideazbg",
  },
  {
    name: "Buildz",
    description: "Create your own Cryptoadz with the new Toad Builder.",
    imageUrl: "/projects/2.png",
    link: "/buildz",
    class: "buildzbg",
  },
  {
    name: "Filez",
    description: "Download all assets, fonts, and metadata.",
    imageUrl: "/projects/4.png",
    link: "/filez",
    class: "filezbg",
  },
];

export default function Projects() {
  return (
    <div className="">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14 bg-toadz-lightgray">
        <div className="space-y-12">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
