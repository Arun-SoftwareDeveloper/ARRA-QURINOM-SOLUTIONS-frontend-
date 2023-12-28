import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bill from "./Components/Bill";
import DashBoard from "./Components/DashBoard";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";
import Home from "./Components/Home";
import FashionComponent from "./Components/FashionComponent";
import GadgetsComponent from "./Components/GadgetsComponet";
function App({ handleToggleWishlist }) {
  const [cart, setCart] = useState([]);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = (userToken) => {
    setToken(userToken);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleCheckout = () => {
    if (isValidEmail(recipientEmail)) {
      console.log("Checkout successful!");
      setCart([]);
      setRecipientEmail("");
    } else {
      alert("Please enter a valid recipient email!");
    }
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route
            path="/fashion"
            element={
              <FashionComponent
                setCart={setCart}
                handleAddToCart={handleAddToCart}
                handleToggleWishlist={handleToggleWishlist}
                token={token}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/resetPassword"
            element={<ResetPassword />} // Extract reset token from URL
          />
          <Route path="/home" element={<Home />} />

          <Route
            path="/gadgets"
            element={
              <GadgetsComponent
                setCart={setCart}
                handleAddToCart={handleAddToCart}
                handleToggleWishlist={handleToggleWishlist}
                token={token}
              />
            }
          />
          <Route path="/bill" element={<Bill />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
