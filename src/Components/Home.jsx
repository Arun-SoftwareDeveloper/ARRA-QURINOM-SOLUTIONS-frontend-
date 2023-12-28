import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavBar";
import AboutContianer from "../Components/AboutContainer";
import MainContainerCourosel from "../Components/MainContainerCourosel";
import AboutUs from "../Components/AboutUs";
import Contact from "./Contact";
import FooterContainer from "../Components/FooterContainer";
import Categories from "./Categories";

function Home() {
  return (
    <div className="contianer mt-4">
      <NavigationBar className="position-fixed top-0 end-0 p-4" />
      <div className="container mt-4" id="about">
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
      <MainContainerCourosel />
      <Categories />
      <AboutUs />
      <Contact />
      <FooterContainer />
    </div>
  );
}

export default Home;
