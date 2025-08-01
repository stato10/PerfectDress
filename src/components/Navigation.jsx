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
        className="fixed top-0 left-0 w-full px-6 py-10 z-50 flex justify-between items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1, 
          ease: [0.4, 0, 0.2, 1],
          delay: 0.2
        }}
      >
        {/* Logo */}
        <motion.div 
          className="text-white cursor-pointer"
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -2, 2, 0]
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300,
            damping: 20
          }}
        >
          <img 
            src="https://res.cloudinary.com/dpz2lh8hu/image/upload/v1690811636/dressesweb/perfect-dresses-low-resolution-logo-white-on-transparent-background_ufz0mm.png" 
            alt="Perfect Dress" 
            className="h-[90px]"
          />
        </motion.div>

        {/* Menu Toggle */}
        <motion.div 
          className="relative w-[60px] h-[60px] cursor-pointer flex items-center justify-center glass rounded-full"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 5, -5, 0]
          }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          transition={{ 
            type: "spring", 
            stiffness: 400,
            damping: 25
          }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <FaTimes className="text-white text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <FaBars className="text-white text-2xl" />
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
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 w-[350px] h-full glass z-40 flex items-center justify-center"
              initial={{ x: 350, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 350, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.6
              }}
            >
              <motion.ul 
                className="text-center w-full px-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={item.path}
                    className="mb-10"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.4 + index * 0.1,
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`menu-item text-2xl font-medium block py-2 transition-all duration-300 ${
                        location.pathname === item.path 
                          ? 'text-perfect-blue' 
                          : 'text-perfect-dark hover:text-perfect-blue'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ 
                        scale: 1.05,
                        x: 10
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400,
                        damping: 20
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