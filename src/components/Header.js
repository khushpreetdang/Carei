import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import AccountIcon from "./AccountIcon";


function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo-area">
          <img className="logo" src="/images/logo.png" alt="Carei Logo" />
        </div>
        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:careiassist82@gmail.com">
              careiassist82@gmail.com
            </a>
          </p>
          <p>Contact: +91 8283809312</p>
        </div>
        <div className="header-right">
  <AccountIcon />
</div>

      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/hospitals">Hospitals</Link>
        <Link to="/insurance">Insurance</Link>
        <Link to="/appointment">Appointments</Link>
        <Link to="/help">Help</Link>
        <Link to="/login">Login</Link> 
      </nav>
    </header>
  );
}

export default Header;
