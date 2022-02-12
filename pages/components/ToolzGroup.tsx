import React from "react";
import Tool from "./Toolz/Tool";
import { v4 as uuidv4 } from "uuid";

const ToolzGroup = ({ section }) => {
  return (
    <div className="flex flex-wrap">
      {section &&
        section.map((tool) => (
          <Tool
            key={uuidv4()}
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
