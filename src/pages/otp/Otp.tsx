import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useAppDispatch } from "../../store/hooks/hooks";
import { setSignUpForm } from "../../store/slices/authSlice";
// import store from "../../store/index";

import { signUp } from "../../store/asyncFns/postData";

export type signUpForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
};

const Otp = () => {
  const dispatch = useAppDispatch();
  let initialForm: signUpForm = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "user",
  };
  const [form, setLoginForm] = useState(initialForm);
  const setOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      firstName: form.firstName,
      lastName: form.lastName,
      phoneNumber: form.phoneNumber,
      email: form.email,
      password: e.currentTarget.value,
      role: form.role,
    });
  };
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setSignUpForm(form));
    dispatch(signUp);
  };

  return (
    <div>
      <div className="grid place-items-center">
        <div className="flex items-center relative md:mb-5 sm:mb-10">
          <BsCart4 className="absolute text-2xl top-4 -left-4" />
          <p className="font-bold text-gray-700 text-2xl">E-Mart</p>
        </div>
        <div className="bg-white w-1/4 sm:mt-10 px-4 py-4">
          <div className="my-2">
            <h3 className="text-3xl font-bold text-center">
              Enter the OTP sent to your email
            </h3>
          </div>
          <div className="my-3 border border-gray-100"></div>
          <div className="bg-gray-200 text-center">
            You will receive a 4-digit code sent to your email in the next 2
            minutes. Please enter the code below to complete your account
            registration.
          </div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-wrap mb-3">
              <div className="w-full flex justify-between mb-2">
                <label className="text-sm" htmlFor="password">
                  Enter OTP
                </label>
              </div>
              <input
                onChange={(e) => setOTP(e)}
                placeholder="Enter Password"
                className="py-5 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                type="password"
              />
            </div>
            <button
              onClick={handleSignUp}
              className="text-white rounded-sm bg-emerald-500 hover:bg-emerald-400 py-1 text-center font-semibold mt-1 w-full text-lg"
            >
              Submit Code
            </button>
          </form>
          <div className="mt-3 flex justify-center">
            <p className="text-xs w-3/5 text-gray-200">
              I didn't receive the code
              <Link
                className="text-pink-700"
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
            <p className="text-xs">Email customer support at help@konga.com</p>
            <p className="text-xs">Use our live chat</p>
            <p className="text-xs">Call us on: 07080635700 or 08094605555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
