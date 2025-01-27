import React, { useState, useEffect } from "react";
import "../styles.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Products() {
  const [productitem, setProductitem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Load products
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => setProductitem(data));
  }, []);

  useEffect(() => {
    // Get the search term from the URL
    const params = new URLSearchParams(location.search);
    const term = params.get("search");
    if (term) {
      setSearchTerm(term);
    }

    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const scrollToSection = () => {
        const section = document.getElementById(sectionId);
        if (section) {
          // Add an offset to the scroll position
          const offset = 100; // Adjust this value for your desired offset

          // Calculate the position to scroll to with the offset
          const sectionPosition = section.offsetTop - offset;

          // Scroll to the section with the offset
          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        }
      };

      // Add a small delay to ensure the section is rendered
      setTimeout(scrollToSection, 100);
    }
  }, [location]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredproducts = productitem.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCoax = filteredproducts.filter(
    (item) => item.type === "RF Cable"
  );

  const filteredHigh = filteredproducts.filter(
    (item) => item.type === "Data Cable"
  );

  const filteredOther = filteredproducts.filter(
    (item) => item.type === "Customized Cable"
  );

  return (
    <div className="products">
      <div className="xl-space"></div>
      <div>
        <h1 className="solution-text">Products</h1>
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
        <div id="1">
          {filteredCoax.length > 0 && (
            <div className="products-content">
              <div className="l-space"></div>
              <h2 className="dis solution-text">RF Cable</h2>
              <p className="dis solution-text">
                High-frequency cables designed for reliable signal transmission
                in demanding RF and microwave applications.
              </p>
              <div className="products-content">
                {filteredCoax.map((item) => (
                  <div
                    key={item.id}
                    className="products-item"
                    onClick={() => navigate(`${item.id}`)}
                  >
                    <img src={`./images/${item.image}`} alt={item.title} />
                    <div className="l-space"></div>
                    <div>
                      <b className="body">{item.title}</b>
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
        </div>
        <div id="2">
          {filteredHigh.length > 0 && (
            <div className="products-content">
              <h2 className="dis solution-text">Data Cable</h2>
              <p className="dis solution-text">
                High-performance cables for fast, secure data transmission
                across various digital and multimedia applications.
              </p>
              <div className="products-content">
                {filteredHigh.map((item) => (
                  <div
                    key={item.id}
                    className="products-item"
                    onClick={() => navigate(`${item.id}`)}
                  >
                    <img src={`./images/${item.image}`} alt={item.title} />
                    <div className="l-space"></div>
                    <div>
                      <b className="body">{item.title}</b>
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
        </div>
        {filteredOther.length > 0 && (
          <div className="products-content">
            <h2 className="dis solution-text" id="3">
              Customized Cables
            </h2>
            <p className="dis solution-text">
              Specialized cables engineered to match unique specifications for
              specific industry applications.
            </p>
            <div className="products-content">
              {filteredOther.map((item) => (
                <div
                  key={item.id}
                  className="products-item"
                  onClick={() => {
                    if (item.id === "Custom-Made-Cable") {
                      navigate("/contactus");
                    } else {
                      navigate(`${item.id}`);
                    }
                  }}
                >
                  <img src={`./images/${item.image}`} alt={item.title} />
                  <div className="l-space"></div>
                  <div>
                    <b className="body">{item.title}</b>
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
      </div>
      <div className="xl-space"></div>
    </div>
  );
}
