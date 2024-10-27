import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Cta() {
  const navigate = useNavigate();
  return (
    <div className="cta">
      <div className="xl-space"></div>
      <div className="cta-text">
        <h1>Ready to Power Your Next Project?</h1>
        <div className="m-space"></div>
        <h3>
          Whether you need high-performance cables for a specific project or a
          custom solution designed to your specifications, our team is here to
          help you achieve your goals.
        </h3>
        <div className="l-space"></div>
        <button
          className="primary-button"
          onClick={() => navigate("./contactus")}
        >
          Contact us
        </button>
      </div>
      <div className="xl-space"></div>
    </div>
  );
}
