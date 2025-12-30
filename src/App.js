import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import Appointmentnav from "./components/Appointmentnav";
import DoctorsPage from "./components/DoctorsPage";
import HelpPage from "./components/HelpPage";
import DepartmentsPage from "./components/DepartmentPage";
import HospitalsPage from "./components/HospitalsPage";
import InsurancePage from "./components/InsurancePage";
import Faq from "./components/Faq";
import Privacy from "./components/Privacy";
import Feedback from "./components/Feedback";
import Profile from "./components/Profile";

function App() {
  const location = useLocation();

 
  

  const is404 =
    location.pathname !== "/home" &&
    location.pathname !== "/" &&
    // location.pathname !== "/login" &&
    // location.pathname !== "/signup" &&
    location.pathname !== "/appointment" &&
    location.pathname !== "/doctors" &&
    location.pathname !== "/help"&&
    location.pathname !== "/hospitals"&&
     location.pathname !== "/insurance"&&
    location.pathname !== "/departments";

  return (
    <div className="App">

     
      {!is404 && <Header />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointment" element={<Appointmentnav />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
         <Route path="/departments" element={<DepartmentsPage />} />
           <Route path="/hospitals" element={<HospitalsPage />} />
           <Route path="/insurance" element={<InsurancePage />} />
         <Route path="/faqs" element={<Faq />} />
           <Route path="/feedback" element={<Feedback />} />
           <Route path="/privacy" element={<Privacy />} />   
           <Route path="/profile" element={<Profile />} />  

        <Route
          path="/home"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />

        
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h2 style={{ fontSize: "30px" }}>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
