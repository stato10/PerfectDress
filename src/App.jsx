import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './components/Home'
import Collection from './components/Collection'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ErrorBoundary from './components/ErrorBoundary'
import { routerConfig, suppressRouterWarnings } from './utils/routerConfig'

// Simplified page transition variants to prevent flickering
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -10
  }
}

const pageTransition = {
  type: "tween",
  ease: [0.4, 0, 0.2, 1],
  duration: 0.4
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
          <Route path="/collection" element={<Collection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  // Suppress React Router warnings in development
  React.useEffect(() => {
    suppressRouterWarnings()
  }, [])

  return (
    <ErrorBoundary>
      <Router {...routerConfig}>
        <motion.div 
          className="App bg-perfect-dark min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <Navigation />
          <AnimatedRoutes />
        </motion.div>
      </Router>
    </ErrorBoundary>
  )
}

export default App 