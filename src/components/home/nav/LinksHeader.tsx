import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { MdNoFood } from "react-icons/md";
import { ImPaypal } from "react-icons/im";
import { MdLocalDrink } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { BiBusSchool } from "react-icons/bi";
import { MdLocalGroceryStore } from "react-icons/md";

const LinksHeader = () => {
  const icons = [
    <SiYourtraveldottv />,
    <MdNoFood />,
    <ImPaypal />,
    <MdLocalDrink />,
    <GiHealthNormal />,
    <BiBusSchool />,
    <MdLocalGroceryStore />,
  ];
  return (
    <div className="bg-white w-full px-32 sm:block hidden">
      <ul className="flex w-full py-2 justify-between gap-4">
        {icons.map((icon, index) => (
          <li key={index} className="text-2xl ">
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksHeader;
