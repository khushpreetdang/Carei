import React, { useState } from "react";
import "../styles/main.css";   // <-- IMPORTANT
import insuranceJson from "../data/insurance.json";

export default function InsurancePage() {
  const [search, setSearch] = useState("");
  const [openCompany, setOpenCompany] = useState(null);
  const [insuranceData] = useState(insuranceJson);

  // Search filter
  const filtered = insuranceData.filter((item) => {
    const q = search.toLowerCase();
    if (q === "") return true;

    return (
      item.company.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="insurance-container">
      <h1>Insurance Plans</h1>
      <p>Choose the best insurance plan for your family</p>

      {/* Search bar */}
      <input
        className="insurance-search"
        type="text"
        placeholder="Search company or plan..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* List */}
      <div>
        {filtered.length === 0 ? (
          <p>No companies found</p>
        ) : (
          filtered.map((ins, index) => (
            <div key={index} className="insurance-card">
              {/* Card Header */}
              <div className="insurance-card-header">
                <div>
                  <h2>{ins.company}</h2>
                  <p>{ins.category}</p>
                </div>

                <button
                  className="toggle-btn"
                  onClick={() =>
                    setOpenCompany(openCompany === index ? null : index)
                  }
                >
                  {openCompany === index ? "Hide Plans" : "Show Plans"}
                </button>
              </div>

              {/* Plans */}
              {openCompany === index && (
                <div className="insurance-plans">
                  {ins.packages.map((p, i) => (
                    <div key={i} className="insurance-plan-box">
                      <h3 className="plan-title">{p.name}</h3>
                      <p>Coverage: {p.coverage}</p>
                      <p>Premium: {p.premium}</p>
                      <p>Eligibility: {p.eligibility}</p>
                      <p>Hospitals: {p.hospitals}</p>

                      <strong>Benefits:</strong>
                      <ul>
                        {p.benefits.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* External Link */}
                  <a
                    href={ins.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
