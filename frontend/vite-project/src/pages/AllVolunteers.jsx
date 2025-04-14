import React, { useEffect, useState } from "react";
import axios from "axios";

const AllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/volunteers/all");
        setVolunteers(response.data);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchVolunteers();
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
        <h1 style={{ margin: "0", fontSize: "32px" }}>Our Volunteer Community</h1>
        <p style={{ margin: "10px 0 0 0" }}>Meet the dedicated individuals making a difference</p>
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
            <p style={{ color: "#0f9d8a", fontWeight: "bold" }}>Loading volunteers...</p>
          </div>
        ) : volunteers.length === 0 ? (
          <div style={{ textAlign: "center", padding: "30px" }}>
            <p>No volunteers registered yet.</p>
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
                  }}>ID</th>
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
                  }}>Contact</th>
                  <th style={{
                    backgroundColor: "#f2f2f2",
                    padding: "12px 15px",
                    borderBottom: "2px solid #0f9d8a",
                    textAlign: "left",
                    color: "#333"
                  }}>Email</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map((volunteer, index) => (
                  <tr key={volunteer.Volunteer_id} style={{
                    backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9",
                  }}>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0"
                    }}>{volunteer.Volunteer_id}</td>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0",
                      fontWeight: "500"
                    }}>{volunteer.name}</td>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0"
                    }}>{volunteer.contact}</td>
                    <td style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid #e0e0e0"
                    }}>{volunteer.email}</td>
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
          <p>Thank you to all our volunteers for their dedication and support!</p>
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
            onClick={() => window.location.href = "/volunteer"}
          >
            Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteers;