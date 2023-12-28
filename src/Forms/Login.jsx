import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormsStyles/Login.css";
import backendApi from "../BackendServerApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      valid = false;
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      valid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (!valid) {
      return;
    }

    try {
      // Make API request to login
      const response = await axios.post(`${backendApi}/login`, {
        email,
        password,
      });

      if (response.status === 401) {
        toast.error("Incorrect password");
      }
      const { token } = response.data;
      console.log("Token" + token);
      // Display success toast
      toast.success("Login successful", { position: "top-right" });
      navigate("/home");
    } catch (error) {
      // Handle error, e.g., display error message
      toast.error("Error logging in. Please try again.", {
        position: "top-right",
      });
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="header-container">
          <p style={{ fontFamily: "cursive", float: "left", color: "orange" }}>
            <i class="fa-solid fa-tag" style={{ color: "orange" }}></i>
            ARRA
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={
              "https://img.freepik.com/free-photo/top-view-accessoires-travel-with-man-clothing-concept-shirt_1921-78.jpg"
            }
            style={{ width: "100%", height: "auto", borderRadius: "7px" }}
            alt="Fashion Model"
          />
          <br />
          <br />
          <h5 style={{ fontFamily: "cursive" }}>
            Step into Style: Elevate Your Shopping Experience with Seamless
            Logins!
          </h5>
        </div>
        <div className="col-md-6">
          <form className="auth-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
            <p>
              Create New Account?<Link to="/register">Register</Link>
            </p>
            <Link to="/forgotPassword">
              {" "}
              <p>Forgot Password?</p>
            </Link>

            {/* Toast Container */}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
