import React, { useState } from 'react';
import axios from 'axios';
import ThankYou from './ThankYou'; // Import the ThankYou component

export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false); 
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/contact`, {
        name,
        email,
        message,
      });
      console.log(response.data);
      setShowThankYou(true); // Show the ThankYou component

      // Hide the ThankYou component after the animation has played
      setTimeout(() => setShowThankYou(false), 3000); // Adjust timeout to match animation duration
    } catch (error) {
      console.error('There was an error!', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <div className="bg-gray-800 rounded shadow-md flex flex-col items-center shadow-gray-700 p-6 max-w-screen-lg mx-auto">
        <h1 className="text-4xl md:text-5xl m-4 rounded underline p-4 font-bold text-white text-center">
          Get In Touch
        </h1>
        <div className="border shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs md:max-w-lg bg-gray-700">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Conditionally render the ThankYou component */}
        {showThankYou && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
            <ThankYou />
          </div>
        )}
      </div>
    </>
  );
}
