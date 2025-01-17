import React, { useState, useEffect } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const images = ["./logo.jpg", "./logo2.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="header-text">
        <h1>Powering Your World with Seamless Connectivity</h1>
        <div className="m-space"></div>
        <h3>Innovative solutions for a faster, smarter future.</h3>
        <div className="l-space"></div>
        <button
          className="primary-button"
          onClick={() => navigate("./products")}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}
