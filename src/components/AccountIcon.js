import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
 import "../styles/main.css";
// SAFE LOCALSTORAGE PARSE — NEVER CRASHES
let user = null;

try {
  const raw = localStorage.getItem("carei-user");
  if (raw && raw !== "undefined" && raw !== "null" && raw.trim() !== "") {
    user = JSON.parse(raw);
  }
} catch (err) {
  user = null;
}

function AccountIcon() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("carei-user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="account-container" ref={menuRef}>
      <FaUserCircle
        className="account-icon"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="account-dropdown">
          <div className="dropdown-header">
            <h4>{user?.name || "User"}</h4>
            <p>{user?.email || ""}</p>
          </div>

          <hr />

          <button
            className="dropdown-item"
            onClick={() => (window.location.href = "/profile")}
          >
            Profile
          </button>

          <button
            className="dropdown-item"
            onClick={() => (window.location.href = "/help")}
          >
            Help & Support
          </button>

          <button className="dropdown-item logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default AccountIcon;
