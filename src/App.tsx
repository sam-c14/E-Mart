import React from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Help from "./pages/help/help";
import Deals from "./pages/home/Deals";
import Otp from "./pages/otp/Otp";
import Construction from "./pages/stores/Construction";
import Product from "./pages/home/Product";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { history } from "./utilities/routerFns";

const App = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <Provider store={store}>
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
              <Route path="logout/:logoutStatus" element={<Home />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="/help">
              <Route path="faqs" element={<Help helpComp="faqs" />} />
              <Route
                path="contact-us"
                element={<Help helpComp="contact-us" />}
              />
            </Route>
            <Route path="/deals">
              <Route path="daily" element={<Deals dealType="daily-deals" />} />
            </Route>
            <Route path="/verify/:email" element={<Otp />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="/stores" element={<Construction />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
};

export default App;
