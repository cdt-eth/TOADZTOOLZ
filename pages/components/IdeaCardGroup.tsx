import React from "react";
import IdeaCard from "./IdeaCard";

interface IdeaCardGroupProps {
  ideas: any;
  name: string;
}

const IdeaCardGroup = ({ ideas, name }: IdeaCardGroupProps) => {
  return (
    <div className="px-4 w-full m-auto">
      <h2 className="text-scratchy text-3xl mb-6">{name}</h2>

      <div className="flex flex-wrap xs:gap-none sm:gap-8">
        {ideas &&
          ideas.map((idea) => {
            return (
              idea.status === name.toString() && (
                <IdeaCard
                  key={idea.id}
                  title={idea.title}
                  description={idea.description}
                  url={idea.url}
                />
              )
            );
          })}
      </div>
    </div>
  );
};

export default IdeaCardGroup;
