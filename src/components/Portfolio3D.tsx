'use client'

import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Environment } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import Scene3D from './Scene3D'
import Navigation from './Navigation'
import HeroRoom from './rooms/HeroRoom'
import AboutRoom from './rooms/AboutRoom'
import ProjectsRoom from './rooms/ProjectsRoom'
import ContactRoom from './rooms/ContactRoom'
import FontPreloader from './FontPreloader'
import { useScrollNavigation } from '@/hooks/useScrollNavigation'
import ScreenshotButton from './ScreenshotButton'

export type RoomType = 'hero' | 'about' | 'projects' | 'contact'

const Portfolio3D: React.FC = () => {
  const [currentRoom, setCurrentRoom] = useState<RoomType>('hero')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleRoomChange = (room: RoomType) => {
    if (room === currentRoom || isTransitioning) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentRoom(room)
      setIsTransitioning(false)
    }, 300)
  }
  // Use custom scroll navigation hook
  useScrollNavigation({
    currentRoom,
    onRoomChange: handleRoomChange,
    isTransitioning
  })
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Screenshot Button */}
      <ScreenshotButton />
      
      {/* 3D Canvas */}
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="absolute inset-0"
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <FontPreloader />
        <Environment preset="city" />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
        
        <Scene3D currentRoom={currentRoom} isTransitioning={isTransitioning} />
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Navigation 
          currentRoom={currentRoom} 
          onRoomChange={handleRoomChange}
          isTransitioning={isTransitioning}
        />
        
        {/* Room Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoom}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {currentRoom === 'hero' && <HeroRoom />}
            {currentRoom === 'about' && <AboutRoom />}
            {currentRoom === 'projects' && <ProjectsRoom />}
            {currentRoom === 'contact' && <ContactRoom />}
          </motion.div>
        </AnimatePresence>
      </div>      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span>Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Room Progress Indicator */}
      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {(['hero', 'about', 'projects', 'contact'] as RoomType[]).map((room, index) => (
          <motion.div
            key={room}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentRoom === room 
                ? 'bg-purple-500 border-purple-500 shadow-lg shadow-purple-500/50' 
                : 'border-white/30 hover:border-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => handleRoomChange(room)}
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Portfolio3D
