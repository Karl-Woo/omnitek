import "../App.css";
import "../styles.css";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="/aboutus" onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="/products" onClick={toggleMenu}>
              Products
            </a>
          </li>
          <li>
            <a href="/applications" onClick={toggleMenu}>
              Applications
            </a>
          </li>
          <li>
            <a href="/contactus" onClick={toggleMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
