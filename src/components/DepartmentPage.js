import React, { useState } from "react";
import doctorsData from "../data/doctorData"; 
import "../styles/main.css"; 

export default function DepartmentsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Unique department categories
  const departments = Array.from(
    new Set(doctorsData.map((item) => item.category))
  );

  // Doctors in selected department
  const filtered = selectedDepartment
    ? doctorsData.filter((d) => d.category === selectedDepartment)
    : [];

  return (
    <div className="dept-container">
      <h1 className="dept-title">Departments</h1>

      {/* Departments List */}
      {!selectedDepartment && (
        <div className="dept-grid">
          {departments.map((dep, index) => (
            <div
              key={index}
              className="dept-card"
              onClick={() => setSelectedDepartment(dep)}
            >
              <h3 className="dept-card-title">{dep}</h3>
              <p className="dept-card-sub">View Doctors →</p>
            </div>
          ))}
        </div>
      )}

      {/* Doctors in Selected Department */}
      {selectedDepartment && (
        <div className="dept-details-section">
          <h2 className="dept-sub-title">{selectedDepartment}</h2>

          {filtered.map((group, i) => (
            <div key={i} className="dept-group">
              <h3 className="dept-group-title">{group.subcategory}</h3>

              <div className="dept-doc-grid">
                {group.doctors.map((doc, x) => (
                  <div key={x} className="dept-doc-card">
                    <h3 className="dept-doc-name">{doc.name}</h3>
                    <p><strong>City:</strong> {doc.city}</p>
                    <p><strong>Address:</strong> {doc.address}</p>
                    <p><strong>Contact:</strong> {doc.contact}</p>

                    {doc.specialization && (
                      <p><strong>Specialization:</strong> {doc.specialization}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            className="dept-back-btn"
            onClick={() => setSelectedDepartment(null)}
          >
            ← Back to Departments
          </button>
        </div>
      )}
    </div>
  );
}
