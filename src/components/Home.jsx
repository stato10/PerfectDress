import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { handleVideoError } from '../utils/imageUtils'
import { useAppRouter } from '../hooks/useAppRouter'

const Home = () => {
  const { navigate } = useAppRouter()

  const handlePickDress = useCallback(() => {
    navigate('/collection')
  }, [navigate])

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaInstagram, url: '#', label: 'Instagram' }
  ]

  return (
    <motion.section 
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-perfect-dark z-10"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 50%, #1a1a1a 100%)'
      }}
    >
      {/* Video Background */}
      <motion.video 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        muted 
        loop 
        autoPlay 
        playsInline
        preload="auto"
        onError={handleVideoError}
      >
        <source 
          src="https://res.cloudinary.com/dpz2lh8hu/video/upload/v1690762130/dressesweb/dresses%20web/pexels-ron-lach-10214232_2160p_uxlrhx.mp4" 
          type="video/mp4" 
        />
        <source 
          src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </motion.video>

      {/* Fallback Background Image - Only shown when video fails */}
      <motion.div 
        className="fallback-image absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80")'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Enhanced Overlay with subtle gradient */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full mix-blend-overlay"
        style={{
          background: 'linear-gradient(352deg, rgba(238, 202, 213, 0.1) 0%, rgba(246, 234, 203, 0.05) 50%, rgba(209, 233, 246, 0.1) 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Dark overlay for better text readability */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.div 
          className="text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-tight mb-4 sm:mb-6 lg:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.1, 
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.005
            }}
          >
            Perfect Dress
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
          >
            Perfect Dress Is Perfect First Impression
          </motion.p>
          
          <motion.button 
            className="btn-hover block mx-auto bg-perfect-pink text-perfect-dark px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-medium uppercase tracking-wider rounded-lg sm:rounded-xl cursor-pointer"
            whileHover={{ 
              scale: 1.01
            }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.2, 
              delay: 0.3, 
              ease: "easeOut"
            }}
            onClick={handlePickDress}
          >
            Pick your Dress
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Social Media Icons */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 z-10 flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            className="social-item text-white hover:text-perfect-pink transition-all duration-300"
            whileHover={{ 
              y: -3,
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 10, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.25, 
              delay: 0.6 + index * 0.05,
              ease: "easeOut"
            }}
          >
            <social.icon className="text-2xl sm:text-3xl lg:text-4xl" />
          </motion.a>
        ))}
      </motion.div>

      {/* Optimized Floating Elements - Hidden on mobile for better performance */}
      <motion.div 
        className="floating-element absolute top-16 sm:top-20 lg:top-24 right-4 sm:right-8 lg:right-20 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-perfect-pink rounded-full opacity-60 hidden sm:block"
        animate={{ 
          y: [0, -6, 0],
          opacity: [0.6, 0.4, 0.6]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-element absolute bottom-32 sm:bottom-40 lg:bottom-48 left-4 sm:left-8 lg:left-20 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-perfect-pink rounded-full opacity-40 hidden sm:block"
        animate={{ 
          y: [0, 4, 0],
          opacity: [0.4, 0.3, 0.4]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-element absolute top-1/2 left-1/4 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-perfect-blue rounded-full opacity-30 hidden sm:block"
        animate={{ 
          y: [0, -3, 0],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.section>
  )
}

export default Home 