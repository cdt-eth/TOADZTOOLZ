/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectCard = ({ project }) => {
  return project ? (
    <div
      className={`cursor-pointer rounded-xl px-4 py-6 bg-${project.name.toLowerCase()}  transform hover:scale-105 transition duration-200`}
    >
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2">
          <a href={project.link} className="text-gray-400 hover:text-gray-500">
            <img
              className="object-cover rounded-lg"
              src={project.imageUrl}
              alt=""
            />
          </a>
        </div>

        <div className="space-y-2">
          <div
            className={`text-lg leading-6 font-medium space-y-1 text-toadz-dark`}
          >
            <h3 className="text-wizards text-4xl sm:text-6xl">
              {project.name}
            </h3>
            <p className="">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProjectCard;
