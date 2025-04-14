import React, { useEffect, useState } from "react";
import axios from "axios";

const AllEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/events/all");
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
          
  }, []);

  
  return (
    <div style={{
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      {/* Header Section */}
      <div style={{
        backgroundColor: "#0f9d8a",
        color: "white",
        padding: "25px",
        borderRadius: "5px 5px 0 0",
        marginBottom: "0"
      }}>
        <h1 style={{ margin: "0", fontSize: "32px" }}>Upcoming Events</h1>
        <p style={{ margin: "10px 0 0 0" }}>Join us and make a difference in your community</p>
      </div>

      {/* Table Section */}
      <div style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "0 0 5px 5px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        border: "1px solid #e0e0e0",
        borderTop: "none"
      }}>
        {isLoading ? (
          <div style={{ textAlign: "center", padding: "30px" }}>
            <p style={{ color: "#0f9d8a", fontWeight: "bold" }}>Loading events...</p>
          </div>
        ) : events.length === 0 ? (
          <div style={{ textAlign: "center", padding: "30px" }}>
            <p>No events scheduled yet. Check back soon!</p>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px"
            }}>
              <thead>
                <tr>
                  <th style={{
                    backgroundColor: "#f2f2f2",
                    padding: "12px 15px",
                    borderBottom: "2px solid #0f9d8a",
                    textAlign: "left",
                    color: "#333"
                  }}>Event ID</th>
                  <th style={{
                    backgroundColor: "#f2f2f2",
                    padding: "12px 15px",
                    borderBottom: "2px solid #0f9d8a",
                    textAlign: "left",
                    color: "#333"
                  }}>Name</th>
                  <th style={{
                    backgroundColor: "#f2f2f2",
                    padding: "12px 15px",
                    borderBottom: "2px solid #0f9d8a",
                    textAlign: "left",
                    color: "#333"
                  }}>Date</th>
                  <th style={{
                    backgroundColor: "#f2f2f2",
                    padding: "12px 15px",
                    borderBottom: "2px solid #0f9d8a",
                    textAlign: "left",
                    color: "#333"
                  }}>Items</th>
                  <th style={{
                    backgroundColor: "#f2f2f2",
                    padding: "12px 15px",
                    borderBottom: "2px solid #0f9d8a",
                    textAlign: "left",
                    color: "#333"
                  }}>No. of Attendees</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={event.Event_id} style={{
                    backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9",
                  }}>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0"
                    }}>{event.Event_id}</td>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0",
                      fontWeight: "500"
                    }}>{event.name}</td>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0"
                    }}>{new Date(event.date).toLocaleDateString()}</td>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0"
                    }}>{event.items}</td>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0"
                    }}>{event.no_of_attendees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div style={{ 
          marginTop: "25px", 
          textAlign: "center",
          color: "#666",
          fontSize: "14px"
        }}>
          <p>Want to organize an event? We'd love your involvement!</p>
          <button
            style={{
              backgroundColor: "#0f9d8a",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "15px"
            }}
            onClick={() => window.location.href = "/addevents"}
          >
            Create New Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllEventsPage;