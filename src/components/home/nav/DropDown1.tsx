import React, { FC } from "react";
import { Link } from "react-router-dom";
// import { Path } from "react-router-dom";
import { To } from "react-router-dom";

export type T = {
  to: String;
  text: String;
  disabled: boolean;
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
      <ul className="w-full">
        {props.itemArr.map((item, index) => (
          <li
            key={index}
            className="py-2 pl-3 z-10
             text-sm
            hover:text-pink-600 w-full hover:bg-gray-100"
          >
            {item.disabled ? (
              <h1 className="font-semibold"> Hi {item.text}</h1>
            ) : (
              <Link className="w-full block" to={item.to as To}>
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div></div>
  );
};

export default DropDown1;
