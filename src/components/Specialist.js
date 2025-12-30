import React from "react";
// import "../styles/main.css";

function Specialist() {
  return (
   <section className="section alt">
    <div className="content">
        <div>
            <img  className="frontpageimg" src="/images/specialist (2).jpg" alt="Specialists" />
        </div>
        <div className="contentfull">
            <h2 className="Careiname2">Specialists</h2>
            <p className="frontpara">
                Our team of certified specialists provides expertise across every medical field, ensuring the best treatment with compassion and care.
            </p>
            <ul className="specialcon">
                <li>Expert doctors in every department.</li>
                <li>Modern diagnostic and treatment technologies.</li>
                <li>Personalized medical plans for every patient.</li>
            </ul>
        </div>
    </div>
</section>
  );
}


export default Specialist;
