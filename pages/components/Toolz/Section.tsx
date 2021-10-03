import React from "react";

interface SectionProps {
  title: string;
  children: any;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="mb-12">
      <div className="pt-5 pb-2 text-scratchy text-blue-500 text-3xl">
        {title}
      </div>
      <div className="pl-10 ">{children}</div>
    </div>
  );
};

export default Section;
