import React from "react";

interface DownloadButtonProps {
  text: string;
  file: string;
  left?: boolean;
  right?: boolean;
}
const Download = ({ text, file, left, right }: DownloadButtonProps) => {
  const getBorder = (left, right) => {
    if (left) {
      return "rounded-l-md";
    } else if (right) {
      return "rounded-r-md";
    } else {
      return "border";
    }
  };

  return (
    <a
      type="button"
      className={`relative inline-flex items-center px-4 py-2 xs:text-center sm:text-left ${getBorder(
        left,
        right
      )} border border-gray-300 bg-white xs:text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
      // className="inline-flex sm:cursor-pointer items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-toadz-gray hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      download
      href={file}
    >
      {text}
    </a>
  );
};

export default Download;
