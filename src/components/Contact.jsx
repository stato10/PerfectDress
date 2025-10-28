import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // Show success message (you can implement a proper notification system)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'info@perfectdress.com',
      link: 'mailto:info@perfectdress.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      info: '123 Fashion Street, Style City, SC 12345',
      link: '#'
    },
    {
      icon: FaClock,
      title: 'Hours',
      info: 'Mon-Fri: 9AM-8PM, Sat: 10AM-6PM',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaInstagram, url: '#', label: 'Instagram' }
  ]

  return (
    <motion.div 
      className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(352deg, rgba(238, 202, 213, 0.8) 0%, rgba(246, 234, 203, 0.9) 50%, rgba(209, 233, 246, 0.8) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Get in touch with us for any questions about our dresses or services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white bg-opacity-95 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white border-opacity-30 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-perfect-pink focus:ring-2 focus:ring-perfect-pink focus:ring-opacity-50 transition-colors text-sm sm:text-base"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-perfect-pink focus:ring-2 focus:ring-perfect-pink focus:ring-opacity-50 transition-colors text-sm sm:text-base"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-perfect-pink focus:ring-2 focus:ring-perfect-pink focus:ring-opacity-50 transition-colors text-sm sm:text-base"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-perfect-pink focus:ring-2 focus:ring-perfect-pink focus:ring-opacity-50 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-perfect-pink text-white py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg shadow-lg"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 40px rgba(255, 0, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white bg-opacity-95 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white border-opacity-30 backdrop-blur-sm"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 40px rgba(255, 0, 255, 0.2)"
                }}
              >
                <a href={item.link} className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="bg-perfect-pink text-white p-2 sm:p-3 rounded-full group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-semibold text-base sm:text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.info}</p>
                  </div>
                </a>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              className="bg-white bg-opacity-95 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white border-opacity-30 backdrop-blur-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h3 className="text-gray-800 font-semibold text-base sm:text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    className="bg-perfect-pink text-white p-2 sm:p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  >
                    <social.icon className="text-lg sm:text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-white bg-opacity-95 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white border-opacity-30 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Visit Our Store</h2>
            <div className="aspect-video bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center px-4">
                <FaMapMarkerAlt className="text-4xl sm:text-6xl text-perfect-pink mx-auto mb-4" />
                <p className="text-gray-800 text-base sm:text-lg">Interactive Map Coming Soon</p>
                <p className="text-gray-600 text-sm sm:text-base">123 Fashion Street, Style City, SC 12345</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact 