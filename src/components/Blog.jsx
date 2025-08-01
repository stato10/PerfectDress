import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Perfect Dress for Every Occasion',
      excerpt: 'Discover how to choose the ideal dress that matches your style and the event you\'re attending.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Fashion Tips'
    },
    {
      id: 2,
      title: 'Summer Dress Trends 2024',
      excerpt: 'Explore the latest summer dress trends that will make you stand out this season.',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Emma Davis',
      date: 'March 12, 2024',
      category: 'Trends'
    },
    {
      id: 3,
      title: 'Wedding Dress Shopping Guide',
      excerpt: 'Everything you need to know about finding your perfect wedding dress.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Maria Garcia',
      date: 'March 10, 2024',
      category: 'Wedding'
    },
    {
      id: 4,
      title: 'Styling Tips for Evening Dresses',
      excerpt: 'Learn how to accessorize and style your evening dress for a stunning look.',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Lisa Chen',
      date: 'March 8, 2024',
      category: 'Styling'
    },
    {
      id: 5,
      title: 'Sustainable Fashion in Dresses',
      excerpt: 'How to make eco-friendly choices when shopping for dresses.',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Anna Wilson',
      date: 'March 5, 2024',
      category: 'Sustainability'
    },
    {
      id: 6,
      title: 'Body Type Guide for Dresses',
      excerpt: 'Find the perfect dress silhouette for your body type and feel confident.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      author: 'Jennifer Lee',
      date: 'March 3, 2024',
      category: 'Body Type'
    }
  ]

  return (
    <motion.div 
      className="min-h-screen pt-32 pb-16 px-6"
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
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Fashion Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest fashion trends, styling tips, and dress guides
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white bg-opacity-95 rounded-3xl overflow-hidden shadow-xl border border-white border-opacity-30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-perfect-pink text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-gray-500 mb-6">
                  <FaUser className="mr-2" />
                  <span className="mr-6">{blogPosts[0].author}</span>
                  <FaCalendar className="mr-2" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <motion.button
                  className="inline-flex items-center bg-perfect-pink text-white px-6 py-3 rounded-full font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <FaArrowRight className="ml-2" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white bg-opacity-95 rounded-2xl overflow-hidden shadow-xl border border-white border-opacity-30 backdrop-blur-sm"
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
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-perfect-pink text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaUser className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <FaCalendar className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <motion.button
                    className="text-perfect-pink hover:text-gray-800 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaArrowRight />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-white bg-opacity-95 rounded-3xl p-8 shadow-xl border border-white border-opacity-30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for the latest fashion trends and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-perfect-pink focus:ring-2 focus:ring-perfect-pink focus:ring-opacity-50"
              />
              <motion.button
                className="bg-perfect-pink text-white px-8 py-3 rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Blog 