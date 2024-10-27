import React, { useState, useEffect } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [productitem, setProductitem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./omnitek/products.json")
      .then((response) => response.json())
      .then((data) => setProductitem(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredproducts = productitem.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCoax = filteredproducts.filter(
    (item) => item.type === "Coax Cable"
  );

  const filteredHigh = filteredproducts.filter(
    (item) => item.type === "High Speed Cable"
  );
  const filteredOther = filteredproducts.filter(
    (item) => item.type === "Other Cable"
  );

  return (
    <div className="products">
      <div className="xl-space"></div>
      <div className="solution-text">
        <h1>Products</h1>
        <div className="l-space"></div>
        <input
          className="search-input"
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="l-space"></div>
        <hr />

        {filteredCoax.length > 0 && (
          <div className="products-content">
            <div className="l-space"></div>
            <h2 className="dis">Coax Cable</h2>
            <div className="m-space"></div>
            <p className="dis">
              Our RF cables provide reliable signal transmission across a wide
              frequency range. Ideal for telecommunications, broadcasting
              applications where performance is critical.
            </p>
            <div className="m-space"></div>
            <div className="products-content">
              {filteredCoax.map((item) => (
                <div
                  key={item.id}
                  className="products-item"
                  onClick={() => navigate(`${item.id}`)}
                >
                  <img
                    src={`./omnitek/images/${item.image}`}
                    alt={item.title}
                  />
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
          </div>
        )}
        {filteredHigh.length > 0 && (
          <div className="products-content">
            <h2 className="dis">High Speed Twin-ax Cable</h2>
            <div className="m-space"></div>
            <p className="dis">
              Our RF cables provide reliable signal transmission across a wide
              frequency range. Ideal for telecommunications, broadcasting
              applications where performance is critical.
            </p>
            <div className="m-space"></div>
            <div className="products-content">
              {filteredHigh.map((item) => (
                <div
                  key={item.id}
                  className="products-item"
                  onClick={() => navigate(`${item.id}`)}
                >
                  <img
                    src={`./omnitek/images/${item.image}`}
                    alt={item.title}
                  />
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
          </div>
        )}
        {filteredOther.length > 0 && (
          <div className="products-content">
            <h2 className="dis">Other Cables</h2>
            <div className="m-space"></div>
            <p className="dis">
              Our RF cables provide reliable signal transmission across a wide
              frequency range. Ideal for telecommunications, broadcasting
              applications where performance is critical.
            </p>
            <div className="m-space"></div>
            <div className="products-content">
              {filteredOther.map((item) => (
                <div
                  key={item.id}
                  className="products-item"
                  onClick={() => navigate(`${item.id}`)}
                >
                  <img
                    src={`./omnitek/images/${item.image}`}
                    alt={item.title}
                  />
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
        )}
        {filteredOther.length === 0 &&
          filteredHigh.length === 0 &&
          filteredCoax.length === 0 && (
            <div className="products-content">
              <h2 className="dis">No Product Found</h2>
            </div>
          )}
      </div>
      <div className="xl-space"></div>
    </div>
  );
}
