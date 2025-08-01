import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa'

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Dresses' },
    { id: 'evening', name: 'Evening Dresses' },
    { id: 'casual', name: 'Casual Dresses' },
    { id: 'wedding', name: 'Wedding Dresses' },
    { id: 'party', name: 'Party Dresses' }
  ]

  const dresses = [
    {
      id: 1,
      name: 'Elegant Evening Gown',
      category: 'evening',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      id: 2,
      name: 'Summer Floral Dress',
      category: 'casual',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Bridal Wedding Dress',
      category: 'wedding',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      name: 'Cocktail Party Dress',
      category: 'party',
      price: '$159',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      name: 'Classic Black Dress',
      category: 'evening',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      name: 'Bohemian Maxi Dress',
      category: 'casual',
      price: '$129',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const filteredDresses = selectedCategory === 'all' 
    ? dresses 
    : dresses.filter(dress => dress.category === selectedCategory)

  return (
    <motion.div 
      className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(352deg, rgba(238, 202, 213, 0.8) 0%, rgba(246, 234, 203, 0.9) 50%, rgba(209, 233, 246, 0.8) 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
            Our Collection
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover our stunning collection of perfect dresses for every occasion
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-perfect-pink text-white shadow-lg'
                  : 'bg-white bg-opacity-90 text-gray-700 hover:bg-perfect-pink hover:text-white hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Dresses Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {filteredDresses.map((dress, index) => (
            <motion.div
              key={dress.id}
              className="bg-white bg-opacity-95 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-white border-opacity-30 backdrop-blur-sm"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(255, 0, 255, 0.2)"
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={dress.image} 
                  alt={dress.name}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between">
                    <motion.button
                      className="bg-perfect-pink text-white p-2 sm:p-3 rounded-full shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaHeart className="text-sm sm:text-base" />
                    </motion.button>
                    <motion.button
                      className="bg-perfect-pink text-white p-2 sm:p-3 rounded-full shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaShoppingCart className="text-sm sm:text-base" />
                    </motion.button>
                    <motion.button
                      className="bg-perfect-pink text-white p-2 sm:p-3 rounded-full shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEye className="text-sm sm:text-base" />
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{dress.name}</h3>
                <p className="text-xl sm:text-2xl font-bold text-perfect-pink">{dress.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="bg-perfect-pink text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium uppercase tracking-wider rounded-full shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(255, 0, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Dresses
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Collection 