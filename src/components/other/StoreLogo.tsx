import React from "react";
import { BsCart4 } from "react-icons/bs";

const StoreLogo = () => {
  return (
    <div className="flex items-center relative md:mb-5 sm:mb-10">
      <BsCart4 className="absolute text-2xl top-4 -left-4 z-10" />
      <p className="font-bold z-10 text-gray-700 text-2xl">
        <span className="mx-0.5 text-gray-200">E</span>
        <span>-M</span>
        <span className="mx-0.5 text-gray-200">a</span>
        <span className="mx-0.5 text-pink-600">r</span>
        <span className="mx-0.5">t</span>
      </p>
      <div className="absolute rounded-full w-16 h-16 bg-pink-500 -z-0"></div>
    </div>
  );
};

export default StoreLogo;
