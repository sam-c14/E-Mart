import React, { useState, useEffect } from "react";
// import Store from "../../../assets/images/store-logo.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppSelector } from "../../../store/hooks/hooks";
import { BiCart, BiQuestionMark, BiSolidShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HiMiniHomeModern,
  HiOutlineShoppingCart,
  HiMiniXMark,
} from "react-icons/hi2";
import DropDown1 from "./DropDown1";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import CryptoJS from "crypto-js";
import { T } from "./DropDown1";
// import StoreLogo from "../../other/StoreLogo";

// type T = {
//   to: String;
//   text: String;
//   disabled: boolean;
// };

const Navbar = () => {
  const getUser = () => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      const bytes = CryptoJS.AES.decrypt(
        user,
        process.env.REACT_APP_ENCRYPT_KEY
      );
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      if (decryptedData) {
        setUser(decryptedData);
        console.log(decryptedData);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const [user, setUser] = useState<any>(null);

  const cartQuantity = useAppSelector(
    (state) => state.cartReducer.totalQuantity
  );
  const helpItems: Array<T> = [
    { text: "FAQS", to: "/help/faqs", disabled: false },
    { text: "Contact Us", to: "/help/contact-us", disabled: false },
  ];
  const userProfile: Array<T> = [
    { text: `${user?.data.username.split(" ")[0]}`, to: "", disabled: true },
    { text: "Profile", to: "/account/profile", disabled: false },
    { text: "Profile", to: "/account/profile", disabled: false },
    { text: "Orders", to: "/account/orders", disabled: false },
    { text: "Wishlist", to: "/account/wishlist", disabled: false },
    { text: "Logout", to: "/account/logout/true", disabled: false },
  ];
  const [isDropDownShowing, setIsDropDownShowing] = useState(false);
  const [isProfileDropDownShowing, setIsProfileDropDownShowing] =
    useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  function toggleDropDown(value: boolean) {
    setIsDropDownShowing(value);
    return undefined;
  }
  function toggleProfileDropDown(value: boolean) {
    setIsProfileDropDownShowing(value);
    return undefined;
  }
  const toggleSidebar = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    isMobileNavOpen
      ? document.documentElement.classList.add("overflow-hidden")
      : document.documentElement.classList.remove("overflow-hidden");
  }, [isMobileNavOpen]);
  return (
    <div className="bg-white lg:bg-pink-500 sm:py-3 lg:px-5 py-0 lg:py-0 z-20 w-full">
      <div
        className="lg:hidden flex border-b-2
       fixed justify-between top-0 bg-white px-5 w-full py-4 z-20"
      >
        <GiHamburgerMenu
          className={
            isMobileNavOpen
              ? "text-2xl cursor-pointer hidden transition-all"
              : "text-2xl cursor-pointer block"
          }
          onClick={toggleSidebar}
        />
        <HiMiniXMark
          className={
            isMobileNavOpen
              ? "text-2xl cursor-pointer block"
              : "text-2xl cursor-pointer hidden"
          }
          onClick={toggleSidebar}
        />

        <div className="flex gap-3">
          <Link to="/stores">
            <HiMiniHomeModern className="text-2xl cursor-pointer" />
          </Link>
          <Link className="" to="/cart/overview">
            <HiOutlineShoppingCart className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
      <ul className="lg:flex w-full px-10 py-3.5 hidden text-white">
        <li className="transition-5 text-sm hover:scale-105 w-1/12 flex items-center">
          <Link to="/" className="w-full rounded-full">
            Home
          </Link>
        </li>
        <li className="transition-5 text-sm hover:scale-105 w-1/12 flex items-center">
          <Link to="/stores">Locator</Link>
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
            <div
              style={{ left: "29%" }}
              className="w-4/5 absolute bg-white top-10 z-10"
            >
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
              to=""
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
              <div style={{ left: "0%" }} className="top-9 w-4/5 absolute z-20">
                <DropDown1
                  toggleDropDown={toggleProfileDropDown}
                  isDropDownShowing={isProfileDropDownShowing}
                  itemArr={userProfile}
                />
              </div>
            </Link>
          )}
        </li>
        <li className="transition-5 text-sm hover:bg-teal-700 lg:w-48 w-1/6 py-1 rounded-sm flex justify-center text-white bg-teal-500">
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
      <MobileNav isOpen={isMobileNavOpen} />
    </div>
  );
};

export default Navbar;
