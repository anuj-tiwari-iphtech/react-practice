

import { useState } from "react";

function PracticeProject() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    city: "",
    college: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Profile Card</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={profile.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={profile.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="city"
        placeholder="Enter City"
        value={profile.city}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="college"
        placeholder="Enter College"
        value={profile.college}
        onChange={handleChange}
      />

      <hr />

      <div
        style={{
          border: "1px solid gray",
          borderRadius: "8px",
          padding: "20px",
          width: "300px"
        }}
      >
        <h3>Profile Card</h3>

        <p><strong>Name:</strong> {profile.name || "Not Provided"}</p>

        <p><strong>Email:</strong> {profile.email || "Not Provided"}</p>

        <p><strong>City:</strong> {profile.city || "Not Provided"}</p>

        <p><strong>College:</strong> {profile.college || "Not Provided"}</p>
      </div>
    </div>
  );
}

export default PracticeProject