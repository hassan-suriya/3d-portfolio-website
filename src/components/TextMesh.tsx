import React from 'react'
import { Html } from '@react-three/drei'

interface TextMeshProps {
  position: [number, number, number]
  children: React.ReactNode
  className?: string
  scale?: number
  rotation?: [number, number, number]
}

const TextMesh: React.FC<TextMeshProps> = ({ position, children, className, scale = 1, rotation }) => {
  return (
    <group position={position} rotation={rotation}>
      <Html
        transform
        occlude
        distanceFactor={8}
        position={[0, 0, 0]}
        scale={[0.1 * scale, 0.1 * scale, 0.1 * scale]}
        className="pointer-events-none"
      >
        <div className={`${className || ''} whitespace-nowrap px-4 py-2 text-center transform-gpu select-none backdrop-blur-sm bg-opacity-20 rounded-xl`}
             style={{ 
                 minWidth: '200px', 
                 boxShadow: '0 0 20px rgba(0,0,0,0.15)',
                 backdropFilter: 'blur(2px)'
             }}>
          {children}
        </div>
      </Html>
    </group>
  )
}

export default TextMesh
