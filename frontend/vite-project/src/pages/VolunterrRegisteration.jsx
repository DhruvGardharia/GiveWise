import React, { useState } from "react";
import axios from "axios";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/volunteers/register", formData);
      alert(res.data.message);
      setFormData({ name: "", contact: "", email: "" });
    } catch (error) {
      alert("Error: " + error.response?.data?.message || "Server error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Volunteer Registration</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full mb-3 p-2 border rounded" />
      <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" className="w-full mb-3 p-2 border rounded" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full mb-3 p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
};

export default VolunteerForm;
