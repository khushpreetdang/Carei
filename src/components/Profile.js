import React from "react";
import "../styles/main.css";  // custom CSS

function Profile() {
  // Read user from localStorage
  const user = JSON.parse(localStorage.getItem("carei-user"));

  if (!user) {
    return (
      <div className="profile-container">
        <h2>User Not Logged In</h2>
        <p>Please login again.</p>
      </div>
    );
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2 className="profile-title">My Profile</h2>

        <div className="profile-info">
          <label>Name</label>
          <p>{user.name}</p>

          <label>Email</label>
          <p>{user.email}</p>

          <label>User ID</label>
          <p>{user._id}</p>

          {user.phone && (
            <>
              <label>Phone</label>
              <p>{user.phone}</p>
            </>
          )}
        </div>

        <button className="edit-btn">Edit Profile </button>
      </div>
    </div>
  );
}

export default Profile;
