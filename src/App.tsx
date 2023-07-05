import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Help from "./pages/help/help";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import index from "./store/index";

const App = () => {
  return (
    <Provider store={index}>
      <div className="bg-gray-100">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/cart/overview"
                element={<Cart isCartEmpty={false} />}
              />
              <Route path="/account">
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
              </Route>
              <Route path="/help">
                <Route path="faqs" element={<Help helpComp="faqs" />} />
                <Route
                  path="contact-us"
                  element={<Help helpComp="contact-us" />}
                />
              </Route>
              {/* <Route path="/help" element={<SignUp />} /> */}
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
