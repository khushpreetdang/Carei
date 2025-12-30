import React from "react";
// import "../styles/main.css";

function Hospital() {
  return (
   <section className="section">
    <div className="content">
        <div className="contentfull">
            <h2 className="Careiname2">Hospitals</h2>
            <p className="frontpara">
                Our partner hospitals are equipped with advanced facilities to provide the best possible healthcare experience.
            </p>
            <ul className="specialcon">
                <li>Multi-specialty hospitals across regions.</li>
                <li>24/7 emergency services and ICU availability.</li>
                <li>Dedicated staff for patient comfort and safety.</li>
            </ul>
        </div>
        <div>
           <img className="frontpageimg" src="/images/hospital.jpg" alt="Hospitals" />
        </div>
    </div>
</section>
  );
}



export default Hospital;
