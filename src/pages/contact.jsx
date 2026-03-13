import React, { useState } from "react";
import "../style/contact.css";

const ContactRightSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const scriptURL = "https://script.google.com/macros/s/AKfycbwUafogU-S48zBLhn0ofiTeQqZbFKea9Ycnul3FGz21s2ZZdFxgFaWVP2Pv9ZmJSdVP/exec";

    const formDataObj = new FormData();
    formDataObj.append("Name", formData.name);
    formDataObj.append("Email", formData.email);
    formDataObj.append("Message", formData.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // important for Google Apps Script
        body: formDataObj,
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };
  return (
    <div id="contact" className="contact-container">
      <div className="contact-card">
        {/* LEFT SECTION - Contact Info */}
        <div className="contact-left">
          <h2>Let's <br />Work together</h2>
          <p>Let’s connect! You can reach me through the following details:</p>

          <div className="contact-details">
            <p><strong>Email:</strong> sawantaditya3636@gmail.com</p>
            <p><strong>Phone:</strong> +91 8308545596</p>
            <p><strong>Location:</strong> Pune, India</p>
          </div>

          <div className="social-links">
            <ul className="social">
              <li style={{ "--bg": "#2356f6" }}>
                <a href="#" aria-label="Behance">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li style={{ "--bg": "#101419" }}>
                <a href="https://twitter.com/optimisticweb" aria-label="Twitter">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>

              <li style={{ "--bg": "#ff0000" }}>
                <a href="https://www.youtube.com/@optimisticweb" aria-label="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li

                style={{
                  "--bg":
                    "linear-gradient(-45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                }}
              >
                <a href="https://www.instagram.com/optimisticweb" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>



            </ul>

          </div>
        </div>

        {/* RIGHT SECTION - Contact Form */}
        <div className="contact-right">

          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" value={formData.name} onChange={handleChange} required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-group">
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="button" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p style={{ color: "#4caf50", marginTop: "15px", textAlign: "center", fontWeight: "bold" }}>Message sent successfully!</p>}
            {status === "error" && <p style={{ color: "#f44336", marginTop: "15px", textAlign: "center", fontWeight: "bold" }}>Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactRightSection;
