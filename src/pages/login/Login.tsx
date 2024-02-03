import React, { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setForm } from "../../store/slices/authSlice";
import { login } from "../../store/asyncFns/postData";
// import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// import TransitionsModal from "../../components/other/TransitionsModal";
// import { status } from "../../store/slices/authSlice";
import { history } from "../../utilities/routerFns";
import { FaArrowLeft } from "react-icons/fa";
// import
import EMart1 from "../../assets/images/E-Mart3.png";

export type loginForm = {
  email: string;
  password: string;
  role: string;
};

const Login = () => {
  // const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const dispatch = useAppDispatch();
  const returnUrl = useAppSelector((state) => state.authReducer.returnUrl);
  // console.log(cartItems);
  //  const dispatch = useAppDispatch();

  const goBack = () => {
    if (returnUrl) history.navigate(returnUrl);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoginForm({
  //     email: e.currentTarget.value,
  //     password: form.password,
  //     role: "user",
  //   });
  // };
  // const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoginForm({
  //     email: form.email,
  //     password: e.currentTarget.value,
  //     role: "user",
  //   });
  // };
  const [showPassword, setShowPassword] = useState(false);
  const status = useAppSelector((state) => state.authReducer.status);
  const handleLogin = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    // await setLoginForm({
    //   email,
    //   password,
    //   role: "user",
    // });
    const postForm = {
      email,
      password,
      role: "user",
    };
    // console.log(postForm);
    await dispatch(setForm(postForm));
    await dispatch(login);
    setIsLoading(false);
    if (status) {
      setIsOpen(status);
    }
  };

  const handleTogglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    const queryEmail = queryParams.get("email");
    // console.log(queryEmail, "s");
    if (queryEmail) {
      setEmail(queryEmail);
    }
  }, []);

  return (
    <div>
      {/* <TransitionsModal
        isModalOpen={isOpen}
        title="Login Unsuccessful"
        body="Your Password or your Email was not correct"
      /> */}
      <div className="h-screen flex flex-wrap">
        {/* <StoreLogo /> */}
        <div className="sm:w-1/2 w-full sm:h-full h-16">
          <Link className="w-full h-full" to="/">
            <img src={EMart1} className="w-full h-full" alt="logo" />
          </Link>
        </div>
        {/* <div className="w-1/2 xl:max-h-fit">
          <Link className="w-full h-full" to="/">
            <img src={EMart1} className="w-full h-full" alt="logo" />
          </Link>
        </div> */}

        <div className="bg-white flex items-center sm:w-1/2 w-full">
          <div className="w-full py-4 md:px-7 lg:px-10 px-4">
            <div className="my-2 flex flex-row-reverse justify-between">
              <h3 className="text-3xl font-bold text-center">Sign-In</h3>
              <button
                onClick={goBack}
                className="border-2 border-pink-500 transition-all hover:text-white hover:bg-pink-500 text-pink-500 flex justify-between items-center font-semibold py-1 rounded-md px-3"
              >
                <FaArrowLeft className="text-xs mr-1" />
                Back
              </button>
            </div>
            {/* <div className="border-b-2 w-full border-gray-300 my-4"></div>
          <button className="text-blue-600 rounded-sm bg-transparent py-2 my-3 border-2 border-blue-600 text-center font-bold w-full ">
            Login with Google
          </button>
          <div className="flex items-center my-5">
            <div className="border-b-2 w-1/2 border-gray-300"></div>
            <div className="text-gray-400 rounded-full w-8 text-center text-xs py-1 border-gray-400 border-2">
              <p>OR</p>
            </div>
            <div className="border-b-2 w-1/2 border-gray-300"></div>
          </div> */}
            <form
              action=""
              onSubmit={(e) => {
                handleLogin(e);
              }}
            >
              <div className="flex flex-wrap mb-3">
                <label className="text-sm w-full mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="py-2 outline-0 my-1 rounded-sm pl-3 border-2 focus:border-black border-gray-500 w-full"
                  type="email"
                  required
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
                <div className="focus:border-black border-gray-500 ring-transparent outline-none my-1 rounded-sm border-2 flex w-full">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="no-border-no-outline w-11/12"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  {showPassword ? (
                    <button
                      onClick={handleTogglePassword}
                      className="text-sm w-1/12 text-red-500 fade-out"
                    >
                      Hide
                    </button>
                  ) : (
                    <button
                      onClick={handleTogglePassword}
                      className="text-sm w-1/12 text-green-500 fade-out"
                    >
                      Show
                    </button>
                  )}
                </div>
              </div>
              <button
                type="submit"
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
    </div>
  );
};

export default Login;
