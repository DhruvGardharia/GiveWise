import React, { useEffect, useState } from "react";
import axios from "axios";

const AssignEventPage = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/volunteers/all")
      .then((res) => setVolunteers(res.data))
      .catch((err) => console.error("Volunteer fetch error:", err));

    axios
      .get("http://localhost:5000/api/events/all")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Event fetch error:", err));
  }, []);

  const handleAssign = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/volunteer-event/assign", {
        Volunteer_id: selectedVolunteer,
        Event_id: selectedEvent,
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
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-lg bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-teal-600 text-white p-6 text-center">
          <h1 className="text-2xl font-bold m-0">Assign Event to Volunteer</h1>
          <p className="mt-2 text-sm">Link your volunteers to upcoming events</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form onSubmit={handleAssign}>
            {/* Volunteer Select */}
            <div className="mb-4">
              <label
                htmlFor="volunteer"
                className="block mb-2 font-bold text-gray-700"
              >
                Select Volunteer
              </label>
              <select
                id="volunteer"
                value={selectedVolunteer}
                onChange={(e) => setSelectedVolunteer(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">-- Choose a Volunteer --</option>
                {volunteers.map((v) => (
                  <option key={v.Volunteer_id} value={v.Volunteer_id}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Select */}
            <div className="mb-6">
              <label
                htmlFor="event"
                className="block mb-2 font-bold text-gray-700"
              >
                Select Event
              </label>
              <select
                id="event"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">-- Choose an Event --</option>
                {events.map((e) => (
                  <option key={e.Event_id} value={e.Event_id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-md font-bold text-base transition-colors duration-300 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Assign Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignEventPage;