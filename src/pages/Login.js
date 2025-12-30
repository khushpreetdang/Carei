// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { handleerror, handlesuccess } from "../util";
// import "../styles/auth.css";

// function Login() {
//   const [loginInfo, setLoginInfo] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const { email, password } = loginInfo;

//     if (!email || !password) {
//       return handleerror("All fields are required");
//     }

//     try {
//       const response = await fetch("http://localhost:8080/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(loginInfo),
//       });

//       const result = await response.json();
//       const { success, message, error, jwtToken, name } = result;

//       if (success) {
//         handlesuccess(message || "Login successful!");

//         // Store token + user info
//         localStorage.setItem("token", jwtToken);
//         localStorage.setItem("loggedInUser", name);

//         setTimeout(() => navigate("/home"), 1000);
//       } else {
//         handleerror(error || message || "Login failed!");
//       }
//     } catch (err) {
//       handleerror("Server Error: " + err.message);
//       console.error("LOGIN ERROR:", err);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-container">
//         <h1>Login</h1>

//         <form onSubmit={handleLogin}>

//           {/* Email */}
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               value={loginInfo.email}
//             />
//           </div>

//           {/* Password */}
//           <div className="form-group">
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={handleChange}
//               value={loginInfo.password}
//             />
//           </div>

//           {/* Button */}
//           <button type="submit" className="auth-btn">Login</button>

//           <span>
//             Don’t have an account? <Link to="/signup">Signup</Link>
//           </span>
//         </form>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleerror, handlesuccess } from "../util";
import "../styles/auth.css";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleerror("All fields are required");
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, error, jwtToken, user } = result;

    if (success) {
  handlesuccess(message || "Login successful!");
  localStorage.setItem("token", jwtToken);
  localStorage.setItem("carei-user", JSON.stringify(user));
  setTimeout(() => navigate("/"), 1000);
}

 else {
        handleerror(error || message || "Login failed!");
      }
    } catch (err) {
      handleerror("Server Error: " + err.message);
      console.error("LOGIN ERROR:", err);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={loginInfo.email}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={loginInfo.password}
            />
          </div>

          <button type="submit" className="auth-btn">Login</button>

          <span>
            Don’t have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
