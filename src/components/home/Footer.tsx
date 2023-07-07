import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

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
  const socialLinks = [
    <FaFacebook />,
    <FaInstagram />,
    <FaTwitter />,
    <FaYoutube />,
  ];
  return (
    <div className="bg-gray-950 sm:block hidden px-10">
      <div className="flex text-gray-300 justify-between mb-5 mt-1">
        <div className="grid grid-cols-4 w-3/4">
          {links.map((obj) => (
            <div className="link-container">
              <h3 className="font-semibold text-lg uppercase mt-3 mb-2">
                {obj.title}
              </h3>
              <ul>
                {obj.arr.map((link) => (
                  <li className="my-3 text-sm text-gray-300 hover:text-white transition-all">
                    <a href="www.asa.com">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-3">
          <form onSubmit={(e) => e.preventDefault()} action="" className="flex">
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
              {socialLinks.map((link) => (
                <div className="text-3xl p-3 rounded-full bg-gray-800">
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
        <div className="border-b-2 w-2/5 border-gray-400"></div>
        <div className="text-gray-300 text-sm whitespace-nowrap w-1/5">
          Copyright © 2023 Konga.com. All rights reserved
        </div>
        <div className="border-b-2 w-2/5 border-gray-300"></div>
      </div>
    </div>
  );
};

export default Footer;
