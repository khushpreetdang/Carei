import React from "react";
import { Link } from "react-router-dom";
// import "../styles/main.css";

function Hero() {
  return (
   <section className="section hero">
    <div className="content">
        <div className="contentfull">
            <h1 className="Careiname">Carei</h1>
            <h2 className="Careiname2">Your Health, Our Priority</h2>
            <p className="frontpara">
                Experience seamless healthcare management with Carei. From finding the right doctor to booking appointments and getting instant medical guidance via our AI-powered chatbot, Carei makes healthcare accessible, efficient, and personalized.
            </p>
            <Link to="/appointment">
            <button className="frontbtn">Book Appointment</button>
            </Link>
        </div>
        <div>
            <img className="frontpageimg" src="/images/frontpagephoto.jpg" alt="Hero" />
        </div>
    </div>
</section>

  );
}



export default Hero;
