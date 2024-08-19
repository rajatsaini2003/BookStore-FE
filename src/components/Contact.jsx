import  { useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('https://bookstore-be-y78l.onrender.com/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      alert('Failed to send message.');
      console.error('Error:', error);
    }
  };
  
  return (
    <div className=" pt-8 flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl text-white font-bold mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full bg-gray-800 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-gray-800 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full bg-gray-800 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
