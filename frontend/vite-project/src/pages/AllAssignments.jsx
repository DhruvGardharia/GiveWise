import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewAssignmentsPage = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/volunteer-event/assignments")
      .then(res => setAssignments(res.data))
      .catch(err => console.error("Error fetching assignments:", err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Volunteer Event Assignments</h2>

      {assignments.length === 0 ? (
        <p>No assignments found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Volunteer ID</th>
              <th>Volunteer Name</th>
              <th>Event ID</th>
              <th>Event Name</th>
              <th>Assigned Date</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a, idx) => (
              <tr key={idx}>
                <td>{a.Volunteer_id}</td>
                <td>{a.volunteer_name}</td>
                <td>{a.Event_id}</td>
                <td>{a.event_name}</td>
                <td>{new Date(a.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAssignmentsPage;
