import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useAppDispatch } from "../../store/hooks/hooks";
import { setToken, setOtpEmail } from "../../store/slices/authSlice";
import { useParams } from "react-router-dom";
// import store from "../../store/index";

import { verifyOtp } from "../../store/asyncFns/postData";

const Otp = () => {
  const dispatch = useAppDispatch();
  const [otp, setOtpInput] = useState("");
  const routeParams = useParams();
  console.log(routeParams.email);
  const setOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtpInput(e.currentTarget.value);
  };
  const handleOtpReq = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(otp);
    dispatch(setToken(otp));
    dispatch(setOtpEmail(routeParams.email));
    dispatch(verifyOtp);
  };

  return (
    <div>
      <div className="h-screen pt-5">
        <div className="flex justify-center">
          <div className="flex items-center relative md:mb-5 sm:mb-10">
            <BsCart4 className="absolute text-2xl top-4 -left-4" />
            <p className="font-bold text-gray-700 text-2xl">E-Mart</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white w-10/12 lg:w-1/3 md:w-1/2 xl:w-1/4 sm:mt-10 px-4 py-5 shadow-md">
            <div className="my-2">
              <h3 className="text-3xl font-bold text-center">
                Enter the OTP sent to your email
              </h3>
            </div>
            <div className="my-3 border border-gray-100"></div>
            <div className="bg-gray-200 text-sm p-2 leading-5 text-center">
              You will receive a 4-digit code sent to your email in the next 2
              minutes. Please enter the code below to complete your account
              registration.
            </div>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-wrap mb-3">
                <div className="w-full flex justify-center py-2 mb-2 text-center">
                  <label className="text-sm">Enter OTP</label>
                </div>
                <input
                  onChange={(e) => setOTP(e)}
                  placeholder="Enter OTP"
                  className="py-5 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                  type="text"
                />
              </div>
              <button
                onClick={handleOtpReq}
                className="text-white rounded-sm bg-emerald-500 hover:bg-emerald-400 py-1 text-center font-semibold mt-1 w-full text-lg"
              >
                Submit Code
              </button>
            </form>
            <div className="mt-3 flex justify-center">
              <p className="text-xs w-3/5 text-gray-400">
                I didn't receive the code
                <Link
                  className="text-pink-700 pl-1 text-sm"
                  to="/account/verify?resend_pin=true"
                >
                  Resend
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap justify-center mt-4">
              <h4 className="text-gray-400 text-sm font-bold">
                Still did not receive the verification code?
              </h4>
            </div>
            <div className="text-center">
              <p className="text-xs">
                Email customer support at help@emartonlineservices.com
              </p>
              <p className="text-xs">Use our live chat</p>
              <p className="text-xs">Call us on: 07041604936</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
