import React, { useState, useEffect, FC } from "react";
import productSpecs from "../../assets/data/productSpecs.json";

export interface tabProps {
  product_details: {
    overview: Array<string>;
    description: any;
    shipping: string;
    warranty: any;
    return_policy: string;
    product_img: string;
  };
}

const ProductTab: FC<tabProps> = (props): JSX.Element => {
  const tabs = [
    "Overview",
    "Description",
    "Shipping",
    "Warranty",
    "Return Policy",
    "Reviews",
  ];
  const productInfo = JSON.parse(JSON.stringify(productSpecs));
  const [info, setInfo] = useState<any>("");
  const changeTab = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const productTabs = document.querySelectorAll(".product-tab");
    productTabs.forEach((tab) => {
      if (tab !== e.currentTarget) {
        tab.classList.remove("text-pink-700");
      } else {
        tab.classList.add("text-pink-700");
        tabs.map((tab) => {
          switch (e.currentTarget?.textContent) {
            case "Overview":
              const overview = props.product_details["overview"];
              let joinedStr = "";
              // console.log(info[0]);
              overview.map((string) => {
                joinedStr += string + " ";
              });
              setInfo(joinedStr);

              // console.log(joine
              break;
            case "Description":
              const description = props.product_details["description"];
              setInfo(description.desc);
              break;
            case "Shipping":
              let shipping = props.product_details["shipping"];
              if (shipping.length <= 12) {
                shipping = "Estimated shipping time " + shipping;
              }
              setInfo(shipping);
              break;
            case "Warranty":
              const warranty = props.product_details["warranty"];
              const str = warranty.term + " " + warranty.details;
              setInfo(str);
              break;
            case "Return Policy":
              const return_policy = props.product_details["return_policy"];
              setInfo(return_policy);
              break;
            case "Reviews":
              setInfo("No reviews yet for this product");
              break;
          }
        });
      }
    });
  };
  useEffect(() => {
    // console.log(Object.keys(info)
    //   props);
    const productTabs = document.querySelectorAll(".product-tab");
    productTabs.forEach((tab) => {
      if (tab.textContent === "Overview") tab.classList.add("text-pink-700");
    });
    const info = props.product_details["overview"];
    let joinedStr = "";
    // console.log(info[0]);
    info.map((string) => {
      joinedStr += string + " ";
    });
    console.log(joinedStr);
    setInfo(joinedStr);
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
          <div className="text-xs my-0.5">{info}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
