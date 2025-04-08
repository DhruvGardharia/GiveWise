// frontend/src/components/DonationForm.jsx
import { useState } from 'react';
import axios from 'axios';

function DonationForm() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    amount: '',
    mode: 'cash',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/donation/donate', form);
      alert('Thank you for your donation!');
    } catch (err) {
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Make a Donation</h2>

      <input name="name" placeholder="Name" onChange={handleChange} className="w-full mb-2 p-2 border" required />
      <input name="contact" placeholder="Contact" onChange={handleChange} className="w-full mb-2 p-2 border" required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} className="w-full mb-2 p-2 border" required />
      <input name="amount" placeholder="Amount" type="number" onChange={handleChange} className="w-full mb-2 p-2 border" required />

      <select name="mode" onChange={handleChange} className="w-full mb-4 p-2 border">
        <option value="cash">Cash</option>
        <option value="credit card">Credit Card</option>
        <option value="debit card">Debit Card</option>
        <option value="upi">UPI</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Donate</button>
    </form>
  );
}

export default DonationForm;
