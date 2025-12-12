import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later you can connect email API or backend
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg">Got a question or want to collaborate? Drop me a message!</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border bg-[#1a1a1a] border-[#2a2a2a] text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border bg-[#1a1a1a] border-[#2a2a2a] text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-4 rounded-xl border bg-[#1a1a1a] border-[#2a2a2a] text-white focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
          >
            Send Message
          </button>
          {submitted && <p className="text-green-400 mt-2">Thanks! Message sent.</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
