import React from "react";
import "../styles/main.css";

export default function Privacy() {
  return (
    <section className="info-page">
      <h1 className="info-title">Privacy Policy</h1>
      <p className="info-subtext">Last Updated: January 2025</p>

      <div className="privacy-container">

        <div className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            Carei is committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, and safeguard your information.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. Information We Collect</h2>
          <ul className="policy-list">
            <li>Name, email, and phone number</li>
            <li>Appointment details (doctor, time, symptoms)</li>
            <li>Device and usage data (IP address, browser type)</li>
            <li>Cookies for experience improvement</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <ul className="policy-list">
            <li>To manage appointments</li>
            <li>To communicate with you</li>
            <li>To improve platform performance</li>
            <li>To ensure safety and security</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>4. Data Protection</h2>
          <p>
            All personal data is encrypted and stored securely. We do not sell or
            share your personal information with third parties for marketing purposes.
          </p>
        </div>

        <div className="policy-section">
          <h2>5. Your Rights</h2>
          <ul className="policy-list">
            <li>Request access to your data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>6. Contact Us</h2>
          <p>
            For any privacy-related questions, contact us at <b>support@carei.com</b>.
          </p>
        </div>

      </div>
    </section>
  );
}
