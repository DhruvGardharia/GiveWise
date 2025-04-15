// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("volunteers");
//   const [volunteers, setVolunteers] = useState([]);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [volunteersRes, eventsRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/volunteers/all"),
//           axios.get("http://localhost:5000/api/events/all"),
//         ]);
//         setVolunteers(volunteersRes.data);
//         setEvents(eventsRes.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredVolunteers = volunteers.filter((volunteer) =>
//     volunteer.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredEvents = events.filter((event) =>
//     event.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
//             <div className="flex space-x-4">
//               <Link 
//                 to="/assign "
//                 className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//               >
//                 Assign Events
//               </Link>
//               <Link 
//                 to="/addevents" 
//                 className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//               >
//                 Add New Event
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Search and Tabs */}
//         <div className="mb-8">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//             <div className="tabs flex mb-4 sm:mb-0">
//               <button
//                 className={`px-6 py-2 text-lg font-medium rounded-t-lg ${
//                   activeTab === "volunteers"
//                     ? "bg-white text-teal-600 border-t border-l border-r border-gray-200"
//                     : "bg-gray-200 text-gray-600"
//                 }`}
//                 onClick={() => setActiveTab("volunteers")}
//               >
//                 Volunteers
//               </button>
//               <button
//                 className={`px-6 py-2 text-lg font-medium rounded-t-lg ${
//                   activeTab === "events"
//                     ? "bg-white text-teal-600 border-t border-l border-r border-gray-200"
//                     : "bg-gray-200 text-gray-600"
//                 }`}
//                 onClick={() => setActiveTab("events")}
//               >
//                 Events
//               </button>
//             </div>
//             <div className="w-full sm:w-64">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Content Based on Active Tab */}
//         <div className="bg-white shadow rounded-lg overflow-hidden">
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="text-lg text-gray-600">Loading...</div>
//             </div>
//           ) : activeTab === "volunteers" ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredVolunteers.length > 0 ? (
//                     filteredVolunteers.map((volunteer) => (
//                       <tr key={volunteer.Volunteer_id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.Volunteer_id}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{volunteer.name}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.email}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.phone || 'N/A'}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.skills || 'N/A'}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           <button className="text-teal-600 hover:text-teal-900 mr-3">Edit</button>
//                           <button className="text-red-600 hover:text-red-900">Delete</button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
//                         No volunteers found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredEvents.length > 0 ? (
//                     filteredEvents.map((event) => (
//                       <tr key={event.Event_id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.Event_id}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.name}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {new Date(event.date).toLocaleDateString()}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
//                         <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">{event.description}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           <button className="text-teal-600 hover:text-teal-900 mr-3">Edit</button>
//                           <button className="text-red-600 hover:text-red-900">Delete</button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
//                         No events found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("volunteers");
  const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [volunteersRes, eventsRes, itemsRes] = await Promise.all([
          axios.get("http://localhost:5000/api/volunteers/all"),
          axios.get("http://localhost:5000/api/events/all"),
          axios.get("http://localhost:5000/api/items/all"),
        ]);
        setVolunteers(volunteersRes.data);
        setEvents(eventsRes.data);
        setItems(itemsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Adding null checks to all filter functions to prevent errors
  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer && volunteer.name ? volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );

  const filteredEvents = events.filter((event) =>
    event && event.name ? event.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );
  
  const filteredItems = items.filter((item) =>
    item && item.name ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );

  const handleDeleteVolunteer = (volunteerId) => {
    setVolunteers(volunteers.filter((volunteer) => volunteer.Volunteer_id !== volunteerId));
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.Event_id !== eventId));
  };
  
  const handleDeleteItem = (itemId) => {
    setItems(items.filter((item) => item.Item_id !== itemId));
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex space-x-4">
              <Link
                to="/assign"
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Assign Events
              </Link>
              <Link
                to="/addevents"
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Add New Event
              </Link>
              <Link
                to="/additems"
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Add Items
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Tabs */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="tabs flex mb-4 sm:mb-0 flex-wrap">
              <button
                className={`px-6 py-2 text-lg font-medium rounded-t-lg ${
                  activeTab === "volunteers"
                    ? "bg-white text-teal-600 border-t border-l border-r border-gray-200"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab("volunteers")}
              >
                Volunteers
              </button>
              <button
                className={`px-6 py-2 text-lg font-medium rounded-t-lg ${
                  activeTab === "events"
                    ? "bg-white text-teal-600 border-t border-l border-r border-gray-200"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab("events")}
              >
                Events
              </button>
              <button
                className={`px-6 py-2 text-lg font-medium rounded-t-lg ${
                  activeTab === "items"
                    ? "bg-white text-teal-600 border-t border-l border-r border-gray-200"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab("items")}
              >
                Items
              </button>
              <Link
                to="/assigned"
                className={`px-6 py-2 text-lg font-medium rounded-t-lg ${
                  activeTab === "assignments"
                    ? "bg-white text-teal-600 border-t border-l border-r border-gray-200"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                Assignments
              </Link>
            </div>
            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-lg text-gray-600">Loading...</div>
            </div>
          ) : activeTab === "volunteers" ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredVolunteers.length > 0 ? (
                    filteredVolunteers.map((volunteer) => (
                      <tr key={volunteer.Volunteer_id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.Volunteer_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{volunteer.name || "N/A"}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.email || "N/A"}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volunteer.contact || "N/A"}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                        No volunteers found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : activeTab === "events" ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                      <tr key={event.Event_id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.Event_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.name || "N/A"}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.date ? new Date(event.date).toLocaleDateString() : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-teal-600 hover:text-teal-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteEvent(event.Event_id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                        No events found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Received</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <tr key={item.Item_id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Item_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name || "N/A"}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity || "0"}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.date ? new Date(item.date).toLocaleDateString() : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.donor_name || "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-teal-600 hover:text-teal-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteItem(item.Item_id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                        No items found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;