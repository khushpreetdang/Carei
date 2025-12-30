import React from "react";
import { Link } from "react-router-dom";
// import "../styles/main.css";

function Footer() {
  return (
    <footer className="about-footer">
      <hr className="footer-line" />
      <div className="footer-container">
        <div className="about-info">
          <h2>About Carei</h2>
          <p>
            Carei is a next-generation healthcare management platform built to
            connect patients, doctors, and hospitals under one intelligent
            system. Our goal is to make healthcare accessible, transparent, and
            personalized for everyone.
          </p>
        </div>
        <div className="support-links">
          <h3>Help & Support</h3>
          <ul>
           <li><Link to="/faqs">FAQs</Link></li>
           <li><Link to="/feedback">Feedback</Link></li>
           <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><a href="#/chatandsupport">Chat with Support</a></li>
            
          </ul>
        </div>
        <div className="contact-footer">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:careiassist82@gmail.com">
              careiassist82@gmail.com
            </a></p>
          <p>Phone: +1 98568 48277</p>
          <p>Address: Carei Headquarters, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Carei | All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
