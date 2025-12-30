import React, { useState } from "react";
import "../styles/main.css";
import axios from "axios";
import doctorsData from "../data/doctorData";

function Appointmentnav() {

  // Get logged-in user  
  const user = JSON.parse(localStorage.getItem("carei-user")); 
  // user = { _id, name, email }

  // Department & doctor filter states
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Main booking form states
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [phone, setPhone] = useState("");

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDoctor, setModalDoctor] = useState("");
  const [modalDate, setModalDate] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Departments list
  const allDepartments = doctorsData.map((item) => item.category);

  // All doctors for modal dropdown
  const allDoctors = doctorsData.flatMap((group) => group.doctors);
  const uniqueDepartments = [...new Set(allDepartments)];

  const timeSlots = ["9:00 AM", "11:00 AM", "2:00 PM", "4:30 PM", "6:00 PM"];

  // Filter doctors when department is chosen
  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);

    const dept = doctorsData.find((item) => item.category === department);
    setFilteredDoctors(dept ? dept.doctors : []);

    setSelectedDoctor("");
  };

  // -------------------------
  //      MAIN BOOKING
  // -------------------------
  const [slipUrl, setSlipUrl] = useState(""); // ADD THIS STATE ABOVE

const handleBooking = async () => {
  if (!selectedDepartment || !selectedDoctor || !selectedDate || !selectedTime || !phone) {
    alert("All fields required!");
    return;
  }

  if (!user) {
    alert("User not logged in!");
    return;
  }

  try {
    const response = await axios.post("http://localhost:8080/appointment/book", {
      userId: user._id,
      patientName: user.name,
      patientEmail: user.email,
      department: selectedDepartment,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      phone
    });

    if (response.data.success) {
      alert("Appointment booked successfully!");

      const slip = response.data.slipUrl; 
      setSlipUrl(slip);

      // Auto-open PDF
      window.open(slip, "_blank");
    }
  } catch (err) {
    console.error(err);
    alert("Error booking appointment!");
  }
};

  // -------------------------
  //     SCHEDULE MODAL
  // -------------------------
  const openScheduleModal = () => {
    setIsModalOpen(true);
    setModalDoctor("");
    setModalDate("");
    setBookedSlots([]);
  };

  const closeModal = () => setIsModalOpen(false);

  const fetchAvailability = async () => {
    if (!modalDoctor || !modalDate) {
      alert("Select doctor & date first.");
      return;
    }

    setLoadingSlots(true);

    try {
      const resp = await axios.get("http://localhost:8080/appointment/availability", {
        params: { doctor: modalDoctor, date: modalDate }
      });

      setBookedSlots(resp.data.booked || []);
    } catch (err) {
      console.error(err);
      alert("Could not load slots.");
    } finally {
      setLoadingSlots(false);
    }
  };

  const isSlotBooked = (slot) => bookedSlots.includes(slot);

  // Book from modal
  const bookFromModal = async (slotTime) => {
    if (!user) {
      alert("User not logged in!");
      return;
    }

    try {
       await axios.post("http://localhost:8080/appointment/book", {
        userId: user._id,
        patientName: user.name,
        patientEmail: user.email,
        department: "Not Selected", 
        doctor: modalDoctor,
        date: modalDate,
        time: slotTime,
        phone
      });

      alert("Appointment booked successfully!");

      setBookedSlots((prev) => [...prev, slotTime]);

      setTimeout(() => closeModal(), 600);
    } catch (err) {
      console.error(err);
      alert("Error booking appointment.");
    }
  };

  return (
    <section className="appoint-section">
      <div className="appoint-container">

        <div className="appoint-left">
          <h1 className="appoint-title">Book an Appointment</h1>
          <p className="appoint-text">
            Schedule your consultation quickly and easily.
          </p>

          <button className="appoint-main-btn" onClick={openScheduleModal}>
            Check Schedule
          </button>
        </div>

        <div className="appoint-card">

          {/* Department Dropdown */}
          <div className="appoint-box">
            <h3>Select Department</h3>

           
            <select
  value={selectedDepartment}
  onChange={(e) => handleDepartmentChange(e.target.value)}
  className="form-control"
>
  <option value="">-- Choose Department --</option>

  {uniqueDepartments.map((dep, idx) => (
    <option key={idx} value={dep}>
      {dep}
    </option>
  ))}
</select>
          </div>

          {/* Doctor Dropdown */}
          <div className="appoint-box">
            <h3>Select Doctor</h3>

            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="form-control"
              disabled={!selectedDepartment}
            >
              <option value="">-- Choose Doctor --</option>

              {filteredDoctors.map((doc, idx) => (
                <option key={idx} value={doc.name}>
                  {doc.name} — {doc.city}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div className="appoint-box">
            <h3>Choose Date</h3>
            <input
              type="date"
              className="appoint-date"
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {/* Time */}
          <div className="appoint-box">
            <h3>Choose Time</h3>
            <div className="time-container">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-btn ${selectedTime === time ? "active" : ""}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="appoint-box">
            <h3>Your Details</h3>
            <input
              type="text"
              className="appoint-input"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button className="confirm-btn" onClick={handleBooking}>
            Confirm Booking
          </button>
          <br></br>
          {slipUrl && (
  <a 
    href={slipUrl} 
    download 
     
    // style={{ marginTop: "15px", backgroundColor: "#007bff" }}
  >
    
  </a>
)}

        </div>
      </div>

      {/* ------------------------ */}
      {/*  SCHEDULE MODAL POPUP     */}
      {/* ------------------------ */}

      {isModalOpen && (
        <div className="schedule-modal-overlay" onClick={closeModal}>
          <div className="schedule-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Check Doctor Schedule</h3>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>

            <div className="modal-body">
              <label>Select Doctor</label>

              <select
                value={modalDoctor}
                onChange={(e) => setModalDoctor(e.target.value)}
                className="form-control"
              >
                <option value="">-- Choose Doctor --</option>
                {allDoctors.map((doc, idx) => (
                  <option key={idx} value={doc.name}>
                    {doc.name} — {doc.city}
                  </option>
                ))}
              </select>

              <label style={{ marginTop: 10 }}>Select Date</label>

              <input
                type="date"
                value={modalDate}
                onChange={(e) => setModalDate(e.target.value)}
                className="appoint-date"
              />

              <button className="btn small" onClick={fetchAvailability} style={{ marginTop: 10 }}>
                {loadingSlots ? "Checking..." : "Show Slots"}
              </button>

              <div className="slots-grid" style={{ marginTop: 14 }}>
                {timeSlots.map((slot) => {
                  const booked = isSlotBooked(slot);
                  return (
                    <button
                      key={slot}
                      disabled={booked}
                      className={`slot-item ${booked ? "booked" : "available"}`}
                      onClick={() => !booked && bookFromModal(slot)}
                    >
                      {slot}
                      {booked && <span className="small-note">Booked</span>}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Appointmentnav;
