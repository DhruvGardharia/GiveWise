import React, { useEffect, useState } from "react";
import axios from "axios";

const AllDonorsPage = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/donation/all");
        setDonors(res.data);
      } catch (error) {
        console.error("Failed to fetch donors:", error);
      }
    };

    fetchDonors();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Donors</h2>
      <table className="w-full border border-gray-300 shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Donor ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Contact</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.Donor_id}>
              <td className="border px-4 py-2">{donor.Donor_id}</td>
              <td className="border px-4 py-2">{donor.name}</td>
              <td className="border px-4 py-2">{donor.email}</td>
              <td className="border px-4 py-2">{donor.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDonorsPage;
