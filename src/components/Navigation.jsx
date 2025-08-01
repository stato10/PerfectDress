import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/collection', label: 'Collection' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 z-50 flex justify-between items-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {/* Logo */}
        <motion.div 
          className="text-white cursor-pointer"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ 
            scale: 1.01,
            rotate: [0, -0.5, 0.5, 0]
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
            delay: 0.2,
            type: "spring", 
            stiffness: 300,
            damping: 20
          }}
        >
          <img 
            src="https://res.cloudinary.com/dpz2lh8hu/image/upload/v1690811636/dressesweb/perfect-dresses-low-resolution-logo-white-on-transparent-background_ufz0mm.png" 
            alt="Perfect Dress" 
            className="h-12 sm:h-16 md:h-20 lg:h-[90px] w-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Menu Toggle */}
        <motion.div 
          className="relative w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] cursor-pointer flex items-center justify-center rounded-full"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ 
            scale: 1.03,
            rotate: [0, 1, -1, 0]
          }}
          whileTap={{ scale: 0.97 }}
          onClick={toggleMenu}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
            delay: 0.3,
            type: "spring", 
            stiffness: 300,
            damping: 20
          }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -30, opacity: 0, scale: 0.9 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 30, opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <FaTimes className="text-white text-lg sm:text-xl lg:text-2xl drop-shadow-lg" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 30, opacity: 0, scale: 0.9 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -30, opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <FaBars className="text-white text-lg sm:text-xl lg:text-2xl drop-shadow-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 w-[280px] sm:w-[320px] lg:w-[350px] h-full z-40 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
              }}
              initial={{ x: 350, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 350, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 25,
                duration: 0.4
              }}
            >
              <motion.ul 
                className="text-center w-full px-6 sm:px-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={item.path}
                    className="mb-8 sm:mb-10"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.2 + index * 0.08,
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`menu-item text-xl sm:text-2xl font-medium block py-2 transition-all duration-300 ${
                        location.pathname === item.path 
                          ? 'text-perfect-pink font-bold' 
                          : 'text-gray-800 hover:text-perfect-pink'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ 
                        scale: 1.01,
                        x: 3
                      }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        damping: 15
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 