import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleerror, handlesuccess } from "../util";
import "../styles/auth.css";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  const navigate = useNavigate();

  // Handle Input Change
  const handlechange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  // Submit Signup Request
  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password, age, gender } = signupInfo;

    // FRONTEND VALIDATION
    if (!name || !email || !password || !age || !gender) {
      return handleerror("All fields are required");
    }

    const ageNumber = Number(age);
    if (ageNumber < 1 || ageNumber > 120) {
      return handleerror("Enter a valid age");
    }

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: signupInfo.name,
        email: signupInfo.email,
        password: signupInfo.password,
        age: Number(signupInfo.age),
        gender: signupInfo.gender,
    }),
});

const result = await response.json();

      const { success, message, error } = result;

      if (success) {
        handlesuccess(message);
        setTimeout(() => navigate("/login"), 1200);
      } else {
        handleerror(error || message || "Signup failed");
      }
    } catch (err) {
      handleerror("Server error: " + err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Signup</h1>

        <form onSubmit={handleSignup}>
          {/* Name */}
          <div className="form-group">
            <input
              onChange={handlechange}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={signupInfo.name}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              onChange={handlechange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
            />
          </div>

          {/* Age + Gender */}
          <div className="signageslide">
            <input
              onChange={handlechange}
              type="number"
              name="age"
              placeholder="Enter your age"
              value={signupInfo.age}
            />

            <select
              name="gender"
              onChange={handlechange}
              value={signupInfo.gender}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Password */}
          <div className="form-group">
            <input
              onChange={handlechange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
            />
          </div>

          {/* Signup Button */}
          <button type="submit">Signup</button>

          {/* Login Redirect */}
          <span>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
