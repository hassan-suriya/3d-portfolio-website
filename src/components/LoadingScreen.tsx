import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15
        return next > 100 ? 100 : next
      })
    }, 400)
    
    return () => clearTimeout(timer)
  }, [progress])
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center max-w-md px-6">
        <motion.div
          className="w-20 h-20 border-4 border-purple-400 border-t-transparent rounded-full mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.h2
          className="text-3xl font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading 3D Portfolio
        </motion.h2>
        <motion.p
          className="text-purple-300 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Preparing the experience...
        </motion.p>
        
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        <motion.p
          className="text-sm text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Loading assets and preparing 3D environment...
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen
