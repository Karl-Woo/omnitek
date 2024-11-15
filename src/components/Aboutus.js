import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="xl-space"></div>
      <div className="solution-text">
        <h1>About us</h1>
        <div className="l-space"></div>
        <div className="left-right-about">
          <div className="left-half"></div>
          <div className="right-half">
            <div className="right-text">
              <div className="l-space"></div>
              <p>
                Whether you need high-performance cables for a specific project
                or a custom solution designed to your specifications, our team
                is here to help you achieve your goalsOmntiek is dedicated to
                the design, development and manufacturing of cable for microwave
                coax, micro coax, high data rate, optical and composite
                constructions.{" "}
              </p>
              <div className="m-space"></div>
              <p>
                We provide these standard and custom products to customers who
                demand high performance for applications that require the use of
                ePTFE and FEP dielectric materials, operating frequencies up to
                70GHz, Vp of up to 85%, excellent phase stability and tightly
                controlled characteristics impedance. Signal integrity and
                transmission performance define how your product of system
                quality and we optimize our products to meet your needs.{" "}
              </p>
              <div className="m-space"></div>
              <p>
                In addition to electrical characteristics, we delivery products
                where you require wide operating temperatures, high density
                packaging, light weight, mechanical flex life and long distance
                performance. We serve the demanding industries of: automated
                test systems, RF systems, medical imaging, aviation systems and
                custom high speed data transmission.
              </p>
              <div className="l-space"></div>
              <button
                className="primary-button"
                onClick={() => navigate("../contactus")}
              >
                Contact us
              </button>
              <div className="l-space"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl-space"></div>
    </div>
  );
}
