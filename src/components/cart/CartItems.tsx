import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
import Deal1 from "../../assets/images/Deal1.webp";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import {
  incProductQuantity,
  decProductQuantity,
} from "../../store/slices/cartSlice";

const CartItems = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);
  console.log(cartItems);
  const dispatch = useAppDispatch();
  const decItem = (id: any) => {
    dispatch(decProductQuantity(id));
  };
  const incItem = (id: any) => {
    console.log(id);
    dispatch(incProductQuantity(id));
  };

  return (
    <div className="h-screen">
      <div className="h-4/5">
        <div className="bg-white px-16 md:px-10 h-1/5 py-5 shadow-sm">
          <Link
            to="/"
            className="text-xs flex gap-x-2 items-center font-semibold"
          >
            <p>Home</p>
            <FaAngleRight />
            <p className="text-pink-800 font-bold">Shopping Cart</p>
          </Link>

          <h3 className="font-bold text-4xl mt-5">Shopping Cart</h3>
        </div>
        <div className="md:px-10 px-16 pt-5">
          <div className="mb-2">
            <button className="border-2 border-pink-500 change-border text-pink-500 flex justify-between items-center font-semibold py-2 w-44 px-2 rounded-sm">
              <FaArrowLeft className="text-xs" />
              Continue Shopping
            </button>
          </div>
          <div>
            <div>
              <div className="bg-gray-200 py-2.5 px-2 rounded-sm">
                <ul className="flex ">
                  <li className="font-semibold w-3/5">Items Details</li>
                  <li className="font-semibold w-1/6">Quantity</li>
                  <li className="font-semibold w-1/6">Item Price</li>
                  <li className="font-semibold w-1/6">Action</li>
                </ul>
              </div>
            </div>
            {cartItems.map((items) => (
              <div className="bg-white flex rounded-bl-sm rounded-br-sm">
                <div className="w-3/5 flex gap-2 items-center">
                  <div className="w-1/5">
                    <img src={Deal1} alt="tablet" className="w-full h-full" />
                  </div>
                  <div>
                    <p className="font-semibold">{items.title}</p>
                    <p className="text-xs">
                      Sold by
                      <span className="text-blue-500"> ESTEEM MEDIA PRO</span>
                    </p>
                  </div>
                </div>
                <div className="w-1/5">
                  <div className="shadow-md w-1/2 mt-5">
                    <button
                      onClick={() => decItem(items.id)}
                      className="border w-1/3 py-1 text-gray-400
                   bg-white text-sm"
                    >
                      -
                    </button>
                    <button
                      disabled
                      className="border w-1/3 py-1 text-bla
                   bg-white text-sm"
                    >
                      {items.quantity.toString()}
                    </button>
                    <button
                      onClick={() => incItem(items.id)}
                      className="border w-1/3 py-1 text-gray-400
                   bg-white text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-1/6 mt-4">
                  <p className="font-bold text-xl">₦{items.price.toString()}</p>
                  <p className="text-gray-400">
                    ₦{items.price.toString()} x 1 item
                  </p>
                </div>
                <div className="w-1/6 mt-4">
                  <p className="text-pink-800 text-sm ">Remove item</p>
                  <p className="text-pink-800 text-sm mt-1">Save for Later</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
