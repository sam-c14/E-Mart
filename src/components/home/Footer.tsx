import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import { BsTag, BsCart2 } from "react-icons/bs";
import { LuBarChart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  const aboutLinks = [
    "Contact Us",
    "About Us",
    "Forum",
    "Terms and Conditions",
  ];
  const payLinks = ["EmartPay", "Wallet", "Verve", "MasterCard", "Visa"];
  const buyLinks = [
    "FAQs",
    "Delivery",
    "Emart Return Policy",
    "Digital Services",
    "Bulk Purchase",
  ];
  const infoLinks = [
    "Site Map",
    "Track Order",
    "Privacy Policy",
    "Authentic Items Policy",
  ];
  const links = [
    {
      title: "About Emart",
      arr: aboutLinks,
    },
    {
      title: "Payment",
      arr: payLinks,
    },
    {
      title: "Buying On Emart",
      arr: buyLinks,
    },
    {
      title: "More info",
      arr: infoLinks,
    },
  ];
  const mobileLinks = [
    {
      title: "Home",
      to: "/",
      icon: <LiaHomeSolid />,
    },
    {
      title: "Deals",
      to: "/deals/daily",
      icon: <BsTag />,
    },
    {
      title: "Cart",
      to: "/cart/overview",
      icon: <BsCart2 />,
    },
    {
      title: "More",
      to: "/",
      icon: <LuBarChart className="rotate-custom" />,
    },
  ];
  const socialLinks = [
    <FaFacebook />,
    <FaInstagram />,
    <FaTwitter />,
    <FaYoutube />,
  ];

  const setActiveLink = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const links = document.querySelectorAll("w-full foot-link");
    console.log("Got Here");
    links.forEach((link) => {
      console.log("Got Here 2");

      if (link !== e.currentTarget) {
        link.firstElementChild?.firstElementChild?.firstElementChild?.classList.remove(
          "text-pink-800"
        );
        link.firstElementChild?.lastElementChild?.classList.remove(
          "text-pink-800"
        );
      }
    });
    console.log(e.currentTarget);
    e.currentTarget.firstElementChild?.firstElementChild?.firstElementChild?.classList.add(
      "text-pink-800"
    );
    e.currentTarget.firstElementChild?.lastElementChild?.classList.add(
      "text-pink-800"
    );
  };
  return (
    <React.Fragment>
      <div className="bg-gray-950 sm:block hidden px-5 lg:px-10">
        <div className="flex text-gray-300 justify-between mb-5 mt-1">
          <div className="grid grid-cols-4 w-3/4">
            {links.map((obj, index) => (
              <div className="link-container" key={index}>
                <h3 className="font-semibold text-lg uppercase mt-3 mb-2">
                  {obj.title}
                </h3>
                <ul>
                  {obj.arr.map((link, index) => (
                    <li
                      className="my-3 text-sm text-gray-300 hover:text-white transition-all"
                      key={index}
                    >
                      <a href="www.asa.com">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="py-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              action=""
              className="flex"
            >
              <input
                type="email"
                className="py-3 rounded-tl-md rounded-bl-md w-10/12 pl-3 border-none outline-none text-black"
                placeholder="Email Address"
              />
              <button className="py-3 px-3 bg-pink-600 text-white rounded-tr-md rounded-br-md">
                Subscribe
              </button>
            </form>
            <div>
              <h3 className="uppercase text-gray-300 mt-5">connect with us</h3>
              <div className="flex gap-2 mt-5">
                {socialLinks.map((link, index) => (
                  <div
                    className="text-3xl p-3 rounded-full bg-gray-800"
                    key={index}
                  >
                    <a href="www.sac.com" className="filter">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center pb-6">
          <div className="text-gray-300 text-xs flex justify-center w-full items-center">
            <hr className="bg-white text-white w-1/3 lg:w-2/3" />
            <p className="lg:w-1/3 w-2/4 pl-5 lg:pl-3">
              Copyright © 2023 E-mart.com. All rights reserved
            </p>
            <hr className="bg-white text-white w-1/3 lg:w-2/3" />
          </div>
        </div>
      </div>
      <div
        style={{ bottom: "0" }}
        className="bg-white py-3 fixed sm:hidden px-10 w-full z-10 block"
      >
        <ul className="flex justify-between">
          {mobileLinks.map((link, index) => (
            <li onClick={(e) => setActiveLink(e)} key={index}>
              <Link className="w-full foot-link" to={link.to}>
                <div className="flex justify-center">{link.icon}</div>
                <p className="text-sm text-center">{link.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Footer;
