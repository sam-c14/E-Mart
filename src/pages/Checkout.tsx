import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaystackLogo from "../assets/images/paystack-logo.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Sidebar from "../components/other/Sidebar";
// import {Link} from 'react-router-dom'

import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import toast from "react-hot-toast";

export default function Checkout() {
  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);
  const currentUser = useAppSelector((state) => state.userReducer.user);
  const [deliveryOption, setDeliveryOption] = useState<string>("home-delivery");
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const calcSubTotal = () => {
    let sum = 0;
    cartItems.map((item: any) => {
      sum += (item.price as number) * Number(item.quantity);
    });
    return sum;
  };

  function handeShowSidebar() {
    setIsSideBarOpen(!isSideBarOpen);
    // console.log("We got here", isSideBarOpen);
  }

  const dispatch = useAppDispatch();
  const subTotal = React.useMemo(() => calcSubTotal(), [cartItems]);

  const selectDeliveryType = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setDeliveryOption(e.currentTarget.id);
  };

  const handleCheck = (e: any) => {
    console.log("Omo");
  };

  return (
    <>
      <div>
        <div className="bg-white text-center border-b border-pink-400  shadow-sm py-8">
          <Link to="/" className="font-bold sm:text-3xl">
            Checkout
          </Link>
        </div>
        <div className="flex mt-14 justify-between gap-2 xl:px-24 lg:px-16 md:px-10 px-5 pb-10 lg:flex-nowrap flex-wrap">
          <div className="lg:w-3/5 w-full">
            {/* Delivery Option Card start */}
            <div className="rounded-sm ">
              <div className="">
                <p
                  className="bg-pink-100 bg-opacity-70 uppercase font-bold py-3 flex gap-1 items-center pl-10"
                  style={{ letterSpacing: "2px" }}
                >
                  <span>
                    <CheckCircleIcon className="text-gray-200" />
                  </span>
                  <span>1.choose delivery option</span>
                </p>
                {/* Option 1 */}
                <div
                  className={
                    deliveryOption === "home-delivery"
                      ? "pt-10 pb-4 px-10 bg-slate-100 bg-opacity-75 border"
                      : "bg-white pb-4 pt-10 px-10"
                  }
                  id="home-delivery"
                  onClick={(e) => selectDeliveryType(e)}
                >
                  <div className="flex gap-2 items-center mb-3">
                    <span className="inline-block -pt-1">
                      <input
                        type="radio"
                        className="text-pink-500"
                        name="delivery-type"
                        checked={
                          deliveryOption === "home-delivery" ? true : false
                        }
                        onChange={handleCheck}
                      />
                    </span>
                    <span className="font-bold">Deliver to me</span>
                  </div>
                  <div className="w-full flex gap5 justify-between sm:flex-nowrap flex-wrap">
                    <div
                      className={
                        deliveryOption === "home-delivery"
                          ? "border xl:w-1/2 md:w-3/5 w-full py-5 px-3 bg-white"
                          : "border xl:w-1/2 md:w-3/5 w-full py-5 px-3"
                      }
                    >
                      <p className="font-bold text-sm">
                        Hi {currentUser.firstName}, Click on Address to specify
                        a delivery address
                      </p>
                      <div className="mt-4">
                        <button
                          disabled={
                            deliveryOption === "home-delivery" ? false : true
                          }
                          onClick={handeShowSidebar}
                          className={
                            deliveryOption === "home-delivery"
                              ? "bg-pink-500 py-3 mt-1 px-4 text-white rounded-sm font-semibold"
                              : "bg-gray-200 mt-1 py-3 px-4 text-white rounded-sm font-semibold"
                          }
                        >
                          Add Delivery Address
                        </button>
                      </div>
                    </div>
                    <div
                      style={{ backgroundColor: "#fff8fc" }}
                      className={
                        deliveryOption === "home-delivery"
                          ? "sm:w-2/5 w-full sm:mt-0 mt-2 text-pink-600 font-semibold flex justify-center items-center text-center bg-opacity-30 scale-90 py-0 px-4 text-sm rounded-sm"
                          : "hidden"
                      }
                    >
                      <span>
                        Your item should be delivered to you in about 5 working
                        days within Lagos & Abuja, and 7 to 14 days outside
                        Lagos & Abuja
                      </span>
                    </div>
                  </div>
                </div>
                {/* Checkbox breaker */}
                <div
                  className={
                    deliveryOption === "pickup-delivery"
                      ? "pt-4 pb-4 bg-white pl-10 flex gap-2 items-center"
                      : "pt-8 pb-4 bg-white pl-10 flex gap-2 items-center"
                  }
                >
                  <input type="checkbox" name="order-instructions" />
                  <span className="text-sm font-semibold">
                    Check this box if you have any instructions concerning this
                    order
                  </span>
                </div>
                {/* Option 2 */}
                <div
                  className={
                    deliveryOption === "pickup-delivery"
                      ? "pt-10 px-10 bg-slate-100 bg-opacity-75 border pb-8"
                      : "bg-white pt-10 px-10 pb-8"
                  }
                  id="pickup-delivery"
                  onClick={(e) => selectDeliveryType(e)}
                >
                  <div className="flex gap-2 items-center mb-3">
                    <span className="inline-block -pt-1">
                      <input
                        type="radio"
                        checked={
                          deliveryOption === "pickup-delivery" ? true : false
                        }
                        onChange={handleCheck}
                        className="text-pink-500"
                        name="delivery-type"
                      />
                    </span>
                    <span className="font-bold">Pickup from a Store</span>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="w-full flex gap5 justify-between sm:flex-nowrap flex-wrap">
                    <div
                      className={
                        deliveryOption === "pickup-delivery"
                          ? "border xl:w-1/2 md:w-3/5 w-full py-5 px-3 bg-white"
                          : "border xl:w-1/2 md:w-3/5 w-full py-5 px-3"
                      }
                    >
                      <p className="font-bold text-sm">
                        Select a pickup location in your area from our undefined
                        locations nationwide
                      </p>
                      <div className="mt-4">
                        <button
                          disabled={
                            deliveryOption === "pickup-delivery" ? false : true
                          }
                          className={
                            deliveryOption === "pickup-delivery"
                              ? "bg-pink-500 py-3 mt-1 px-4 text-white rounded-sm font-semibold"
                              : "bg-gray-200 mt-1 py-3 px-4 text-white rounded-sm font-semibold"
                          }
                        >
                          Select Pickup Location
                        </button>
                      </div>
                    </div>
                    <div
                      style={{ backgroundColor: "#fff8fc" }}
                      className={
                        deliveryOption === "pickup-delivery"
                          ? "sm:w-2/5 w-full sm:mt-0 mt-2 text-pink-600 font-semibold flex justify-center items-center text-center bg-opacity-30 scale-90 py-0 px-4 text-sm rounded-sm"
                          : "hidden"
                      }
                    >
                      <span>
                        Pickup items from a E-mart Store that is convenient for
                        you. Save some amount on delivery charges.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Delivery Option Card end */}
            {/* Delivery Options start */}
            <div className="mt-5 py-5 bg-white rounded-sm sm:px-16 px-7">
              <div>
                <h6 className="font-bold text-lg">Delivery Options</h6>
              </div>
              <div className="flex w-3/4 gap-4 items-center">
                <span>
                  <input
                    type="radio"
                    checked
                    onChange={handleCheck}
                    className="text-pink-500"
                  />
                </span>
                <span className="font-bold text-sm">
                  <span>Standard Delivery</span>
                  <span>(3 - 5 Business days Estimated)</span>
                </span>
                <span className="text-gray-400 text-xs">₦2,000</span>
              </div>
            </div>
            {/* Delivery Options end */}
            {/* Payment Options start */}
            <div className="bg-white rounded-sm py-5 pl-10 mt-5">
              <span
                className="font-bold flex items-center gap-2 uppercase"
                style={{ letterSpacing: "2px" }}
              >
                <span>
                  <CheckCircleIcon className="text-gray-200" />
                </span>
                <span>2.payment options</span>
              </span>
            </div>
            {/* Payment Options end */}
          </div>
          {/* Order Details Start */}
          <div className="lg:w-2/5 w-full">
            <div className="lg:h-3/5 z-20 w-full rounded-sm bg-white bottom-0 lg:py-5 md:py-1">
              <div className="">
                <div className="border-b py-4 flex xl:px-5 lg:px-3.5 px-3 justify-between">
                  <span className="font-bold">Order Summary</span>
                  <span className="font-bold">
                    {cartItems.length} {cartItems.length > 1 ? "Items" : "Item"}
                  </span>
                </div>
                <div className="bg-amber-100 text-amber-600 text-center py-2.5">
                  Pickup unavailable
                </div>
                <div className="border-b py-5 flex xl:px-5 lg:px-3.5 px-3 justify-between">
                  <span className="w-3/5 xl:text-base lg:text-xs">
                    Delivery Charges:
                  </span>
                  <span className="text-xs text-gray-500 w-2/5">
                    Add your Delivery address at checkout to see delivery
                    charges
                  </span>
                </div>
                <div className="border-b py-3.5 flex xl:px-5 lg:px-3.5 px-3 justify-between">
                  <span className="xl:text-base lg:text-xs">Subtotal:</span>
                  <span className="font-bold">
                    ₦{subTotal.toLocaleString()}
                  </span>
                </div>
                <div className="border-b py-3.5 flex xl:px-5 lg:px-3.5 px-3 justify-between">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">
                    ₦{subTotal.toLocaleString()}
                  </span>
                </div>
                <div className="xl:px-5 lg:px-3.5 px-3 mt-1 mb-2 border-b py-3">
                  <button
                    onClick={(e) => {
                      toast.success(
                        "You can't make payments right now, The payment feature is still in development, Click on checkout header to go back home"
                      );
                    }}
                    className="w-full py-2 text-white block text-center bg-green-500 font-bold rounded-sm xl:text-base lg:text-sm"
                  >
                    Proceed to Payment
                  </button>
                </div>
                <div className="gap-4">
                  <span className="text-gray-500 mx-5 text-xs">We accept:</span>
                  <div className="flex justify-center">
                    <img
                      className="w-54 h-16"
                      src={PaystackLogo}
                      alt="paystack logo"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="">
                <div className="px-5 my-1 py-3">
                  <Link
                    to="/checkout/complete-order"
                    className="w-full py-2 text-white block text-center bg-green-500 font-bold rounded-sm xl:text-base lg:text-sm"
                  >
                    Continue to Checkout
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
          {/* Order Details End */}
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSideBarOpen}
        setIsSideBarOpen={handeShowSidebar}
      ></Sidebar>
    </>
  );
}
