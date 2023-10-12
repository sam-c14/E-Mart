import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Help from "./pages/help/help";
import Deals from "./pages/home/Deals";
import LogOut from "./pages/home/LogOut";
import Otp from "./pages/otp/Otp";
import Construction from "./pages/stores/Construction";
import Product from "./pages/home/Product";
import Profile from "./pages/profile/Profile";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { setReturnUrl } from "./store/slices/authSlice";
import { history } from "./utilities/routerFns";
import { reduxFns } from "./utilities/reduxFns";

const App = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  const location = useLocation();
  const dispatch = useAppDispatch();

  reduxFns.dispatch = useAppDispatch();
  reduxFns.selector = useAppSelector((state) => state.userReducer);

  // console.log(location.pathname);
  useEffect(() => {
    const previousRoute = location.pathname;

    // Sets the previous route when the components unmounts
    return () => {
      dispatch(setReturnUrl(previousRoute));
    };
  }, [location.pathname]);

  return (
    <div>
      <div className="bg-gray-100 -z-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/overview" element={<Cart />} />
          <Route
            path="/recommendations"
            element={<Deals dealType="recommendations" />}
          />
          <Route path="/account">
            <Route path="login" element={<Login />} />
            <Route path="logout/:logoutStatus" element={<LogOut />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/help">
            <Route path="faqs" element={<Help helpComp="faqs" />} />
            <Route path="contact-us" element={<Help helpComp="contact-us" />} />
          </Route>
          <Route path="/deals">
            <Route path="daily" element={<Deals dealType="daily-deals" />} />
          </Route>
          <Route path="/verify/:email" element={<Otp />} />
          <Route path="/product/:sku" element={<Product />} />
          <Route path="/account/profile" element={<Profile />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/stores" element={<Construction />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
