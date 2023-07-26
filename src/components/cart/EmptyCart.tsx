import React from "react";
import { BsCartX } from "react-icons/bs";

const EmptyCart = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="md:w-2/5 lg:w-1/3 xl:w-1/4 h-2/5 shadow-lg rounded-lg bg-white">
          <div className="grid place-items-center h-full">
            <div className="flex w-full flex-wrap justify-center gap-y-3">
              <BsCartX className="text-pink-600 text-6xl w-full mb-6" />
              <p className="w-full text-center font-bold text-sm">
                Your Cart is Empty
              </p>
              <p className="text-sm w-full text-center">
                You have not added any item to your cart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
