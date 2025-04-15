// import React, { useState } from "react";
// import axios from "axios";

// const VolunteerForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/volunteers/register", formData);
//       alert(res.data.message);
//       setFormData({ name: "", contact: "", email: "" });
//     } catch (error) {
//       alert("Error: " + error.response?.data?.message || "Server error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Volunteer Registration</h2>
//       <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full mb-3 p-2 border rounded" />
//       <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" className="w-full mb-3 p-2 border rounded" />
//       <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full mb-3 p-2 border rounded" />
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
//     </form>
//   );
// };

// export default VolunteerForm;
import React, { useState } from "react";
import axios from "axios";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/volunteers/register", formData);
      alert(res.data.message);
      setFormData({ name: "", contact: "", email: "", password: "" });
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            backgroundColor: "#0f9d8a",
            color: "white",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "bold" }}>
            Volunteer Registration
          </h1>
          <p style={{ marginTop: "8px", fontSize: "16px" }}>
            Join our community and make a difference
          </p>
        </div>

        {/* Form Section */}
        <div style={{ padding: "30px" }}>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#ffffff",
                  fontSize: "16px",
                  color: "#000",
                }}
              />
            </div>

            {/* Contact Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="contact"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#ffffff",
                  fontSize: "16px",
                  color: "#000",
                }}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#ffffff",
                  fontSize: "16px",
                  color: "#000",
                }}
              />
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: "30px" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a secure password"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#ffffff",
                  fontSize: "16px",
                  color: "#000",
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                backgroundColor: "#0f9d8a",
                color: "white",
                border: "none",
                padding: "14px",
                width: "100%",
                fontSize: "16px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0d8778")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#0f9d8a")}
            >
              Continue to Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;
