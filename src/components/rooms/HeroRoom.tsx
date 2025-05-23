import React from 'react'
import { motion } from 'framer-motion'

const HeroRoom: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome
        </motion.h1>
        
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I'm a Creative Developer
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-300 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Crafting immersive digital experiences with cutting-edge technology.
          <br />
          Where creativity meets innovation in the realm of 3D web development.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-6 h-6 bg-pink-500 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  )
}

export default HeroRoom
