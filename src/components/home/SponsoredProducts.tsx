import React from "react";
import Product1 from "../../assets/images/Product1.webp";

const SponsoredProducts = () => {
  const deals = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mb-5">
      <div className="py-3 mt-4 border-b-2 rounded-tr-md rounded-tl-md text-black bg-white">
        <div className="flex gap-5 pl-5 items-center">
          <h1 className="text-2xl font-bold">Sponsored Products</h1>
          {/* <p className="text-sm">See All Items</p> */}
        </div>
      </div>
      <div className="grid grid-flow-col w-full rounded-bl-md rounded-br-md whitespace-nowrap overflow-auto px-4 bg-white gap-5 py-3.5">
        {deals.map((deal) => (
          <div className="shadow-sm hover:shadow-xl transition-5 w-60 pb-9 flex flex-wrap justify-start border items-center px-2 bg-white">
            <div className="">
              <img className="w-full h-full" src={Product1} alt="deal1" />
            </div>
            <div className="w-3/4 pl-2">
              <p className="text-lg font-semibold"> Watering Can 10l</p>
              <div className="flex gap-3 items-center mt-2">
                <h5 className="font-bold text-lg">143,000</h5>
                <p className="line-through text-sm text-gray-400">207000</p>
              </div>
              <p className="text-green-600 text-sm">You save #143,900</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsoredProducts;
