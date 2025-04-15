// import { useState, useEffect } from "react";
// import { Calendar, Clock, MapPin } from "lucide-react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export default function VolunteerDashboard() {
//   const [assignedEvents, setAssignedEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const params = useParams();

//   useEffect(() => {
//     // Fetch assigned events when component mounts
//     fetchAssignedEvents();
//   }, [params.token]);

//   const fetchAssignedEvents = async () => {
//     try {
//       console.log("Fetching assigned events for user:", params.token);
//       setLoading(true);
//       // Get events assigned to this volunteer
//       const response = await axios.get(
//         `http://localhost:5000/api/volunteer-event/events/${params.token}`
//       );
//       setAssignedEvents(response.data);
//       console.log("Assigned events:", response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching assigned events:", err);
//       setError("Failed to load your assigned events. Please try again later.");
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-center mx-auto max-w-lg mt-10">
//         <p>{error}</p>
//         <button
//           className="mt-4 bg-red-100 hover:bg-red-200 text-red-700 py-2 px-4 rounded"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="bg-teal-50 p-6 rounded-lg mb-8">
//         <h1 className="text-2xl font-bold text-teal-800">
//           Your Volunteer Dashboard
//         </h1>
//         <p className="text-teal-600 mt-2">View all events assigned to you</p>
//       </div>

//       {/* Assigned Events Section */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-bold mb-6">Your Assigned Tasks</h2>

//         {assignedEvents.length === 0 ? (
//           <div className="bg-gray-50 p-6 rounded-lg text-center">
//             <p className="text-gray-500">
//               You don't have any assigned tasks yet.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {assignedEvents.map((task) => (
//               <div
//                 key={task.Event_id}
//                 className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
//               >
//                 <h3 className="text-lg font-semibold mb-3">
//                   {task.event_name}
//                 </h3>
//                 <div className="space-y-2 text-gray-600">
//                   <div className="flex items-center">
//                     <Calendar className="h-4 w-4 mr-2 text-teal-600" />
//                     <span>{task.assigned_date.slice(0,10)}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="h-4 w-4 mr-2 text-teal-600" />
//                     <span>{task.assigned_date.slice(11,16)}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="h-4 w-4 mr-2 text-teal-600" />
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
//                     Assigned
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function VolunteerDashboard() {
  const [assignedEvents, setAssignedEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Fetch assigned events when component mounts
    fetchAssignedEvents();
    fetchAllEvents();
  }, [params.token]);

  const fetchAssignedEvents = async () => {
    try {
      console.log("Fetching assigned events for user:", params.token);
      setLoading(true);
      // Get events assigned to this volunteer
      const response = await axios.get(
        `http://localhost:5000/api/volunteer-event/events/${params.token}`
      );
      setAssignedEvents(response.data);
      console.log("Assigned events:", response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching assigned events:", err);
      setError("Failed to load your assigned events. Please try again later.");
      setLoading(false);
    }
  };

  const fetchAllEvents = async () => {
    try {
      console.log("Fetching all events");
      const response = await axios.get(`http://localhost:5000/api/events/all`);
      setAllEvents(response.data);
      console.log("All events:", response.data);
    } catch (err) {
      console.error("Error fetching all events:", err);
      setError("Failed to load all events. Please try again later.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-center mx-auto max-w-lg mt-10">
        <p>{error}</p>
        <button
          className="mt-4 bg-red-100 hover:bg-red-200 text-red-700 py-2 px-4 rounded"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-teal-50 p-6 rounded-lg mb-8">
        <h1 className="text-2xl font-bold text-teal-800">
          Your Volunteer Dashboard
        </h1>
        <p className="text-teal-600 mt-2">View all events assigned to you</p>
      </div>

      {/* Assigned Events Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Your Assigned Tasks</h2>

        {assignedEvents.length === 0 ? (
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-500">
              You don't have any assigned tasks yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignedEvents.map((task) => (
              <div
                key={task.Event_id}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {task.event_name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                    <span>{task.assigned_date.slice(0,10)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-teal-600" />
                    <span>{task.assigned_date.slice(11,19)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    Assigned
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* All Events Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">All Events</h2>

        {allEvents.length === 0 ? (
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-500">No events available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event) => (
              <div
                key={event.Event_id}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {event.name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                    <span>{event.date.slice(0,10)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-teal-600" />
                    <span>{event.date.slice(11,19)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}