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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: "b1f75cb3-8fa1-42ad-9000-5ca494a09da0", // Replace with your Web3Forms access key
      subject: "Omnitek New Contact Form Submission",
      ...formData,
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        setIsSubmitting(false);
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
        setIsSubmitting(false);
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
              <button
                type="submit"
                className="primary-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
