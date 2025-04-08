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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Event</h2>
        
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <select
          name="items"
          value={formData.items}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Item</option>
          {itemsList.map(item => (
            <option key={item.Item_id} value={item.Item_id}>
              {item.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="no_of_attendees"
          placeholder="Number of Attendees"
          value={formData.no_of_attendees}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
