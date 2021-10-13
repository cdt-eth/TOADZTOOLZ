import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="text-wizards text-center xs:text-5xl sm:text-6xl mb-10">
      {title}
    </h1>
  );
};

export default PageTitle;
