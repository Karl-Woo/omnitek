import "./App.css";
import "./styles.css";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Applications from "./components/Applications";
import Contactus from "./components/Contactus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Navigate to /products with search term
    window.location.href = `/products?search=${searchTerm}`;
  };

  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <div className="navbar-left">
            <a href="/" className="logo">
              <img className="homeimg" src={`./images/home.png`} alt="home" />
            </a>
          </div>

          <div className="navbar-right">
            <ul>
              <li>
                <a className="textlink" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="textlink" href="/aboutus">
                  About us
                </a>
              </li>
              <li>
                <a className="textlink" href="/products">
                  Products
                </a>
              </li>
              <li>
                <a className="textlink" href="/applications">
                  Applications
                </a>
              </li>
              <li>
                <div className="search-container">
                  {!showSearchBar ? (
                    <img
                      className="search-icon"
                      src={`./images/search.svg`}
                      alt="Search"
                      onClick={() => setShowSearchBar(true)}
                    />
                  ) : (
                    <form onSubmit={handleSearchSubmit} className="search-form">
                      <input
                        type="text"
                        placeholder="Search product..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input1"
                        autoFocus
                      />
                    </form>
                  )}
                </div>
              </li>
            </ul>
            <a href="/contactus">
              <button className="primary-button">Contact Us</button>
            </a>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route
              path="/products/:contentId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/applications" element={<Applications />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
          </Routes>
        </div>
      </Router>

      <footer className="footer">
        <div className="footer-content">
          <a href="/" className="logo">
            <img className="homeimg" src={`./images/home.png`} alt="home" />
          </a>
          <div className="s-space"></div>
          <p>
            13565 SW Tualatin Shewood Rd,
            <br />
            OR 97140
            <br />
            Email
            <br />
            Number
          </p>
        </div>
        <div className="footer-content">
          <a className="footerlink" href="/applications">
            Applications
          </a>
          <div className="s-space"></div>
          <p>
            Test and Measurement
            <br />
            Medical
            <br />
            Aircraft
            <br />
            Cloud Computing
            <br />
            Industry
            <br />
            Others
          </p>
        </div>
        <div className="footer-content">
          <a className="footerlink" href="/products">
            Products
          </a>
          <div className="s-space"></div>
          <p>
            RF Cable
            <br />
            Data Cable
            <br />
            Customized Cable
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
