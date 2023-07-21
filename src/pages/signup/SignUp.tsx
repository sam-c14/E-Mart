import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BsCart4 } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setSignUpForm } from "../../store/slices/authSlice";
// import store from "../../store/index";
import StoreLogo from "../../components/other/StoreLogo";
import TransitionsModal from "../../components/other/TransitionsModal";
import { signUp } from "../../store/asyncFns/postData";

export type signUpForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
};

const SignUp = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const setFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      firstName: e.currentTarget.value,
      lastName: form.lastName,
      phoneNumber: form.phoneNumber,
      email: form.email,
      password: form.password,
      role: form.role,
    });
  };
  const setLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      firstName: form.firstName,
      lastName: e.currentTarget.value,
      phoneNumber: form.phoneNumber,
      email: form.email,
      password: form.password,
      role: form.role,
    });
  };
  const setPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      firstName: form.firstName,
      lastName: form.lastName,
      phoneNumber: e.currentTarget.value,
      email: form.email,
      password: form.password,
      role: form.role,
    });
  };
  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      firstName: form.firstName,
      lastName: form.lastName,
      phoneNumber: form.phoneNumber,
      email: e.currentTarget.value,
      password: form.password,
      role: form.role,
    });
  };
  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      firstName: form.firstName,
      lastName: form.lastName,
      phoneNumber: form.phoneNumber,
      email: form.email,
      password: e.currentTarget.value,
      role: form.role,
    });
  };

  const status = useAppSelector((state) => state.authReducer.status);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(setSignUpForm(form));
    await dispatch(signUp);
    if (status) {
      setIsOpen(status);
    }
  };

  return (
    <div>
      <TransitionsModal
        isModalOpen={isOpen}
        title="SignUp Unsuccessful"
        body="There was an error with the process, Please try again"
      />
      <div className="grid place-items-center">
        <div className="mt-2 mb-1">
          <StoreLogo />
        </div>
        <div className="bg-white sm:mt-10 px-4 py-4">
          <div className="my-2">
            <h3 className="text-3xl font-bold text-center">
              Create An Account
            </h3>
          </div>
          <div className="my-3 border border-gray-100"></div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-wrap mb-3">
              <label className="text-sm w-full mb-2" htmlFor="first-name">
                First Name
              </label>
              <input
                onChange={(e) => setFirstName(e)}
                placeholder="Enter First Name"
                className="py-2 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                type="text"
              />
            </div>
            <div className="flex flex-wrap mb-3">
              <label className="text-sm w-full mb-2" htmlFor="last-name">
                Last Name
              </label>
              <input
                onChange={(e) => setLastName(e)}
                placeholder="Enter Last Name"
                className="py-2 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                type="text"
              />
            </div>
            <div className="flex flex-wrap mb-3">
              <label className="text-sm w-full mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e)}
                placeholder="Enter Email Address"
                className="py-2 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                type="email"
              />
            </div>
            <div className="flex flex-wrap mb-3">
              <label className="text-sm w-full mb-2" htmlFor="email">
                Phone Number
              </label>
              <input
                onChange={(e) => setPhoneNumber(e)}
                placeholder="Enter Phone Number"
                className="py-2 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                type="email"
              />
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-full flex justify-between mb-2">
                <label className="text-sm" htmlFor="password">
                  Password
                </label>
              </div>
              <input
                onChange={(e) => setPassword(e)}
                placeholder="Enter Password"
                className="py-2 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                type="password"
              />
            </div>
            <button
              onClick={handleSignUp}
              className="text-white rounded-sm bg-emerald-500 hover:bg-emerald-400 py-2 text-center font-semibold mt-1 w-full text-lg"
            >
              Create an Account
            </button>
          </form>
          <div className="mt-3 flex justify-center">
            <p className="text-sm w-3/5 text-gray-200">
              By signing up you accept our
              <Link to="/content/terms-and-conditions">
                terms and conditions & privacy policy
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            <p className="text-gray-400 text-sm">Already have an Account?</p>
            <Link
              to="/account/login"
              className="text-pink-600 rounded-sm bg-transparent py-2 mt-3 border-2  hover:text-white transition-5 border-pink-600 hover:bg-pink-600 text-center font-bold w-full "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
