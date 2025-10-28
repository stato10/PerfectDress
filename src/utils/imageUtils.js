// Utility functions for image handling
export const handleImageError = (e, fallbackSrc) => {
  console.error('Image loading error:', e)
  if (e.target && fallbackSrc) {
    e.target.src = fallbackSrc
  }
}

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

export const getFallbackImage = () => {
  return 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
}

// Video utilities
export const handleVideoError = (e) => {
  console.error('Video loading error:', e)
  if (e.target) {
    e.target.style.display = 'none'
    // Show fallback image when video fails
    const fallbackImage = document.querySelector('.fallback-image')
    if (fallbackImage) {
      fallbackImage.style.opacity = '0.8'
    }
  }
}

// Logo utilities
export const handleLogoError = (e) => {
  console.error('Logo loading error:', e)
  if (e.target) {
    e.target.style.display = 'none'
    // Fallback to text logo
    const parent = e.target.parentElement
    if (parent) {
      parent.innerHTML = '<span class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Perfect Dress</span>'
    }
  }
} 