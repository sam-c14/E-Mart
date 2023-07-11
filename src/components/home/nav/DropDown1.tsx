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
    <div className="bg-white z-10 w-4/5 left-14 absolute text-black top-10">
      <ul>
        {props.itemArr.map((item) => (
          <li className="py-2 pl-3 hover:text-pink-600 hover:bg-gray-100">
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
