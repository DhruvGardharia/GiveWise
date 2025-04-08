import React, { useEffect, useState } from "react";
import axios from "axios";

const AssignEventPage = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/volunteers/all")
      .then(res => setVolunteers(res.data))
      .catch(err => console.error("Volunteer fetch error:", err));

    axios.get("http://localhost:5000/api/events/all")
      .then(res => setEvents(res.data))
      .catch(err => console.error("Event fetch error:", err));
  }, []);

  const handleAssign = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/volunteer-event/assign", {
        Volunteer_id: selectedVolunteer,
        Event_id: selectedEvent
      });
      alert(res.data.message);
      setSelectedVolunteer("");
      setSelectedEvent("");
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Failed to assign event.");
      }
      console.error("Assignment error:", error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Assign Event to Volunteer</h2>
      <form onSubmit={handleAssign}>
        <select value={selectedVolunteer} onChange={e => setSelectedVolunteer(e.target.value)} required>
          <option value="">Select Volunteer</option>
          {volunteers.map(v => (
            <option key={v.Volunteer_id} value={v.Volunteer_id}>{v.name}</option>
          ))}
        </select>

        <select value={selectedEvent} onChange={e => setSelectedEvent(e.target.value)} required>
          <option value="">Select Event</option>
          {events.map(e => (
            <option key={e.Event_id} value={e.Event_id}>{e.name}</option>
          ))}
        </select>

        <button type="submit">Assign</button>
      </form>
    </div>
  );
};

export default AssignEventPage;
