import React from "react";
// import "../styles/main.css";

function Insurance() {
  return (
    <section className="section alt">
      <div className="content">
        <div >
          <img className="frontpageimg" src="/images/insurence.jpg" alt="Insurance" />
        </div>
        <div className="contentfull">
          <h2 className="Careiname2">Insurance</h2>
          <p className="frontpara">
            Carei connects you with trusted insurance providers to ensure seamless
            medical coverage and fast claims.
          </p >
          <ul className="specialcon">
            <li>Cashless treatment at partner hospitals.</li>
            <li>Easy comparison of policy coverage and benefits.</li>
            <li>Quick and transparent claim settlements.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Insurance;
