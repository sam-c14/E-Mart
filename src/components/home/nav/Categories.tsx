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
        <ul className="w-full flex gap-2">
          {categories.map((category) =>
            category !== "All Categories" ? (
              <li
                style={{ width: "12.5%" }}
                className="flex justify-center items-center py-3 px-1 text-white hover:bg-white hover:text-black bg-transparent transition-5 whitespace-nowrap text-sm"
              >
                {category}
              </li>
            ) : (
              <li
                style={{ width: "12.5%" }}
                className="flex justify-center gap-2 items-center py-3 px-1 text-white hover:bg-white hover:text-black bg-transparent text-sm font-bold transition-5"
              >
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
