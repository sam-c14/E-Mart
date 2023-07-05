import React, { FC } from "react";

interface items {
  itemArr: Array<String>;
  isDropDownShowing: Boolean;
  toggleDropDown: Function;
}

const DropDown1: FC<items> = (props): JSX.Element => {
  return props.isDropDownShowing ? (
    <div
      // onMouseOut={() => props.toggleDropDown(!props.isDropDownShowing)}
      className="bg-white z-10 w-4/5 left-12 absolute text-black top-11"
    >
      <ul>
        {props.itemArr.map((item) => (
          <li className="py-2 pl-2 hover:text-pink-600 hover:bg-gray-100">
            {item}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div></div>
  );
};

export default DropDown1;
