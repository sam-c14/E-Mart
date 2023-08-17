import React, { useState } from "react";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setForm } from "../../store/slices/authSlice";
// import store from "../../store/index";
import { login } from "../../store/asyncFns/postData";
// import { useDispatch } from "react-redux";
import StoreLogo from "../../components/other/StoreLogo";
import TransitionsModal from "../../components/other/TransitionsModal";
// import { status } from "../../store/slices/authSlice";

export type loginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  let initialForm: loginForm = {
    email: "",
    password: "",
  };
  const [form, setLoginForm] = useState(initialForm);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      email: e.currentTarget.value,
      password: form.password,
    });
  };
  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      email: form.email,
      password: e.currentTarget.value,
    });
  };
  const status = useAppSelector((state) => state.authReducer.status);
  const handleLogin = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    await dispatch(setForm(form));
    await dispatch(login);
    setIsLoading(false);
    if (status) {
      setIsOpen(status);
    }
  };

  return (
    <div>
      <TransitionsModal
        isModalOpen={isOpen}
        title="Login Unsuccessful"
        body="Your Password or your Email was not correct"
      />
      <div className=" h-screen grid place-items-center">
        <StoreLogo />
        <div className="bg-white sm:mt-10 px-5 py-4">
          <div className="my-2">
            <h3 className="text-3xl font-bold text-center">Login</h3>
          </div>
          <div className="border-b-2 w-full border-gray-300 my-4"></div>
          <button className="text-blue-600 rounded-sm bg-transparent py-2 my-3 border-2 border-blue-600 text-center font-bold w-full ">
            Login with Google
          </button>
          <div className="flex items-center my-5">
            <div className="border-b-2 w-1/2 border-gray-300"></div>
            <div className="text-gray-400 rounded-full w-8 text-center text-xs py-1 border-gray-400 border-2">
              <p>OR</p>
            </div>
            <div className="border-b-2 w-1/2 border-gray-300"></div>
          </div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
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
              <div className="w-full flex justify-between mb-2">
                <label className="text-sm" htmlFor="password">
                  Password
                </label>
                <Link
                  className="text-sm underline text-pink-800"
                  to="/account/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                onChange={(e) => setPassword(e)}
                placeholder="Enter Password"
                className="py-2 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                type="password"
              />
            </div>
            <button
              onClick={(e) => handleLogin(e)}
              className="text-white rounded-sm bg-emerald-500 hover:bg-emerald-400 py-2 text-center font-semibold mt-1 w-full text-lg"
            >
              <span hidden={isLoading}>Login</span>
              <Spinner hidden={!isLoading} />
            </button>
          </form>
          <div className="flex flex-wrap justify-center mt-5">
            <p className="text-gray-400 text-sm">Don't have an Account?</p>
            <Link
              to="/account/signup"
              className="text-pink-600 rounded-sm bg-transparent py-2 mt-3 border-2  hover:text-white transition-5 border-pink-600 hover:bg-pink-600 text-center font-bold w-full "
            >
              Create an Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
