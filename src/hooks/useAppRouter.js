import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const useAppRouter = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Handle routing with proper base path
  const navigateTo = (path) => {
    // Use startTransition for better performance
    navigate(path, { replace: false })
  }

  // Get current path without base
  const getCurrentPath = () => {
    return location.pathname
  }

  // Check if current path matches
  const isCurrentPath = (path) => {
    return location.pathname === path
  }

  // Enhanced navigation with transition support
  const navigateWithTransition = (path) => {
    navigate(path, { replace: false })
  }

  return {
    location,
    navigate: navigateTo,
    navigateWithTransition,
    getCurrentPath,
    isCurrentPath
  }
} 