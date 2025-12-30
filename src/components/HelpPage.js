import React from "react";
import "../styles/main.css";

// Correct imports
import Faq from "./Faq";           // Capital letter component
import Feedback from "./Feedback";
import Privacy from "./Privacy";

export default function HelpPage() {
  return (
    <div >
      {/* FAQs section */}
      <section className="section">
        <div className="content">
          <Faq />
        </div>
      </section>

      {/* Feedback section */}
      <section className="section">
        <div className="content">
          <Feedback />
        </div>
      </section>

      {/* Privacy section */}
      <section className="section">
        <div className="content">
          <Privacy />
        </div>
      </section>
    </div>
  );
}
