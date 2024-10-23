import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Aboutus() {
  const [productitem, setProductitem] = useState([]);

  useEffect(() => {
    fetch("./omnitek/products.json")
      .then((response) => response.json())
      .then((data) => setProductitem(data));
  }, []);

  return (
    <div className="products">
      <div className="xl-space"></div>
      <div className="solution-text">
        <h1>Products</h1>
        <div className="l-space"></div>
        <input className="searchbar" type="text" placeholder="Search here" />
        <div className="l-space"></div>
        <hr />
        <div className="l-space"></div>
        <h2>Coax Cable</h2>
        <div className="m-space"></div>
        <p>
          Our RF cables provide reliable signal transmission across a wide
          frequency range. Ideal for telecommunications, broadcasting
          applications where performance is critical.
        </p>
        <div className="product-content">
          {productitem.map((item) => (
            <div key={item.id} className="products-item">
              <img src={`./omnitek/images/${item.image}`} alt={item.title} />
              <div className="l-space"></div>
              <div>
                <s1 className="body">{item.title}</s1>
                <div className="m-space"></div>
                <p className="body">{item.content}</p>
                <div className="m-space"></div>
                <i className="right-icon"></i>
                <div className="s-space"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="l-space"></div>
        <hr />
        <div className="l-space"></div>
        <h2>High Speed Twin-ax Cable</h2>
        <div className="m-space"></div>
        <p>
          Our RF cables provide reliable signal transmission across a wide
          frequency range. Ideal for telecommunications, broadcasting
          applications where performance is critical.
        </p>
        <div className="product-content">
          {productitem.map((item) => (
            <div key={item.id} className="products-item">
              <img src={`./omnitek/images/${item.image}`} alt={item.title} />
              <div className="l-space"></div>
              <div>
                <s1 className="body">{item.title}</s1>
                <div className="m-space"></div>
                <p className="body">{item.content}</p>
                <div className="m-space"></div>
                <i className="right-icon"></i>
                <div className="s-space"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="l-space"></div>
        <hr />
        <div className="l-space"></div>
        <h2>Other Cables</h2>
        <div className="m-space"></div>
        <p>
          Our RF cables provide reliable signal transmission across a wide
          frequency range. Ideal for telecommunications, broadcasting
          applications where performance is critical.
        </p>
        <div className="product-content">
          {productitem.map((item) => (
            <div key={item.id} className="products-item">
              <img src={`./omnitek/images/${item.image}`} alt={item.title} />
              <div className="l-space"></div>
              <div>
                <s1 className="body">{item.title}</s1>
                <div className="m-space"></div>
                <p className="body">{item.content}</p>
                <div className="m-space"></div>
                <i className="right-icon"></i>
                <div className="s-space"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="xl-space"></div>
    </div>
  );
}
