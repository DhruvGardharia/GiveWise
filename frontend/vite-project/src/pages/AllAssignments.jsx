// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ViewAssignmentsPage = () => {
//   const [assignments, setAssignments] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/volunteer-event/assignments")
//       .then(res => setAssignments(res.data))
//       .catch(err => console.error("Error fetching assignments:", err));
//   }, []);

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Volunteer Event Assignments</h2>

//       {assignments.length === 0 ? (
//         <p>No assignments found.</p>
//       ) : (
//         <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th>Volunteer ID</th>
//               <th>Volunteer Name</th>
//               <th>Event ID</th>
//               <th>Event Name</th>
//               <th>Assigned Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignments.map((a, idx) => (
//               <tr key={idx}>
//                 <td>{a.Volunteer_id}</td>
//                 <td>{a.volunteer_name}</td>
//                 <td>{a.Event_id}</td>
//                 <td>{a.event_name}</td>
//                 <td>{new Date(a.date).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewAssignmentsPage;
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewAssignmentsPage = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/volunteer-event/assignments")
      .then((res) => setAssignments(res.data))
      .catch((err) => console.error("Error fetching assignments:", err));
  }, []);

  const handleDeleteAssignment = (volunteerId, eventId) => {
    console.log(volunteerId, eventId);
    axios
      .post("http://localhost:5000/api/volunteer-event/delete", {
        Volunteer_id: volunteerId,
        Event_id: eventId,
      })
      .then(() => {
        setAssignments(
          assignments.filter(
            (assignment) =>
              !(
                assignment.Volunteer_id === volunteerId &&
                assignment.Event_id === eventId
              )
          )
        );
      })
      .catch((err) => {
        console.error("Error deleting assignment:", err);
        alert("Failed to delete assignment. Please try again.");
      });
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
          maxWidth: "900px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#0f9d8a",
            color: "white",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "bold" }}>
            Volunteer Event Assignments
          </h1>
          <p style={{ marginTop: "8px", fontSize: "16px" }}>
            View all event assignments made to volunteers
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: "30px" }}>
          {assignments.length === 0 ? (
            <p style={{ textAlign: "center", fontSize: "18px", color: "#888" }}>
              No assignments found.
            </p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "10px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#e0f7f5" }}>
                    <th style={headerStyle}>Volunteer ID</th>
                    <th style={headerStyle}>Volunteer Name</th>
                    <th style={headerStyle}>Event ID</th>
                    <th style={headerStyle}>Event Name</th>
                    <th style={headerStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((a, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: "1px solid #ddd",
                        backgroundColor: idx % 2 === 0 ? "#fafafa" : "#fff",
                      }}
                    >
                      <td style={cellStyle}>{a.Volunteer_id}</td>
                      <td style={cellStyle}>{a.volunteer_name}</td>
                      <td style={cellStyle}>{a.Event_id}</td>
                      <td style={cellStyle}>{a.event_name}</td>
                      <td style={cellStyle}>
                        <button
                          style={{
                            color: "grey",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            handleDeleteAssignment(a.Volunteer_id, a.Event_id)
                          }
                        >
                          Delete Assignment
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Shared Styles
const headerStyle = {
  textAlign: "left",
  padding: "12px 16px",
  fontWeight: "bold",
  fontSize: "16px",
  color: "#0f9d8a",
  borderBottom: "2px solid #0f9d8a",
};

const cellStyle = {
  padding: "12px 16px",
  fontSize: "15px",
  color: "#333",
};

export default ViewAssignmentsPage;