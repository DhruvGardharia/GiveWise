import React, { useEffect, useState } from "react";
import axios from "axios";

const AllEventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events/all");
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Events</h2>
      <table className="w-full border border-gray-300 shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Event ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Items</th>
            <th className="border px-4 py-2">No. of Attendees</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.Event_id}>
              <td className="border px-4 py-2">{event.Event_id}</td>
              <td className="border px-4 py-2">{event.name}</td>
              <td className="border px-4 py-2">{new Date(event.date).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{event.items}</td>
              <td className="border px-4 py-2">{event.no_of_attendees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEventsPage;
