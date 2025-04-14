import React, { useEffect, useState } from "react";
import axios from "axios";

const AllDonorsPage = () => {
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDonors = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/donation/all");
        setDonors(res.data);
      } catch (error) {
        console.error("Failed to fetch donors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const filteredDonors = donors.filter(donor => 
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      {/* Header Section with Gradient */}
      <div style={{
        background: "linear-gradient(135deg, #0f9d8a 0%, #08756a 100%)",
        color: "white",
        padding: "30px",
        borderRadius: "8px 8px 0 0",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ margin: "0", fontSize: "32px", fontWeight: "bold" }}>Our Generous Supporters</h1>
        <p style={{ margin: "10px 0 0 0", fontSize: "16px", opacity: "0.9" }}>
          Thank you to all the amazing individuals who make our work possible
        </p>
        
        {/* Search Bar */}
        <div style={{ 
          marginTop: "20px",
          display: "flex",
          backgroundColor: "rgba(255,255,255,0.2)",
          borderRadius: "4px",
          padding: "8px 15px",
          maxWidth: "400px"
        }}>
          <input
            type="text"
            placeholder="Search donors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              width: "100%",
              outline: "none",
              fontSize: "16px"
            }}
          />
          <span style={{ color: "white" }}>🔍</span>
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        border: "1px solid #e0e0e0",
        borderTop: "none"
      }}>
        {isLoading ? (
          <div style={{ 
            textAlign: "center", 
            padding: "40px",
            color: "#0f9d8a"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>Loading our supporter data...</p>
          </div>
        ) : filteredDonors.length === 0 ? (
          <div style={{ 
            textAlign: "center", 
            padding: "40px",
            color: "#666"
          }}>
            <p style={{ fontSize: "18px" }}>No donors found matching your search.</p>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0",
              marginTop: "10px"
            }}>
              <thead>
                <tr>
                  <th style={{
                    backgroundColor: "#f4f7f7",
                    padding: "15px",
                    textAlign: "left",
                    color: "#333",
                    fontWeight: "600",
                    borderBottom: "2px solid #0f9d8a"
                  }}>Donor ID</th>
                  <th style={{
                    backgroundColor: "#f4f7f7",
                    padding: "15px",
                    textAlign: "left",
                    color: "#333",
                    fontWeight: "600",
                    borderBottom: "2px solid #0f9d8a"
                  }}>Name</th>
                  <th style={{
                    backgroundColor: "#f4f7f7",
                    padding: "15px",
                    textAlign: "left",
                    color: "#333",
                    fontWeight: "600",
                    borderBottom: "2px solid #0f9d8a"
                  }}>Email</th>
                  <th style={{
                    backgroundColor: "#f4f7f7",
                    padding: "15px",
                    textAlign: "left",
                    color: "#333",
                    fontWeight: "600",
                    borderBottom: "2px solid #0f9d8a"
                  }}>Contact</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonors.map((donor, index) => (
                  <tr 
                    key={donor.Donor_id} 
                    style={{
                      backgroundColor: index % 2 === 0 ? "white" : "#f9fafa",
                      transition: "background-color 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#eef7f6"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "white" : "#f9fafa"}
                  >
                    <td style={{
                      padding: "15px",
                      borderBottom: "1px solid #eee",
                      color: "#0f9d8a",
                      fontWeight: "500"
                    }}>{donor.Donor_id}</td>
                    <td style={{
                      padding: "15px",
                      borderBottom: "1px solid #eee",
                      fontWeight: "500"
                    }}>{donor.name}</td>
                    <td style={{
                      padding: "15px",
                      borderBottom: "1px solid #eee",
                      color: "#555"
                    }}>{donor.email}</td>
                    <td style={{
                      padding: "15px",
                      borderBottom: "1px solid #eee",
                      color: "#555"
                    }}>{donor.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Statistics and Call to Action */}
        <div style={{ 
          marginTop: "30px", 
          padding: "20px",
          backgroundColor: "#f4f7f7",
          borderRadius: "6px",
          textAlign: "center"
        }}>
          <p style={{ 
            fontSize: "16px", 
            color: "#333",
            marginBottom: "15px"
          }}>
            <strong>{donors.length}</strong> supporters have joined our mission so far!
          </p>
          <button
            style={{
              backgroundColor: "#0f9d8a",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
              transition: "background-color 0.2s",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
            onClick={() => window.location.href = "/don"}
          >
            Become a Supporter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllDonorsPage;