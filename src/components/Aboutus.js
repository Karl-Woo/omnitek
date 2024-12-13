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
              <h3>
                OmniTek Cable Inc. was created by several Microwave experts, with over 100 years of
                combined experience and well over 65 patents in microwave cable and cable assemblies,
                coaxial connectors, and microwave components.
                {" "}
              </h3>
              <div className="m-space"></div>
              <h3>
                Our products serve more applications than before, which can be found in systems ranging
                from microwave communications, telecom communications to a wide range of ATE + Test &
                Measurement equipment.{" "}
              </h3>
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
