import React, { useState } from "react";
import "../styles.css";

export default function Contactus() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://your-backend-endpoint.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <div>
      <div className="xl-space"></div>
      <div className="solution-text">
        <h1>Contact us</h1>
        <div className="l-space"></div>
        <form onSubmit={handleSubmit} className="left-right-contact">
          <div className="left-half-contact"></div>
          <div className="right-half-contact">
            <div className="right-text">
              <div className="l-space"></div>
              <label>
                First Name*:
                <input
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="m-space"></div>
              <label>
                Last Name*:
                <input
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="m-space"></div>
              <label>
                Email*:
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="m-space"></div>
              <label>
                Phone Number*:
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="m-space"></div>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <div className="l-space"></div>
              <button type="submit" className="primary-button">
                Send Message
              </button>
              <div className="l-space"></div>
            </div>
          </div>
        </form>
      </div>
      <div className="xl-space"></div>
    </div>
  );
}
