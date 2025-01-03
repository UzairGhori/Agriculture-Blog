'use client';  // Add this line to make the component a Client Component

import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or store it)
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main className="flex flex-col justify-center items-center mt-5 p-6 min-h-screen">
      <h1 className="text-6xl font-bold mb-4 text-center animate-bounce">Contact Us</h1>
      <p className="text-lg mb-6 text-center">
        Have questions or feedback? We&apos;d love to hear from you! Please use the form below to get in touch with us, <br /> and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center ml-16 space-y-4 w-full max-w-md">
        <div className="w-full">
          <label htmlFor="name" className="block text-xl justify-center font-semibold">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border p-3 w-96 rounded-md"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block text-xl justify-center font-semibold">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="border p-3 w-96 rounded-md"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="message" className="block text-xl justify-center font-semibold">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            maxLength={500}
            className="border p-3 w-96 rounded-md"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-md mr-20 mt-4"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default ContactUs;
