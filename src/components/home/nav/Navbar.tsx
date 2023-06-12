import React from "react";
import Store from "../../../assets/images/store-logo.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCart, BiQuestionMark } from "react-icons/bi";
// import Cart from "../../../pages/Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-pink-500 w-full">
      <ul className="flex w-full px-10 py-3.5 text-white">
        <li className="transition-5 hover:scale-105 w-1/12">
          <Link to="/" className="w-full rounded-full">
            <img src={Store} className="w-12 rounded-full h-10" alt="logo" />
          </Link>
        </li>
        <li className="transition-5 hover:scale-105 w-1/12 flex items-center">
          <a href="/locator">Locator</a>
        </li>
        <li className="transition-5 hover:scale-105 w-1/12 flex items-center">
          <a href="/sell-items">Sell</a>
        </li>
        <li className="transition-5 flex w-1/2">
          <input
            type="text"
            className="pl-5 py-1 w-11/12 outline-none text-black rounded-s-md"
            placeholder="Search for products, brands and categories"
          />
          <button className="text-white w-1/12 flex rounded-e-md justify-center items-center text-2xl py-2 px-4 bg-orange-500">
            <AiOutlineSearch />
          </button>
        </li>
        <li className="transition-5 hover:scale-105 w-1/6 flex justify-center ">
          <a href="/help" className="flex-wrap items-center flex">
            <div className="bg-gray-300 mr-2 py-2 px-2 rounded-full bg-opacity-30 text-xl">
              <BiQuestionMark />
            </div>
            Help
          </a>
        </li>
        <li className="transition-5 hover:scale-105 w-1/6 flex items-center">
          <a href="/login">Login/SignUp</a>
        </li>
        <li className="transition-5 hover:bg-teal-700 w-1/6 py-1 rounded-sm flex justify-center text-white bg-teal-500">
          <Link
            className="flex gap-4 text-lg items-center justify-center"
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
