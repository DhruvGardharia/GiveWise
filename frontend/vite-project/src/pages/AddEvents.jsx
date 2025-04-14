import React, { useState, useEffect } from "react";
import axios from "axios";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    items: "",
    no_of_attendees: "",
  });

  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    // Fetch available items to choose from
    axios.get("http://localhost:5000/api/items/all")
      .then((res) => setItemsList(res.data))
      .catch((err) => console.error("Failed to fetch items", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/events/add", formData);
      alert("Event added successfully!");
      setFormData({ name: "", date: "", items: "", no_of_attendees: "" });
    } catch (error) {
      console.error("Error adding event", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ 
      maxWidth: "600px", 
      margin: "0 auto", 
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      {/* Header Section */}
      <div style={{ 
        backgroundColor: "#0f9d8a", 
        color: "white", 
        padding: "25px", 
        borderRadius: "5px 5px 0 0"
      }}>
        <h1 style={{ margin: "0", fontSize: "32px" }}>Add New Event</h1>
        <p style={{ margin: "10px 0 0 0" }}>Create an event for your community</p>
      </div>
      
      {/* Form Section */}
      <div style={{ 
        backgroundColor: "white", 
        padding: "30px",
        border: "1px solid #e0e0e0",
        borderTop: "none",
        borderRadius: "0 0 5px 5px"
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label 
              htmlFor="name" 
              style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "bold",
                color: "#444" 
              }}
            >
              Event Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#f8f8f8"
              }}
            />
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label 
              htmlFor="date" 
              style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "bold",
                color: "#444" 
              }}
            >
              Event Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#f8f8f8"
              }}
            />
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label 
              htmlFor="items" 
              style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "bold",
                color: "#444" 
              }}
            >
              Select Items
            </label>
            <select
              id="items"
              name="items"
              value={formData.items}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#f8f8f8",
                appearance: "none" // Removes default browser styling
              }}
            >
              <option value="">Select Item</option>
              {itemsList.map(item => (
                <option key={item.Item_id} value={item.Item_id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          
          <div style={{ marginBottom: "30px" }}>
            <label 
              htmlFor="no_of_attendees" 
              style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "bold",
                color: "#444" 
              }}
            >
              Number of Attendees
            </label>
            <input
              type="number"
              id="no_of_attendees"
              name="no_of_attendees"
              value={formData.no_of_attendees}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#f8f8f8"
              }}
            />
          </div>
          
          <button 
            type="submit"
            style={{
              backgroundColor: "#0f9d8a",
              color: "white",
              border: "none",
              padding: "14px 20px",
              width: "100%",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;