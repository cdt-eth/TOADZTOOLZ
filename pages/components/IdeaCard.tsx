import React from "react";

interface IdeaCardProps {
  title: string;
  description: string;
  url: string;
  status: string;
}

const IdeaCard = ({ title, description, url, status }: IdeaCardProps) => {
  return (
    <div
      className="
        py-6  
        px-6
        mb-10
        flex-1
        xs:w-full
        sm:w-1/3
        break-words
        transform
        transition
        duration-300
        border-white
        border-4
        rounded-3xl
        hover:text-black
        hover:bg-white
        cursor-pointer
        "
    >
      <a href={url} target="_blank" rel="noreferrer">
        <div className="flex justify-between mb-4">
          <p className="text-left xs:w-4/6 sm:w-3/6 text-scratchy text-xl">
            {title}
          </p>
          <p className=""> {status}</p>
        </div>

        <p>{description}</p>
      </a>
    </div>
  );
};

export default IdeaCard;
