import React from "react";
import Furnishings from "../../assets/images/Furnishings.webp";
import Fitness from "../../assets/images/Fitness.jpg";
import Kids from "../../assets/images/Kids.webp";
import Tv from "../../assets/images/Tv.webp";
import { FaAngleRight } from "react-icons/fa";

const ShopNow = () => {
  const products = [
    {
      src: Furnishings,
      title: "Home Furnishings",
      desc: "Get up to 70% off",
    },
    {
      src: Fitness,
      title: "Fitness tools & equipments",
      desc: "Get Fitness equipments at amazing discounts",
    },
    {
      src: Kids,
      title: "Kids wears & accessories",
      desc: "Get Kiddies Products at amazing discounts",
    },
    {
      src: Tv,
      title: "top deals on televisions",
      desc: "Get the Tv You Want With Bargain Deals",
    },
  ];
  return (
    <div className="my-5">
      <div className="grid w-full grid-flow-col lg:whitespace-normal overflow-auto whitespace-nowrap lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div className="" key={index}>
            <div>
              <img src={product.src} alt="products" />
            </div>
            <div className="my-6 pl-4">
              <h3 className="font-bold text-xl text-gray-700 uppercase mb-5">
                {product.title}
              </h3>
              <p className="mb-6 text-sm">{product.desc}</p>
              <div className="text-sm uppercase flex items-center gap-2 text-pink-900">
                <a className="font-semibold" href="www.google.com">
                  shop now
                </a>
                <FaAngleRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
