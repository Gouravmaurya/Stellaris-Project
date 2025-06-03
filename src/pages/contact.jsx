import React, { useState } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = 'Enter a valid email.';
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setIsSubmitting(true);
    setFeedback(null);
    try {
      await new Promise(res => setTimeout(res, 1200)); // Simulate API
      setFeedback({ type: 'success', msg: 'Thank you! We have received your message.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFeedback({ type: 'error', msg: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-[#121418]">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-b from-[#0a0c10] to-[#1a1d24] py-20 md:py-28 px-4 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            className="mb-6 text-blue-400 text-xl md:text-2xl font-semibold tracking-wide uppercase drop-shadow"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Contact Us
          </motion.h2>
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Let's Start a Conversation
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            Have a project in mind or want to learn more about our services? Our team is here to help you achieve your business goals.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#1a1d24]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div className="bg-[#121418] rounded-xl shadow-2xl border border-gray-800/50 p-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
            <p className="text-gray-400 mb-8">We'll get back to you within 24 hours</p>
            <AnimatePresence>
              {feedback && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={`mb-6 p-4 rounded-lg ${feedback.type === 'success' ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'}`}>
                  <span className={`font-medium ${feedback.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>{feedback.msg}</span>
                </motion.div>
              )}
            </AnimatePresence>
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full bg-[#1a1d24] text-white border ${errors.name ? 'border-red-500' : 'border-gray-700 focus:border-blue-500'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all`} placeholder="Your name" />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-[#1a1d24] text-white border ${errors.email ? 'border-red-500' : 'border-gray-700 focus:border-blue-500'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all`} placeholder="you@email.com" />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-[#1a1d24] text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all" placeholder="How can we help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className={`w-full bg-[#1a1d24] text-white border ${errors.message ? 'border-red-500' : 'border-gray-700 focus:border-blue-500'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all`} placeholder="Tell us about your project or inquiry..." />
                  {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message}</span>}
                </div>
                <motion.button type="submit" className={`w-full flex justify-center items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`} whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }} disabled={isSubmitting}>
                  {isSubmitting ? (<span>Sending...</span>) : ('Send Message')}
                </motion.button>
              </div>
            </form>
          </motion.div>
          {/* Contact Info */}
          <motion.div className="flex flex-col justify-between space-y-10" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300"><FaEnvelope className="mr-3 text-blue-400" /> info@stellaris.com</div>
                <div className="flex items-center text-gray-300"><FaPhone className="mr-3 text-blue-400" /> +1 (555) 123-4567</div>
                <div className="flex items-center text-gray-300"><FaMapMarkerAlt className="mr-3 text-blue-400" /> 123 Business Ave, San Francisco, CA</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2 flex items-center"><FaClock className="mr-2 text-blue-400" /> Business Hours</h4>
              <ul className="text-gray-400 text-sm">
                {businessHours.map(bh => (<li key={bh.day}>{bh.day}: <span className="text-white">{bh.hours}</span></li>))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Connect with us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl"><FaLinkedin /></a>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl"><FaTwitter /></a>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl"><FaFacebook /></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Find Us</h4>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <iframe title="Google Map" src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="160" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <motion.section 
        className="bg-[#121418] py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="inline-block p-4 rounded-full bg-[#1a1d24] mb-4"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(59, 130, 246, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">info@stellaris.com</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="inline-block p-4 rounded-full bg-[#1a1d24] mb-4"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(59, 130, 246, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="inline-block p-4 rounded-full bg-[#1a1d24] mb-4"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(59, 130, 246, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400">123 Business Ave, Suite 100<br />San Francisco, CA 94107</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Contact;