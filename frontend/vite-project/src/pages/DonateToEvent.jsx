// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DonationPage = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     amount: '',
//     mode: 'upi',
//     eventId: ''
//   });

//   const [donationType, setDonationType] = useState('general'); // 'general' or 'event'
//   const [events, setEvents] = useState([]);

//   // Fetch all events on page load
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/events/all')
//       .then(res => setEvents(res.data))
//       .catch(err => console.error('Error fetching events:', err));
//   }, []);

//   const handleChange = (e) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = { ...form };
//     if (donationType === 'general') delete payload.eventId;

//     try {
//       const response = await axios.post('http://localhost:5000/api/donation/donate', payload);
//       alert(response.data.message);
//       setForm({ name: '', email: '', contact: '', amount: '', mode: 'upi', eventId: '' });
//     } catch (err) {
//       console.error('Donation error:', err.response?.data || err);
//       alert('Failed to process donation.');
//     }
//   };

//   return (
//     <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
//       <h2>Make a Donation</h2>

//       <div style={{ marginBottom: '20px' }}>
//         <label>
//           <input
//             type="radio"
//             value="general"
//             checked={donationType === 'general'}
//             onChange={() => setDonationType('general')}
//           /> General Donation
//         </label>
//         <label style={{ marginLeft: '20px' }}>
//           <input
//             type="radio"
//             value="event"
//             checked={donationType === 'event'}
//             onChange={() => setDonationType('event')}
//           /> Donate to Specific Event
//         </label>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Donor Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           type="text"
//           name="contact"
//           placeholder="Contact"
//           value={form.contact}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           type="number"
//           name="amount"
//           placeholder="Amount"
//           value={form.amount}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <select name="mode" value={form.mode} onChange={handleChange}>
//           <option value="upi">UPI</option>
//           <option value="cash">Cash</option>
//           <option value="credit card">Credit Card</option>
//           <option value="debit card">Debit Card</option>
//         </select><br /><br />

//         {donationType === 'event' && (
//           <select name="eventId" value={form.eventId} onChange={handleChange} required>
//             <option value="">Select Event</option>
//             {events.map(event => (
//               <option key={event.Event_id} value={event.Event_id}>
//                 {event.name}
//               </option>
//             ))}
//           </select>
//         )}<br /><br />

//         <button type="submit">Donate</button>
//       </form>
//     </div>
//   );
// };

