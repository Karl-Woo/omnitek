import "../styles.css";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const [productDetail, setProductDetail] = useState([]);
  let { contentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("../productdetails.json")
      .then((response) => response.json())
      .then((data) => setProductDetail(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const item = productDetail.find(
    (item) => item.id.toLowerCase() === contentId.toLowerCase()
  );

  return (
    <div>
      <div className="l-space"></div>
      <div className="d-textlink" onClick={() => navigate(-1)}>
        <i className="left-icon"></i>
        <p>Back</p>
      </div>
      <div className="solution-text">
        {item ? (
          <>
            <div className="d-header">
              <div className="left-text">
                <h1>{item.title}</h1>
                <div className="s-space"></div>
                <b>{item.subtitle}</b>
                <div className="m-space"></div>
                <p>{item.description}</p>
              </div>
              <div className="right-image">
                <img src={`../images/${item.headimage}`} alt={item.title} />
              </div>
            </div>
            <div className="l-space"></div>
            <div className="d">
              <div className="l-space"></div>
              <h2>Product Highlight</h2>
              <div className="d-s">
                <h3>Cable Construction</h3>
                <div className="d-s-img">
                  <img
                    src={`../images/${item.specification}`}
                    alt={item.title}
                  />
                  <img src={`../images/${item.table}`} alt={item.title} />
                </div>
              </div>
              <div className="s-space"></div>
              <div className="d-section">
                <div>
                  <h3>Features and Benefits</h3>
                  <ul>
                    {item.feature &&
                      item.feature.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3>Typical Applications</h3>
                  <ul>
                    {item.application &&
                      item.application.map((application, index) => (
                        <li key={index}>{application}</li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="s-space"></div>
              {item.performance && (
                <div className="d-p">
                  <h3>Performance</h3>
                  <img src={`../images/${item.performance}`} alt={item.title} />
                </div>
              )}
              {item.parameter && (
                <div className="d-p1">
                  <h3>Cable Parameters</h3>
                  <img src={`../images/${item.parameter}`} alt={item.title} />
                </div>
              )}
              {item.pdf && (
                <div className="download-section">
                  <a
                    href={`../files/${item.pdf}`}
                    className="download-btn"
                    download
                  >
                    Download PDF
                  </a>
                </div>
              )}
              <div className="l-space"></div>
            </div>
          </>
        ) : (
          <p>Sorry. item not found...</p>
        )}
      </div>
    </div>
  );
}
