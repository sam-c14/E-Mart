import React, { useState } from "react";
// import Store from "../../../assets/images/store-logo.jpg";
// import Marjay from "../../../assets/images/marjay.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCart, BiQuestionMark } from "react-icons/bi";
// import Cart from "../../../pages/Cart";
import DropDown1 from "./DropDown1";
import { Link } from "react-router-dom";
// import StoreLogo from "../../other/StoreLogo";

type T = {
  to: String;
  text: String;
};

const Navbar = () => {
  const helpItems: Array<T> = [
    { text: "FAQS", to: "/help/faqs" },
    { text: "Contact Us", to: "/help/contact-us" },
  ];
  const [isDropDownShowing, setIsDropDownShowing] = useState(false);
  function toggleDropDown(value: boolean) {
    setIsDropDownShowing(value);
    return undefined;
  }
  return (
    <div className="bg-pink-500 w-full">
      <ul className="flex w-full px-10 py-3.5 text-white">
        <li className="transition-5 text-sm hover:scale-105 w-1/12 flex items-center">
          <Link to="/" className="w-full rounded-full">
            Home
          </Link>
        </li>
        <li className="transition-5 text-sm hover:scale-105 w-1/12 flex items-center">
          <Link to="/stores">Locator</Link>
        </li>
        <li className="transition-5 text-sm hover:scale-105 w-1/12 flex items-center">
          {/* <a href="/sell-items">Sell</a> */}
        </li>
        <li className="transition-5 text-sm flex w-1/2">
          <input
            type="text"
            className="pl-5 py-1 w-11/12 outline-none text-black rounded-s-lg"
            placeholder="Search for products, brands and categories"
          />
          <button className="text-white w-1/12 flex rounded-e-md justify-center items-center text-2xl py-2 px-4 bg-orange-500">
            <AiOutlineSearch />
          </button>
        </li>
        <li className="transition-5 text-sm relative w-1/6 flex justify-center">
          <span
            className="flex-wrap items-center flex hover:bg-white hover:text-pink-600 px-2 py-1"
            onMouseEnter={() => toggleDropDown(!isDropDownShowing)}
            onMouseLeave={() => toggleDropDown(!isDropDownShowing)}
          >
            <div className="bg-gray-300 mr-2 py-2 px-2 rounded-full bg-opacity-30 text-xl">
              <BiQuestionMark className="text-sm" />
            </div>
            Help
            <DropDown1
              toggleDropDown={toggleDropDown}
              isDropDownShowing={isDropDownShowing}
              itemArr={helpItems}
            />
          </span>
        </li>
        <li className="transition-5 text-sm hover:scale-105 w-1/6 flex items-center">
          <Link to="/account/login">Login/SignUp</Link>
        </li>
        <li className="transition-5 text-sm hover:bg-teal-700 w-48 py-1 rounded-sm flex justify-center text-white bg-teal-500">
          <Link
            className="flex gap-4 text-sm items-center justify-center"
            to="/cart/overview"
          >
            <BiCart className="text-white text-xl" />
            My Cart
            <div className="bg-white w-7 flex justify-center items-center font-semibold h-5/6 text-black rounded-sm">
              0
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
