import React from 'react'
import { motion } from 'framer-motion'
import { RoomType } from './Portfolio3D'

interface NavigationProps {
  currentRoom: RoomType
  onRoomChange: (room: RoomType) => void
  isTransitioning: boolean
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentRoom, 
  onRoomChange, 
  isTransitioning 
}) => {
  const rooms = [
    { id: 'hero' as RoomType, label: 'Home', icon: '🏠' },
    { id: 'about' as RoomType, label: 'About', icon: '👨‍💻' },
    { id: 'projects' as RoomType, label: 'Projects', icon: '💼' },
    { id: 'contact' as RoomType, label: 'Contact', icon: '📧' },
  ]

  return (
    <motion.nav
      className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center space-x-6 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
        {rooms.map((room) => (
          <motion.button
            key={room.id}
            onClick={() => onRoomChange(room.id)}
            disabled={isTransitioning}
            className={`
              relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
              ${currentRoom === room.id 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
              }
              ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{room.icon}</span>
            <span className="font-medium">{room.label}</span>
            
            {currentRoom === room.id && (
              <motion.div
                className="absolute inset-0 bg-purple-600 rounded-full -z-10"
                layoutId="activeRoom"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navigation
