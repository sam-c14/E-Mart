import React, { useState, useEffect } from "react";
import productSpecs from "../../assets/data/productSpecs.json";

const ProductTab = () => {
  const tabs = [
    "Overview",
    "Description",
    "Shipping",
    "Warranty",
    "Return Policy",
    "Reviews",
  ];
  const productInfo = JSON.parse(JSON.stringify(productSpecs));
  const [info, setInfo] = useState<any>({});
  const changeTab = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const productTabs = document.querySelectorAll(".product-tab");
    productTabs.forEach((tab) => {
      if (tab !== e.currentTarget) {
        tab.classList.remove("text-pink-700");
      } else {
        tab.classList.add("text-pink-700");
        for (let key of Object.keys(productInfo)) {
          if (tab.textContent?.toLowerCase() === key) {
            const info = productInfo[key];
            // console.log(info);
            setInfo(info);
          } else if (tab.textContent?.toLowerCase() === "return policy") {
            const info = productInfo["returnPolicy"];
            // console.log(info);
            setInfo(info);
          }
        }
      }
    });
  };
  useEffect(() => {
    const productTabs = document.querySelectorAll(".product-tab");
    productTabs.forEach((tab) => {
      if (tab.textContent === "Overview") tab.classList.add("text-pink-700");
    });
    const info = productInfo["overview"];
    setInfo(info);
  }, []);

  return (
    <div>
      <div className="bg-white px-5 py-2">
        <ul className="lg:flex gap-x-16 hidden">
          {tabs.map((tab) => (
            <li onClick={changeTab} className="font-bold text-lg product-tab">
              {tab}
            </li>
          ))}
        </ul>
        <div className="lg:block hidden mt-5">
          {Object.keys(info).length !== 0
            ? Object.keys(info).map((key) => (
                <div className="text-xs my-0.5">
                  {key} : {info[key]}
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
