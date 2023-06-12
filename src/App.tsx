import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart/overview" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
