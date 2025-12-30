import React from "react";
// import "../styles/main.css";
import { Link } from "react-router-dom";
function Appointment() {
  return (
    <section className="section">
    <div className="content">
        <div className="contentfull">
            <h2 className="Careiname2">Appointments</h2>
            <p className="frontpara">
                Schedule appointments quickly and manage your healthcare journey easily through Carei.
            </p>
            <ul className="specialcon">
                <li>Instant booking and automated reminders.</li>
                <li>Reschedule or cancel anytime.</li>
                <li>Virtual consultations available.</li>
            </ul>
            <button className="frontbtn"><Link to="/appointment" >Schedule Now</Link></button>
            
        </div>
        <div>
            <img  className="frontpageimg" src="/images/appointment.jpg" alt="Appointment" />
        </div>
    </div>
</section>
     
  
  );
}

export default Appointment;
