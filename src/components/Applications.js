import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Aboutus() {
  const [solutionItems, setSolutionItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./application.json")
      .then((response) => response.json())
      .then((data) => setSolutionItems(data));
  }, []);

  return (
    <div>
      <div className="xl-space"></div>
      <div className="solution-text">
        <h1>Applications</h1>
        <div className="m-space"></div>
        <h3>
          Tailored cable solutions for precision, performance, and innovation
          across industries
        </h3>
        <div className="l-space"></div>
        <div className="solution-content">
          {solutionItems.map((item) => (
            <div key={item.id} className="solution-item">
              <img src={`./images/${item.image}`} alt={item.title} />
              <div className="l-space"></div>
              <div>
                <b className="body">{item.title}</b>
                <div className="m-space"></div>
                <p className="body">{item.content}</p>
                <div className="m-space"></div>
                <div className="button-container">
                  {item["product-id"].map((productId, index) => (
                    <button
                      key={productId}
                      className="secondary-button"
                      onClick={() => navigate(`/products/${productId}`)}
                    >
                      {item.product[index]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="xl-space"></div>
    </div>
  );
}
