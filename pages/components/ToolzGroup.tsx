import React from "react";
import Tool from "./Toolz/Tool";

const ToolzGroup = ({ section }) => {
  return (
    <div className="flex flex-wrap">
      {section &&
        section.map((tool) => (
          <Tool
            key={tool.name}
            name={tool.name}
            pic={tool.pic}
            description={tool.description}
            link={tool.link}
          />
        ))}
    </div>
  );
};

export default ToolzGroup;
