import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div id="main">
        <Navbar />
        <div id="test2435" className="name">
          <h1>
            <span>Launch Your App</span>With Confidence and creativity
          </h1>
          <p className="details">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Header;
