import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    amount: '',
    mode: 'upi',
    eventId: ''
  });

  const [donationType, setDonationType] = useState('general'); // 'general' or 'event'
  const [events, setEvents] = useState([]);

  // Fetch all events on page load
  useEffect(() => {
    axios.get('http://localhost:5000/api/events/all')
      .then(res => setEvents(res.data))
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...form };
    if (donationType === 'general') delete payload.eventId;

    try {
      const response = await axios.post('http://localhost:5000/api/donation/donate', payload);
      alert(response.data.message);
      setForm({ name: '', email: '', contact: '', amount: '', mode: 'upi', eventId: '' });
    } catch (err) {
      console.error('Donation error:', err.response?.data || err);
      alert('Failed to process donation.');
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Make a Donation</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>
          <input
            type="radio"
            value="general"
            checked={donationType === 'general'}
            onChange={() => setDonationType('general')}
          /> General Donation
        </label>
        <label style={{ marginLeft: '20px' }}>
          <input
            type="radio"
            value="event"
            checked={donationType === 'event'}
            onChange={() => setDonationType('event')}
          /> Donate to Specific Event
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Donor Name"
          value={form.name}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={form.contact}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
        /><br /><br />

        <select name="mode" value={form.mode} onChange={handleChange}>
          <option value="upi">UPI</option>
          <option value="cash">Cash</option>
          <option value="credit card">Credit Card</option>
          <option value="debit card">Debit Card</option>
        </select><br /><br />

        {donationType === 'event' && (
          <select name="eventId" value={form.eventId} onChange={handleChange} required>
            <option value="">Select Event</option>
            {events.map(event => (
              <option key={event.Event_id} value={event.Event_id}>
                {event.name}
              </option>
            ))}
          </select>
        )}<br /><br />

        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationPage;
