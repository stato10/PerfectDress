import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Suppress React Router warnings in development
if (import.meta.env.DEV) {
  const originalWarn = console.warn
  console.warn = (...args) => {
    const message = args[0]
    if (typeof message === 'string' && 
        (message.includes('React Router Future Flag Warning') || 
         message.includes('v7_startTransition') || 
         message.includes('v7_relativeSplatPath'))) {
      return
    }
    originalWarn.apply(console, args)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 