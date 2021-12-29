/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProjectCard from "./ProjectCard";
// import Card from "./Card";

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
    description: "Create your own Cryptoadz with the new Toad Builder.",
    imageUrl: "/projects/3.png",
    link: "/ideaz",
    class: "ideazbg",
  },
  {
    name: "Buildz",
    description: "Submit your project or idea for the site here!",
    imageUrl: "/projects/2.png",
    link: "/buildz",
    class: "buildzbg",
  },
  {
    name: "Filez",
    description: "Download all Cryptoadz assets, fonts, and metadata.",
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

// const Projects = () => {
//   return (
//     <div className="items flex m-auto sm:py-10 sm:pt-2 xs:text-lg">
//       <Card
//         newPage={false}
//         link="/toolz"
//         title="Toolz"
//         text="Full list of resources & projects from the Toadz!"
//       />
//       <Card
//         newPage={false}
//         link="/buildz"
//         title="Buildz"
//         text="Create your own Cryptoadz with the new Toad Builder."
//       />
//       <Card
//         newPage={false}
//         link="/filez"
//         title="Filez"
//         text="Download all Cryptoadz assets."
//       />
//       <Card
//         newPage={false}
//         link="/ideaz"
//         title="Ideaz"
//         text="Submit your project or idea for the site here!"
//       />
//     </div>
//   );
// };

// export default Projects;
