import React, { useState, useEffect } from "react";
// import Store from "../../../assets/images/store-logo.jpg";
// import Marjay from "../../../assets/images/marjay.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppSelector } from "../../../store/hooks/hooks";
import { BiCart, BiQuestionMark, BiSolidShoppingBag } from "react-icons/bi";
// import Cart from "../../../pages/Cart";
import DropDown1 from "./DropDown1";
import { Link } from "react-router-dom";
// import StoreLogo from "../../other/StoreLogo";

type T = {
  to: String;
  text: String;
};

const Navbar = () => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser: any = JSON.parse(user);
      setUser(parsedUser);
    }
  }, []);

  const cartQuantity = useAppSelector(
    (state) => state.cartReducer.totalQuantity
  );
  const helpItems: Array<T> = [
    { text: "FAQS", to: "/help/faqs" },
    { text: "Contact Us", to: "/help/contact-us" },
  ];
  const userProfile: Array<T> = [
    { text: "Profile", to: "/account/profile" },
    { text: "Orders", to: "/account/orders" },
    { text: "Wishlist", to: "/account/wishlist" },
    { text: "Logout", to: "/account/logout" },
  ];
  const [isDropDownShowing, setIsDropDownShowing] = useState(false);
  const [isProfileDropDownShowing, setIsProfileDropDownShowing] =
    useState(false);
  const [user, setUser] = useState(null);
  function toggleDropDown(value: boolean) {
    setIsDropDownShowing(value);
    return undefined;
  }
  function toggleProfileDropDown(value: boolean) {
    setIsProfileDropDownShowing(value);
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
            <div className="w-4/5 left-11 absolute top-10 z-10">
              <DropDown1
                toggleDropDown={toggleDropDown}
                isDropDownShowing={isDropDownShowing}
                itemArr={helpItems}
              />
            </div>
          </span>
        </li>
        <li className="transition-5 text-sm hover:scale-105 w-1/6 flex items-center">
          {!user ? (
            <Link to="/account/login">Login/SignUp</Link>
          ) : (
            <Link
              to="account/profile"
              className="flex-wrap items-center flex hover:bg-white hover:text-pink-600 px-2 py-1"
              onMouseEnter={() =>
                toggleProfileDropDown(!isProfileDropDownShowing)
              }
              onMouseLeave={() =>
                toggleProfileDropDown(!isProfileDropDownShowing)
              }
            >
              <div className="bg-gray-300 mr-2 py-2 px-2 rounded-full bg-opacity-30 text-xl">
                <BiSolidShoppingBag className="text-sm" />
              </div>
              Account
              <div className="top-9 w-4/5 left-1 absolute z-20">
                <DropDown1
                  toggleDropDown={toggleProfileDropDown}
                  isDropDownShowing={isProfileDropDownShowing}
                  itemArr={userProfile}
                />
              </div>
            </Link>
          )}
        </li>
        <li className="transition-5 text-sm hover:bg-teal-700 w-48 py-1 rounded-sm flex justify-center text-white bg-teal-500">
          <Link
            className="flex gap-4 text-sm items-center justify-center"
            to="/cart/overview"
          >
            <BiCart className="text-white text-xl" />
            My Cart
            <div className="bg-white w-7 flex justify-center items-center font-semibold h-5/6 text-black rounded-sm">
              {cartQuantity}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
