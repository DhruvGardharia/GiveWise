// src/pages/LandingPage.jsx
import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Heart, Users, School, Coffee } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    success: false,
    events: false,
    tax: false,
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      about: true,
      success: true,
      events: true,
      tax: true,
    });
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      name: "Clean Water Initiative",
      description: "Join us in providing clean water to rural communities",
      date: "May 15, 2025",
      time: "10:00 AM",
      venue: "Central Park, New York",
      targetAmount: 5000,
      raisedAmount: 2500,
    image :"https://img.freepik.com/free-photo/view-realistic-hands-touching-clear-flowing-water_23-2151210243.jpg?ga=GA1.1.1260585488.1744661464&semt=ais_hybrid&w=740"    },
    {
      id: 2,
      name: "Education for All",
      description: "Help us build a school for underprivileged children",
      date: "June 20, 2025",
      time: "9:00 AM",
      venue: "Community Center, Boston",
      targetAmount: 10000,
      raisedAmount: 4000,   
        image:"https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241012.jpg?ga=GA1.1.1260585488.1744661464&semt=ais_hybrid&w=740"    },
    {
      id: 3,
      name: "Food Distribution Drive",
      description: "Distribute food packages to homeless shelters",
      date: "July 5, 2025",
      time: "11:00 AM",
      venue: "Downtown, Chicago",
      targetAmount: 3000,
      raisedAmount: 1800,
    image:"https://img.freepik.com/free-photo/lots-volunteers-preparing-boxes-with-food-donations-using-tablet_23-2148732711.jpg?ga=GA1.1.1260585488.1744661464&semt=ais_hybrid&w=740"    },
  ];

  const successStories = [
    {
      id: 1,
      title: "Clean Water for Village",
      description: "Provided clean water access to over 500 families in rural India",
    image:"https://img.freepik.com/free-photo/african-woman-pouring-water-recipient-outdoors_23-2149021909.jpg?ga=GA1.1.1260585488.1744661464&semt=ais_hybrid&w=740"    },
    {
      id: 2,
      title: "New School Building",
      description: "Built a school that now educates 200 children in underserved communities",
        image:"https://img.freepik.com/premium-photo/empty-classroom-class-room-school-without-student-teacher_969459-2627.jpg?ga=GA1.1.1260585488.1744661464&semt=ais_hybrid&w=740"    },
    {
      id: 3,
      title: "Medical Camp Success",
      description: "Provided free healthcare to 1,000+ people through our medical camps",
      image: "https://img.freepik.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg?semt=ais_hybrid&w=740",
    },
  ];

  const handleDonateForEvent = () => {
    window.location.href = `/don`;
  };

  const handleVolunteerForEvent = () => {
    window.location.href = `/login`;
  };

  const handleVolunteer = () => {
    window.location.href = `/login`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Background Image */}
      <section
        className={`relative h-96 md:h-[600px] flex items-center transition-opacity duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 z-0 bg-gray-700">
          <img
            src="https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg"
            alt="People helping in community"
            className="object-cover w-full h-full brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Making a Difference Together</h1>
            <p className="text-xl mb-8 text-gray-100">
              GiveWise helps communities thrive through sustainable development projects, education initiatives, and
              humanitarian aid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white transition-all transform hover:scale-105 px-6 py-3 rounded-md font-medium"
                onClick={() => (window.location.href = "/don")}
              >
                Donate Now
              </button>
              <button
                className="border border-white text-white hover:bg-white hover:text-teal-700 transition-all transform hover:scale-105 px-6 py-3 rounded-md font-medium"
                onClick={handleVolunteer}
              >
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Stats */}
      <section
        className={`py-20 bg-white transition-all duration-1000 transform ${
          isVisible.about ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About GiveWise</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, GiveWise is dedicated to creating sustainable change in communities around the world.
                We believe in transparency, accountability, and making a lasting impact through our initiatives.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team works directly with local communities to understand their needs and implement solutions that
                empower them for the long term.
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-105 text-white px-6 py-3 rounded-md font-medium">
                Learn More About Us
              </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
                <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-teal-700 mb-2">10,000+</h3>
                <p className="text-gray-600">Lives Impacted</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
                <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-teal-700 mb-2">500+</h3>
                <p className="text-gray-600">Volunteers</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
                <School className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-teal-700 mb-2">25</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
                <Coffee className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-teal-700 mb-2">15</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Success Stories */}
      <section
        className={`py-20 bg-gray-50 transition-all duration-1000 transform ${
          isVisible.success ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recent Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="h-48 relative">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{story.title}</h3>
                  <p className="text-gray-600">{story.description}</p>
                  <Link to="#" className="inline-block mt-4 text-teal-600 hover:text-teal-700 font-medium">
                    Read full story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section
        className={`py-20 bg-white transition-all duration-1000 transform ${
          isVisible.events ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="h-48 relative">
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{event.name}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-teal-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <button
                      className="bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-105 text-white px-4 py-2 rounded-md"
                      onClick={() => handleDonateForEvent()}
                    >
                      Donate
                    </button>
                    <button
                      className="border border-teal-600 text-teal-600 hover:bg-teal-50 transition-all transform hover:scale-105 px-4 py-2 rounded-md"
                      onClick={() => handleVolunteerForEvent()}
                    >
                      Volunteer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section
        className={`py-20 bg-teal-50 transition-all duration-1000 transform ${
          isVisible.tax ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Tax Benefits of Donating</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            When you donate to GiveWise, you're not only making a difference in the world, but you may also qualify for
            tax deductions. Donations to our organization are tax-deductible under Section 501(c)(3) of the Internal
            Revenue Code.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">How Your Donations Can Reduce Your Tax Burden</h3>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">
                  Donations to GiveWise may be deducted from your federal income tax return.
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">
                  You'll receive an official receipt for all donations that can be used for tax purposes.
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">
                  Corporate donations may qualify for additional tax benefits and CSR recognition.
                </span>
              </li>
            </ul>
            <button
              className="bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-105 text-white px-6 py-3 rounded-md font-medium"
              onClick={() => (window.location.href = "/don")}
            >
              Make a Tax-Deductible Donation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
// // src/pages/LandingPage.jsx
// import { useState, useEffect } from "react";
// import { Calendar, Clock, MapPin, Heart, Users, School, Coffee } from "lucide-react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

// export default function LandingPage() {
//   const [isVisible, setIsVisible] = useState({
//     hero: false,
//     about: false,
//     success: false,
//     events: false,
//     tax: false,
//   });

//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsVisible({
//       hero: true,
//       about: true,
//       success: true,
//       events: true,
//       tax: true,
//     });
//   }, []);

//   // Fetch events from the API
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:5000/api/events/all');
        
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setUpcomingEvents(data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch events:", err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const successStories = [
//     {
//       id: 1,
//       title: "Clean Water for Village",
//       description: "Provided clean water access to over 500 families in rural India",
//       image: "/placeholder.jpg",
//     },
//     {
//       id: 2,
//       title: "New School Building",
//       description: "Built a school that now educates 200 children in underserved communities",
//       image: "/placeholder.jpg",
//     },
//     {
//       id: 3,
//       title: "Medical Camp Success",
//       description: "Provided free healthcare to 1,000+ people through our medical camps",
//       image: "/placeholder.jpg",
//     },
//   ];

//   const handleDonateForEvent = () => {
//     window.location.href = `/don`;
//   };

//   const handleVolunteerForEvent = () => {
//     window.location.href = `/login`;
//   };

//   const handleVolunteer = () => {
//     window.location.href = `/login`;
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       {/* Hero Section with Background Image */}
//       <section
//         className={`relative h-96 md:h-[600px] flex items-center transition-opacity duration-1000 ${
//           isVisible.hero ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="absolute inset-0 z-0 bg-gray-700">
//           <img
//             src="/placeholder.jpg"
//             alt="People helping in community"
//             className="object-cover w-full h-full brightness-50"
//           />
//         </div>
//         <div className="container mx-auto px-4 relative z-10 text-white">
//           <div className="max-w-2xl">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Making a Difference Together</h1>
//             <p className="text-xl mb-8 text-gray-100">
//               GiveWise helps communities thrive through sustainable development projects, education initiatives, and
//               humanitarian aid.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 className="bg-teal-500 hover:bg-teal-600 text-white transition-all transform hover:scale-105 px-6 py-3 rounded-md font-medium"
//                 onClick={() => (window.location.href = "/don")}
//               >
//                 Donate Now
//               </button>
//               <button
//                 className="border border-white text-white hover:bg-white hover:text-teal-700 transition-all transform hover:scale-105 px-6 py-3 rounded-md font-medium"
//                 onClick={handleVolunteer}
//               >
//                 Volunteer
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section with Stats */}
//       <section
//         className={`py-20 bg-white transition-all duration-1000 transform ${
//           isVisible.about ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row gap-12 items-center">
//             <div className="lg:w-1/2">
//               <h2 className="text-3xl font-bold mb-6 text-gray-800">About GiveWise</h2>
//               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                 Founded in 2020, GiveWise is dedicated to creating sustainable change in communities around the world.
//                 We believe in transparency, accountability, and making a lasting impact through our initiatives.
//               </p>
//               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                 Our team works directly with local communities to understand their needs and implement solutions that
//                 empower them for the long term.
//               </p>
//               <button className="bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-105 text-white px-6 py-3 rounded-md font-medium">
//                 Learn More About Us
//               </button>
//             </div>
//             <div className="lg:w-1/2 grid grid-cols-2 gap-6">
//               <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
//                 <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
//                 <h3 className="text-4xl font-bold text-teal-700 mb-2">10,000+</h3>
//                 <p className="text-gray-600">Lives Impacted</p>
//               </div>
//               <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
//                 <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
//                 <h3 className="text-4xl font-bold text-teal-700 mb-2">500+</h3>
//                 <p className="text-gray-600">Volunteers</p>
//               </div>
//               <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
//                 <School className="h-12 w-12 text-teal-600 mx-auto mb-4" />
//                 <h3 className="text-4xl font-bold text-teal-700 mb-2">25</h3>
//                 <p className="text-gray-600">Projects Completed</p>
//               </div>
//               <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
//                 <Coffee className="h-12 w-12 text-teal-600 mx-auto mb-4" />
//                 <h3 className="text-4xl font-bold text-teal-700 mb-2">15</h3>
//                 <p className="text-gray-600">Countries Served</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Recent Success Stories */}
//       <section
//         className={`py-20 bg-gray-50 transition-all duration-1000 transform ${
//           isVisible.success ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recent Success Stories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {successStories.map((story) => (
//               <div
//                 key={story.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105"
//               >
//                 <div className="h-48 relative">
//                   <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-gray-800">{story.title}</h3>
//                   <p className="text-gray-600">{story.description}</p>
//                   <Link to="#" className="inline-block mt-4 text-teal-600 hover:text-teal-700 font-medium">
//                     Read full story →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section
//         className={`py-20 bg-white transition-all duration-1000 transform ${
//           isVisible.events ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
          
//           {loading && (
//             <div className="text-center py-12">
//               <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-500 border-r-transparent"></div>
//               <p className="mt-4 text-gray-600">Loading events...</p>
//             </div>
//           )}
          
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-8 text-center">
//               <p>Failed to load events: {error}</p>
//               <p className="mt-2">Please try refreshing the page</p>
//             </div>
//           )}
          
//           {!loading && !error && upcomingEvents.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-gray-600">No upcoming events found.</p>
//             </div>
//           )}
          
//           {!loading && !error && upcomingEvents.length > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {upcomingEvents.map((event) => (
//                 <div
//                   key={event.id}
//                   className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105"
//                 >
//                   <div className="h-48 relative">
//                     <img 
//                       src={event.image || "/placeholder.jpg"} 
//                       alt={event.name} 
//                       className="w-full h-full object-cover" 
//                       onError={(e) => {e.target.src = "/placeholder.jpg"}}
//                     />
//                     <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       Upcoming
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2 text-gray-800">{event.name}</h3>
//                     <p className="text-gray-600 mb-4">{event.description}</p>
//                     <div className="space-y-2 text-gray-500 mb-4">
//                       <div className="flex items-center">
//                         <Calendar className="h-4 w-4 mr-2 text-teal-600" />
//                         <span>{event.date}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Clock className="h-4 w-4 mr-2 text-teal-600" />
//                         <span>{event.time}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <MapPin className="h-4 w-4 mr-2 text-teal-600" />
//                         <span>{event.venue}</span>
//                       </div>
//                     </div>
//                     <div className="flex flex-col sm:flex-row gap-2 mt-4">
//                       <button
//                         className="bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-105 text-white px-4 py-2 rounded-md"
//                         onClick={() => handleDonateForEvent()}
//                       >
//                         Donate
//                       </button>
//                       <button
//                         className="border border-teal-600 text-teal-600 hover:bg-teal-50 transition-all transform hover:scale-105 px-4 py-2 rounded-md"
//                         onClick={() => handleVolunteerForEvent()}
//                       >
//                         Volunteer
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Tax Benefits Section */}
//       <section
//         className={`py-20 bg-teal-50 transition-all duration-1000 transform ${
//           isVisible.tax ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         }`}
//       >
//         <div className="container mx-auto px-4 max-w-4xl text-center">
//           <h2 className="text-3xl font-bold mb-8 text-gray-800">Tax Benefits of Donating</h2>
//           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//             When you donate to GiveWise, you're not only making a difference in the world, but you may also qualify for
//             tax deductions. Donations to our organization are tax-deductible under Section 501(c)(3) of the Internal
//             Revenue Code.
//           </p>
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">How Your Donations Can Reduce Your Tax Burden</h3>
//             <ul className="text-left space-y-3 mb-6">
//               <li className="flex items-start">
//                 <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
//                   <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-600">
//                   Donations to GiveWise may be deducted from your federal income tax return.
//                 </span>
//               </li>
//               <li className="flex items-start">
//                 <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
//                   <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-600">
//                   You'll receive an official receipt for all donations that can be used for tax purposes.
//                 </span>
//               </li>
//               <li className="flex items-start">
//                 <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
//                   <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-600">
//                   Corporate donations may qualify for additional tax benefits and CSR recognition.
//                 </span>
//               </li>
//             </ul>
//             <button
//               className="bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-105 text-white px-6 py-3 rounded-md font-medium"
//               onClick={() => (window.location.href = "/don")}
//             >
//               Make a Tax-Deductible Donation
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }