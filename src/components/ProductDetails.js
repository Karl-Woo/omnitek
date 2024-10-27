import "../styles.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const [productDetail, setProductDetail] = useState([]);
  const { contentId } = useParams();

  useEffect(() => {
    fetch("/productdetails.json")
      .then((response) => response.json())
      .then((data) => setProductDetail(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const item = productDetail.find(
    (item) => item.id.toLowerCase() === contentId.id.toLowerCase()
  );

  return (
    <div>
      <div className="xl-space"></div>
      <div className="solution-text">
        {item ? (
          <>
            <h1>{item.title}</h1>
            <div className="l-space"></div>
            <div className="left-right-about">
              <div className="right-text">
                <div className="l-space"></div>
                <p>
                  Whether you need high-performance cables for a specific
                  project or a custom solution designed to your specifications,
                  our team is here to help you achieve your goals. Omnitek is
                  dedicated to the design, development, and manufacturing of
                  cables for microwave coax, micro coax, high data rate,
                  optical, and composite constructions.
                </p>
                <div className="m-space"></div>
                <p>
                  We provide these standard and custom products to customers who
                  demand high performance for applications requiring the use of
                  ePTFE and FEP dielectric materials, operating frequencies up
                  to 70GHz, Vp of up to 85%, excellent phase stability, and
                  tightly controlled characteristic impedance. Signal integrity
                  and transmission performance define your product or system
                  quality, and we optimize our products to meet your needs.
                </p>
                <div className="m-space"></div>
                <p>
                  In addition to electrical characteristics, we deliver products
                  that require wide operating temperatures, high-density
                  packaging, lightweight construction, mechanical flex life, and
                  long-distance performance. We serve the demanding industries
                  of automated test systems, RF systems, medical imaging,
                  aviation systems, and custom high-speed data transmission.
                </p>
                <div className="l-space"></div>
              </div>
            </div>
          </>
        ) : (
          <p>Sorry. item not found...</p>
        )}
      </div>
      <div className="xl-space"></div>
    </div>
  );
}
