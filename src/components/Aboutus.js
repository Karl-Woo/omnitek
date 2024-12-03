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
                Welcome to Omnitek Cable Inc , where we are committed to being a
                leading solutions provider in the high-frequency cable and wire
                industry. We specialize in offering innovative, high-quality
                cable and wire solutions for a wide range of applications,
                including microwave coaxial cables, low-loss coaxial cables, and
                data cables, fiber and tube designed to perform in extreme
                environments. Our products serve key sectors such as
                semiconductors, data centers, aerospace, and medical fields.{" "}
              </p>
              <div className="m-space"></div>
              <p>
                Our mission is to create long-term value for our customers
                through continuous innovation and technological excellence,
                while also driving progress and growth within the industry. We
                believe that the success of our company is not just about
                meeting customer needs, but also about making a positive impact
                on society.{" "}
              </p>
              <div className="m-space"></div>
              <p>
                At Omnitek Cable Inc , we combine customer needs with
                technological advancements, providing customized solutions based
                on reliability, precision, and sustainability. Our team of
                experienced engineers and technical experts is dedicated to
                offering the most advanced technical support and services in the
                industry.
              </p>
              <div className="l-space"></div>
              <b>Our Vision</b>
              <div className="s-space"></div>
              <p>
                To be the preferred solutions provider in the high-frequency
                cable and wire industry, creating greater value for both our
                customers and society.
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
