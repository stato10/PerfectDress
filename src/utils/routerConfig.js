// Router configuration for React Router v6 with future flags
export const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
}

// Suppress React Router warnings in development
export const suppressRouterWarnings = () => {
  if (process.env.NODE_ENV === 'development') {
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
} 