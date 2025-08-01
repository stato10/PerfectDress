import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './components/Home'
import Collection from './components/Collection'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

// Ultra-smooth page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
}

const pageTransition = {
  type: "tween",
  ease: [0.4, 0, 0.2, 1], // Smoother cubic-bezier
  duration: 0.6
}

// Animated Routes component
const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-transition"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/PerfectDress/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <motion.div 
        className="App bg-perfect-dark min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <Navigation />
        <AnimatedRoutes />
      </motion.div>
    </Router>
  )
}

export default App 