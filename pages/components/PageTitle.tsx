import React from "react";

interface PageTitleProps {
  title: string;
  passedClass: string;
}

const PageTitle = ({ title, passedClass }: PageTitleProps) => {
  return (
    <h1
      className={`text-wizards text-center xs:text-5xl sm:text-6xl mb-10 ${passedClass}`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
