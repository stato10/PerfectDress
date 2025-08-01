import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { gsap } from 'gsap'

const Home = () => {
  const videoRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // Enhanced GSAP animations for better performance
    const tl = gsap.timeline({ ease: "power3.out" })
    
    tl.fromTo(textRef.current, 
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2 }
    )
    
    tl.fromTo('.social-item', 
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.8"
    )

    // Add floating animation to decorative elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    })
  }, [])

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaInstagram, url: '#', label: 'Instagram' }
  ]

  return (
    <motion.section 
      className="relative w-full min-h-screen flex items-center justify-between px-6 py-24 bg-perfect-dark transition-all duration-500 z-10"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 50%, #1a1a1a 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Video Background */}
      <motion.video 
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        muted 
        loop 
        autoPlay 
        playsInline
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        onError={(e) => console.error('Video loading error:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
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

      {/* Enhanced Overlay with subtle gradient */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full mix-blend-overlay"
        style={{
          background: 'linear-gradient(352deg, rgba(238, 202, 213, 0.1) 0%, rgba(246, 234, 203, 0.05) 50%, rgba(209, 233, 246, 0.1) 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Dark overlay for better text readability */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div 
          ref={textRef}
          className="text-white"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold uppercase leading-tight mb-6"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5, 
              ease: [0.4, 0, 0.2, 1]
            }}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 30px rgba(255, 0, 255, 0.5)"
            }}
          >
            Perfect Dress
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Perfect Dress Is Perfect First Impression
          </motion.p>
          
          <motion.button 
            className="btn-hover inline-block bg-perfect-pink text-perfect-dark px-8 py-4 text-lg font-medium uppercase tracking-wider"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(255, 0, 255, 0.4)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1, 
              delay: 1.1, 
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            Pick your Dress
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Social Media Icons */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-8"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            className="social-item text-white hover:text-perfect-pink transition-all duration-500"
            whileHover={{ 
              y: -15,
              scale: 1.3,
              color: "#ff00ff",
              rotate: [0, -10, 10, 0]
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.6 + index * 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <social.icon className="text-3xl" />
          </motion.a>
        ))}
      </motion.div>

      {/* Enhanced Floating Elements */}
      <motion.div 
        className="floating-element absolute top-20 right-20 w-4 h-4 bg-perfect-pink rounded-full opacity-60"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.6, 0.2, 0.6],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-element absolute bottom-40 left-20 w-6 h-6 bg-perfect-pink rounded-full opacity-40"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.4, 0.1, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-element absolute top-1/2 left-1/4 w-3 h-3 bg-perfect-blue rounded-full opacity-30"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.section>
  )
}

export default Home 