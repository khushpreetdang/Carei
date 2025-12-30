import React from "react";
import "../styles/main.css";

export default function FAQs() {
  const faqs = [
    { 
      q: "How do I book an appointment?",
      a: "Go to the Appointments page, choose your doctor, date, time slot and fill in your details before confirming."
    },
    {
      q: "Can I reschedule or cancel an appointment?",
      a: "Yes. You can reschedule or cancel your appointment before the scheduled time."
    },
    {
      q: "Do you offer online consultations?",
      a: "Yes. Some doctors provide virtual or teleconsultation options."
    },
    {
      q: "Is my medical data safe?",
      a: "Yes. Your data is encrypted and stored securely according to industry standards."
    },
    {
      q: "How can I contact customer support?",
      a: "You can chat with support or use the Contact section in the Help page."
    }
  ];

  return (
    <section className="info-page">
      <h1 className="info-title">Frequently Asked Questions</h1>
      <p className="info-subtext">Find quick answers to common questions below.</p>

      <div className="faq-container">
        {faqs.map((f, i) => (
          <details key={i} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
