import React, { FC } from "react";
import { Link } from "react-router-dom";
// import { Path } from "react-router-dom";
import { To } from "react-router-dom";

type T = {
  to: String;
  text: String;
};
interface items {
  itemArr: Array<T>;
  isDropDownShowing: Boolean;
  toggleDropDown: Function;
}

// type Partial<T> = { [P in keyof T]?: T[P] | undefined };

const DropDown1: FC<items> = (props): JSX.Element => {
  return props.isDropDownShowing ? (
    <div className="bg-white w-full text-black">
      <ul>
        {props.itemArr.map((item, index) => (
          <li
            key={index}
            className="py-2 pl-3 z-10
             text-sm
            hover:text-pink-600 hover:bg-gray-100"
          >
            <Link to={item.to as To}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div></div>
  );
};

export default DropDown1;
