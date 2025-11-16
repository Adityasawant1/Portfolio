import React from "react";
import "../style/contact.css";

const ContactRightSection = () => {
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
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-group">
              <input type="email" id="email" required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <textarea id="message" rows="4" required></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactRightSection;
