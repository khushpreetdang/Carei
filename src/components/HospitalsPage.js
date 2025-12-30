import React, { useState } from "react";
import hospitalsData from "../data/punjab_hospitals_1000.json";
import "../styles/main.css";

export default function HospitalsPage() {
  const [search, setSearch] = useState("");

  const filteredHospitals = hospitalsData.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.city.toLowerCase().includes(search.toLowerCase()) ||
    h.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hospital-page">

      {/* Banner */}
      <div className="hospital-banner">
        <h1 className="hospital-banner-title">Hospitals in Punjab</h1>
        <p className="hospital-banner-sub">Find the best hospitals near you</p>
      </div>

      {/* Search Box */}
      <div className="hospital-search">
        <input
          type="text"
          placeholder="Search hospital or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Hospital Cards */}
      <div className="hospital-grid">
        {filteredHospitals.length === 0 ? (
          <p className="no-results">No hospitals found.</p>
        ) : (
          filteredHospitals.map((h, index) => (
            <div className="hospital-card" key={index}>
              <h3 className="hospital-name">{h.name}</h3>
              <p><strong>City:</strong> {h.city}</p>
              <p><strong>Address:</strong> {h.address}</p>
              <p><strong>Contact:</strong> {h.contact || "N/A"}</p>

              {h.map && (
                <a
                  href={h.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hospital-map-btn"
                >
                  View on Map
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