// export default DonationPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    amount: '5000', // Default amount
    mode: 'upi',
    eventId: ''
  });

  const [donationType, setDonationType] = useState('');
  const [events, setEvents] = useState([]);
  const [showCredentials, setShowCredentials] = useState(false);

  // Fetch all events on page load
  useEffect(() => {
    axios.get('http://localhost:5000/api/events/all')
      .then(res => setEvents(res.data))
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAmountSelect = (amount) => {
    setForm(prev => ({ ...prev, amount: amount.toString() }));
  };

  const handleDonationTypeSelect = (type) => {
    setDonationType(type);
    setShowCredentials(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...form };
    if (donationType === 'general') delete payload.eventId;

    try {
      const response = await axios.post('http://localhost:5000/api/donation/donate', payload);
      alert(response.data.message);
      setForm({ name: '', email: '', contact: '', amount: '5000', mode: 'upi', eventId: '' });
      setShowCredentials(false);
      setDonationType('');
    } catch (err) {
      console.error('Donation error:', err.response?.data || err);
      alert('Failed to process donation.');
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f8f8f8',
      minHeight: '100vh',
      width: '100%'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e5e5e5',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            fontSize: '22px', 
            fontWeight: 'bold', 
            color: '#0D9B8A',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ color: '#0D9B8A', marginRight: '5px' }}>❤</span> GiveWise
          </div>
        </div>
        <nav>
          <ul style={{ 
            display: 'flex', 
            listStyleType: 'none',
            margin: 0,
            padding: 0 
          }}>
            <li style={{ margin: '0 15px' }}><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
            <li style={{ margin: '0 15px' }}><a href="#" style={{ textDecoration: 'none', color: '#333' }}>About Us</a></li>
            <li style={{ margin: '0 15px' }}><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Projects</a></li>
            <li style={{ margin: '0 15px' }}><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#333',
            cursor: 'pointer',
            padding: '8px 15px'
          }}>Sign In</button>
          <button style={{
            background: 'none',
            border: '1px solid #0D9B8A',
            color: '#0D9B8A',
            borderRadius: '4px',
            padding: '8px 15px',
            cursor: 'pointer'
          }}>Donate</button>
          <button style={{
            backgroundColor: '#0D9B8A',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 15px',
            cursor: 'pointer'
          }}>Volunteer</button>
        </div>
      </header>

      <div style={{
        maxWidth: '800px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        width: '100%'
      }}>
        <div style={{
          backgroundColor: '#0D9B8A',
          color: '#fff',
          padding: '30px'
        }}>
          <h1 style={{
            fontSize: '28px',
            marginBottom: '10px',
            fontWeight: 'normal'
          }}>Make a Donation</h1>
          <p style={{
            fontSize: '14px',
            color: '#fff',
            margin: 0
          }}>Your generosity creates lasting change</p>
        </div>

        {/* Donation Type Selection - Always visible */}
        <div style={{
          padding: '20px 30px',
          borderBottom: '1px solid #e5e5e5'
        }}>
          <h2 style={{
            fontSize: '18px',
            marginBottom: '20px',
            color: '#333',
            fontWeight: 'normal'
          }}>Choose Donation Type</h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {/* General Donation Option */}
            <div 
              onClick={() => handleDonationTypeSelect('general')}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '15px',
                border: donationType === 'general' ? '2px solid #0D9B8A' : '1px solid #e5e5e5',
                borderRadius: '6px',
                cursor: 'pointer',
                backgroundColor: donationType === 'general' ? '#f0faf9' : '#fff'
              }}
            >
              <input
                type="radio"
                value="general"
                checked={donationType === 'general'}
                onChange={() => handleDonationTypeSelect('general')}
                style={{ marginTop: '5px', marginRight: '15px' }}
              />
              <div>
                <h3 style={{
                  fontSize: '16px',
                  marginBottom: '5px',
                  color: '#333',
                  fontWeight: 'normal'
                }}>General donation to GiveWise</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: 0
                }}>Support all our initiatives and let us allocate funds where they're needed most</p>
              </div>
            </div>

            {/* Event Donation Option */}
            <div 
              onClick={() => handleDonationTypeSelect('event')}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '15px',
                border: donationType === 'event' ? '2px solid #0D9B8A' : '1px solid #e5e5e5',
                borderRadius: '6px',
                cursor: 'pointer',
                backgroundColor: donationType === 'event' ? '#f0faf9' : '#fff'
              }}
            >
              <input
                type="radio"
                value="event"
                checked={donationType === 'event'}
                onChange={() => handleDonationTypeSelect('event')}
                style={{ marginTop: '5px', marginRight: '15px' }}
              />
              <div>
                <h3 style={{
                  fontSize: '16px',
                  marginBottom: '5px',
                  color: '#333',
                  fontWeight: 'normal'
                }}>Donation to a specific event</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: 0
                }}>Choose a specific event or project to support</p>
              </div>
            </div>

            {/* Event Selection Dropdown - Only visible when 'event' donation type is selected */}
            {donationType === 'event' && (
              <div style={{ marginTop: '15px', padding: '0 10px' }}>
                <select 
                  name="eventId" 
                  value={form.eventId} 
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '4px',
                    fontSize: '14px',
                    backgroundColor: '#fff',
                    color: '#333'
                  }}
                >
                  <option value="">Select Event</option>
                  {events.map(event => (
                    <option key={event.Event_id} value={event.Event_id}>
                      {event.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Remaining form fields - Only visible after donation type is selected */}
        {showCredentials && (
          <form onSubmit={handleSubmit}>
            {/* Donation Amount Section */}
            <div style={{
              padding: '20px 30px',
              borderBottom: '1px solid #e5e5e5'
            }}>
              <h2 style={{
                fontSize: '18px',
                marginBottom: '20px',
                color: '#333',
                fontWeight: 'normal'
              }}>Donation Amount</h2>
              
              {/* Amount Buttons */}
              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '15px',
                flexWrap: 'wrap'
              }}>
                <button 
                  type="button" 
                  onClick={() => handleAmountSelect(3000)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #e5e5e5',
                    backgroundColor: form.amount === '3000' ? '#0D9B8A' : '#fff',
                    color: form.amount === '3000' ? '#fff' : '#333',
                    borderRadius: '4px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    minWidth: '100px'
                  }}
                >
                  ₹3000
                </button>
                <button 
                  type="button"
                  onClick={() => handleAmountSelect(5000)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #e5e5e5',
                    backgroundColor: form.amount === '5000' ? '#0D9B8A' : '#fff',
                    color: form.amount === '5000' ? '#fff' : '#333',
                    borderRadius: '4px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    minWidth: '100px'
                  }}
                >
                  ₹5000
                </button>
                <button 
                  type="button"
                  onClick={() => handleAmountSelect(10000)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #e5e5e5',
                    backgroundColor: form.amount === '10000' ? '#0D9B8A' : '#fff',
                    color: form.amount === '10000' ? '#fff' : '#333',
                    borderRadius: '4px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    minWidth: '100px'
                  }}
                >
                  ₹10000
                </button>
              </div>

              {/* Custom Amount Input */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #e5e5e5',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 15px',
                  backgroundColor: '#f8f8f8',
                  borderRight: '1px solid #e5e5e5',
                  height: '50px',
                  color: '#333',
                  fontSize: '18px'
                }}>₹</span>
                <input
                  type="text"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  required
                  style={{
                    flex: 1,
                    padding: '15px',
                    border: 'none',
                    fontSize: '18px',
                    outline: 'none',
                    width: '100%',
                    backgroundColor: '#fff',
                    color: '#333'
                  }}
                />
              </div>
            </div>

            {/* Personal Information Section */}
            <div style={{ padding: '20px 30px' }}>
              {/* Full Name */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  color: '#333'
                }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    backgroundColor: '#fff',
                    color: '#333'
                  }}
                />
              </div>
              
              {/* Email */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  color: '#333'
                }}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    backgroundColor: '#fff',
                    color: '#333'
                  }}
                />
              </div>
              
              {/* Contact Number */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  color: '#333'
                }}>Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Enter your contact number"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    backgroundColor: '#fff',
                    color: '#333'
                  }}
                />
              </div>
              
              {/* Payment Mode */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  color: '#333'
                }}>Payment Mode</label>
                <select 
                  name="mode" 
                  value={form.mode} 
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '4px',
                    fontSize: '14px',
                    backgroundColor: '#fff',
                    color: '#333'
                  }}
                >
                  <option value="upi">UPI</option>
                  <option value="cash">Cash</option>
                  <option value="credit card">Credit Card</option>
                  <option value="debit card">Debit Card</option>
                </select>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: '#0D9B8A',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  margin: '20px 0'
                }}
              >
                Continue to Payment
              </button>
            </div>
          </form>
        )}
        
        {/* Prompt if no donation type selected */}
        {!showCredentials && (
          <div style={{ padding: '20px 30px' }}>
            <p style={{ textAlign: 'center', color: '#666' }}>
              Please select a donation type to continue
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationPage;