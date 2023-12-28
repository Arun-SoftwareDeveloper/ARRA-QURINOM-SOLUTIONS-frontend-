import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function AboutContainer() {
  const handleLogout = () => {
    // Simulating a logout action
    toast.success("User Logged Out", {
      position: "top-right",
      style: {
        background: "#28a745",
        color: "#fff",
        borderRadius: "8px",
        border: "1px solid #218838",
      },
    });
  };

  return (
    <div className="container mt-4" id="about">
      {/* Logout link with Bootstrap styling */}
      <div className="d-flex justify-content-end mb-2">
        <Link
          to="/"
          className="btn btn-outline-dark"
          onClick={handleLogout}
          style={{ color: "red" }}
        >
          <i className="fas fa-power-off mr-2"></i> Logout
        </Link>
      </div>

      {/* Main content container */}
      <h1 className="text-center">
        Welcome to{" "}
        <span style={{ color: "orange" }}>
          {" "}
          <i class="fa-solid fa-tag" style={{ color: "orange" }}></i>
          ARRA
        </span>
      </h1>
      <p className="text-center">
        Explore our wide range of products and enjoy a comfortable shopping
        experience.
      </p>
    </div>
  );
}

export default AboutContainer;
