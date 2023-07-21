import React from "react";
import { FaBars } from "react-icons/fa";

const Categories = () => {
  const categories: Array<string> = [
    "All Categories",
    "Computers and Accessories",
    "Phones and Tablets",
    "Electronics",
    "Konga Fashion",
    "Home and Kitchen",
    "Baby, Kids and Toys",
    "Other Categories",
  ];
  return (
    <div>
      <div className="bg-pink-800">
        <ul className="w-full md:overflow-auto flex lg:gap-2 gap-14">
          {categories.map((category) =>
            category !== "All Categories" ? (
              <li className="flex lg:w-1/7 justify-center items-center py-3 px-1 text-white hover:bg-white md:w- hover:text-black bg-transparent transition-5 whitespace-nowrap md:text-xs lg:text-sm">
                {category}
              </li>
            ) : (
              <li className="flex lg:w-1/7 justify-center gap-2 items-center py-3 px-1 text-white hover:bg-white hover:text-black bg-transparent md:text-xs lg:text-sm whitespace-nowrap font-bold transition-5">
                {category} <FaBars className="font-bold text-base" />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
