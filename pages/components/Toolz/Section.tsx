import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: any;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <div id={id} className="mb-12">
      <div className="pt-5 pb-2 text-scratchy text-blue-500 text-3xl">
        {title}
      </div>
      <div className="flex flex-wrap">{children}</div>
    </div>
  );
};

export default Section;
