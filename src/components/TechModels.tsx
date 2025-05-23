import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

type TechModelProps = {
  position?: [number, number, number]
  color?: string
  scale?: number
}

// Tech-themed 3D component: Code Brackets
export const CodeBrackets = ({ position = [0, 0, 0], color = '#8b5cf6', scale = 1 }: TechModelProps) => {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={group} position={position} scale={scale}>
        {/* Left Bracket */}
        <mesh position={[-0.5, 0, 0]} castShadow>
          <boxGeometry args={[0.2, 1, 0.1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.3, 0.4, 0]} castShadow>
          <boxGeometry args={[0.2, 0.2, 0.1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.3, -0.4, 0]} castShadow>
          <boxGeometry args={[0.2, 0.2, 0.1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Right Bracket */}
        <mesh position={[0.5, 0, 0]} castShadow>
          <boxGeometry args={[0.2, 1, 0.1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.3, 0.4, 0]} castShadow>
          <boxGeometry args={[0.2, 0.2, 0.1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.3, -0.4, 0]} castShadow>
          <boxGeometry args={[0.2, 0.2, 0.1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}

// Tech-themed 3D component: Database
export const Database = ({ position = [0, 0, 0], color = '#f59e0b', scale = 1 }: TechModelProps) => {
  const mesh = useRef<THREE.Mesh>(null)
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.3
    }
  })
  
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.2}>
      <group position={position} scale={scale}>
        {/* Main cylinder */}
        <mesh ref={mesh} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.8, 32]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.9}
            roughness={0.1}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Top cap */}
        <mesh position={[0, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.45, 0.05, 32]} />
          <meshStandardMaterial 
            color={'#ffffff'} 
            metalness={0.9}
            roughness={0.1}
            emissive={'#ffffff'}
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Bottom cap */}
        <mesh position={[0, -0.4, 0]} castShadow>
          <cylinderGeometry args={[0.45, 0.5, 0.05, 32]} />
          <meshStandardMaterial 
            color={'#ffffff'} 
            metalness={0.9}
            roughness={0.1}
            emissive={'#ffffff'}
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Middle separator line */}
        <mesh position={[0, 0, 0]} castShadow>
          <torusGeometry args={[0.5, 0.02, 16, 32]} />
          <meshStandardMaterial 
            color={'#ffffff'} 
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  )
}

// Tech-themed 3D component: CPU Chip
export const CpuChip = ({ position = [0, 0, 0], color = '#06b6d4', scale = 1 }: TechModelProps) => {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })
  
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.1}>
      <group ref={group} position={position} scale={scale}>
        {/* Base chip */}
        <mesh castShadow>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.9}
            roughness={0.1}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* CPU die in the middle */}
        <mesh position={[0, 0.1, 0]} castShadow>
          <boxGeometry args={[0.5, 0.05, 0.5]} />
          <meshStandardMaterial 
            color={'#1e293b'} 
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        
        {/* Pin grid on bottom */}
        {[...Array(4)].map((_, i) =>
          [...Array(4)].map((_, j) => (
            <mesh 
              key={`pin-${i}-${j}`}
              position={[
                (i - 1.5) * 0.2, 
                -0.1, 
                (j - 1.5) * 0.2
              ]} 
              castShadow
            >
              <boxGeometry args={[0.05, 0.05, 0.05]} />
              <meshStandardMaterial 
                color={'#94a3b8'} 
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          ))
        )}
        
        {/* Circuit traces */}
        {[...Array(3)].map((_, i) => (
          <mesh 
            key={`trace-h-${i}`}
            position={[(i - 1) * 0.25, 0.08, 0]} 
            castShadow
          >
            <boxGeometry args={[0.01, 0.01, 0.8]} />
            <meshStandardMaterial color={'#64748b'} />
          </mesh>
        ))}
        
        {[...Array(3)].map((_, i) => (
          <mesh 
            key={`trace-v-${i}`}
            position={[0, 0.08, (i - 1) * 0.25]} 
            castShadow
          >
            <boxGeometry args={[0.8, 0.01, 0.01]} />
            <meshStandardMaterial color={'#64748b'} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// Tech-themed 3D component: Server Rack
export const ServerRack = ({ position = [0, 0, 0], color = '#ec4899', scale = 1 }: TechModelProps) => {
  const group = useRef<THREE.Group>(null)
    useFrame(({ clock }) => {
    if (group.current) {
      // Gentle floating animation
      const yPos = position[1] + Math.sin(clock.elapsedTime) * 0.05
      group.current.position.y = yPos
    }
  })
  
  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.1}>
      <group ref={group} position={position} scale={scale}>
        {/* Rack casing */}
        <mesh castShadow>
          <boxGeometry args={[1, 1.3, 0.5]} />
          <meshStandardMaterial 
            color={'#1e293b'} 
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        
        {/* Server units */}
        {[...Array(5)].map((_, i) => (
          <mesh 
            key={`server-${i}`}
            position={[0, 0.5 - i * 0.25, 0.26]} 
            castShadow
          >
            <boxGeometry args={[0.9, 0.2, 0.05]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? color : '#64748b'} 
              metalness={0.8}
              roughness={0.2}
              emissive={i % 2 === 0 ? color : '#64748b'}
              emissiveIntensity={i % 2 === 0 ? 0.3 : 0.1}
            />
          </mesh>
        ))}
        
        {/* Server LEDs */}
        {[...Array(5)].map((_, i) => (
          <mesh 
            key={`led-${i}`}
            position={[0.35, 0.5 - i * 0.25, 0.32]} 
            castShadow
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? '#4ade80' : '#f87171'} 
              emissive={i % 2 === 0 ? '#4ade80' : '#f87171'}
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}
        
        {/* Rack mounting brackets */}
        <mesh position={[-0.53, 0, 0.2]} castShadow>
          <boxGeometry args={[0.06, 1.4, 0.1]} />
          <meshStandardMaterial color={'#94a3b8'} />
        </mesh>
        
        <mesh position={[0.53, 0, 0.2]} castShadow>
          <boxGeometry args={[0.06, 1.4, 0.1]} />
          <meshStandardMaterial color={'#94a3b8'} />
        </mesh>
      </group>
    </Float>
  )
}

// Tech-themed 3D component: Cloud Symbol
export const CloudSymbol = ({ position = [0, 0, 0], color = '#3b82f6', scale = 1 }: TechModelProps) => {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={group} position={position} scale={scale}>
        {/* Main cloud body */}
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.5}
            roughness={0.5}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        <mesh position={[0.4, -0.1, 0]} castShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.5}
            roughness={0.5}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        <mesh position={[-0.4, -0.1, 0]} castShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.5}
            roughness={0.5}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        <mesh position={[-0.2, -0.25, 0]} castShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.5}
            roughness={0.5}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        <mesh position={[0.2, -0.25, 0]} castShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.5}
            roughness={0.5}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Upload/download arrows */}
        <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <coneGeometry args={[0.15, 0.3, 8]} />
          <meshStandardMaterial 
            color={'#ffffff'} 
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        
        <mesh position={[0, -0.7, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.15, 0.3, 8]} />
          <meshStandardMaterial 
            color={'#ffffff'} 
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}
