import React, { useRef, useMemo, useCallback } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Box, Sphere, Torus, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import { Group, Vector3, MathUtils } from 'three'
import * as THREE from 'three'
import { RoomType } from './Portfolio3D'
import Effects from './Effects'
import TextMesh from './TextMesh'
import { CodeBrackets, Database, CpuChip, ServerRack, CloudSymbol } from './TechModels'

interface Scene3DProps {
  currentRoom: RoomType
  isTransitioning: boolean
}

// Create particles with different properties
const Particles = ({ count = 100, color = '#a855f7' }) => {
  const mesh = useRef<Group>(null)
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const scale = 0.1 * Math.random()
      const position = [
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      ]
      const rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ]
      const speed = Math.random() * 0.01
      temp.push({ scale, position, rotation, speed })
    }
    return temp
  }, [count])

  useFrame(() => {
    if (!mesh.current) return
    
    particles.forEach((particle, i) => {
      const child = mesh.current?.children[i]
      if (child) {
        child.rotation.x += particle.speed
        child.rotation.y += particle.speed * 1.5
        child.rotation.z += particle.speed * 0.5
        child.position.y += Math.sin(Date.now() * particle.speed * 0.2) * 0.01
      }
    })
  })

  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <mesh 
          key={i} 
          position={particle.position as [number, number, number]} 
          rotation={particle.rotation as [number, number, number]}
          scale={[particle.scale, particle.scale, particle.scale]}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color={color} 
            roughness={0.1}
            metalness={0.9}
            emissive={color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

const Scene3D: React.FC<Scene3DProps> = ({ currentRoom, isTransitioning }) => {
  const groupRef = useRef<Group>(null)
  const { camera } = useThree()

  // Room positions
  const roomPositions = useMemo(() => ({
    hero: new Vector3(0, 0, 0),
    about: new Vector3(-20, 0, 0),
    projects: new Vector3(0, 20, 0),
    contact: new Vector3(20, 0, 0),
  }), [])

  // Camera dynamics
  const cameraTarget = useRef(new Vector3(0, 0, 0))
  const cameraDistance = useRef(5)
  
  // Handle camera movement based on mouse position
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    cameraTarget.current.set(x * 0.3, y * -0.3, 0)
  }, [])

  // Add mouse move event listener
  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth camera transition between rooms
      const targetPosition = roomPositions[currentRoom]
      groupRef.current.position.lerp(targetPosition.clone().multiplyScalar(-1), delta * 2)
      
      // Subtle camera movement based on mouse position
      camera.position.x = MathUtils.lerp(camera.position.x, cameraTarget.current.x, delta)
      camera.position.y = MathUtils.lerp(camera.position.y, cameraTarget.current.y, delta)
      camera.lookAt(0, 0, 0)
    }
  })
  
  return (
    <>
      <group ref={groupRef}>
        {/* Hero Room - Web Development Theme */}
        <group position={[0, 0, 0]}>
          {/* Code brackets representing coding/development */}
          <CodeBrackets position={[3, 2, -2]} color="#8b5cf6" scale={2} />
          
          {/* CPU chip for tech skills */}
          <CpuChip position={[-2, -1, -1]} color="#06b6d4" scale={1.5} />

          {/* Cloud symbol for modern web development */}
          <CloudSymbol position={[0, 3, -3]} color="#f59e0b" scale={1.2} />
          
          <TextMesh position={[0, -3, -1]} scale={1.5}>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Welcome to my Portfolio
            </span>
          </TextMesh>
        </group>

        {/* About Room - Tech Skills Theme */}
        <group position={[-20, 0, 0]}>
          {/* Database representing data skills */}
          <Database position={[0, 0, -2]} color="#1f2937" scale={1.5} />
          
          {/* CPU for hardware/systems knowledge */}
          <CpuChip position={[-3, 2, 0]} color="#ef4444" scale={1.2} />

          {/* Cloud symbol for cloud computing skills */}
          <CloudSymbol position={[3, -2, 0]} color="#10b981" scale={1.3} />

          <TextMesh position={[0, -3, -1]} scale={1.5}>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              About Me & Skills
            </span>
          </TextMesh>
        </group>

        {/* Projects Room - Software Development Theme */}
        <group position={[0, 20, 0]}>
          {/* Code brackets for coding projects */}
          <CodeBrackets position={[-2, 0, -2]} color="#7c3aed" scale={1.2} />
          
          {/* Server rack for backend/infrastructure projects */}
          <ServerRack position={[2, 0, -2]} color="#f97316" scale={1.2} />

          {/* Database for data-focused projects */}
          <Database position={[0, 1, -1]} color="#06b6d4" scale={1} />

          <TextMesh position={[0, -3, -1]} scale={1.5}>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </TextMesh>
        </group>

        {/* Contact Room - Communication Theme */}
        <group position={[20, 0, 0]}>
          {/* Cloud for online connectivity */}
          <CloudSymbol position={[0, 2, -2]} color="#ec4899" scale={1.5} />
          
          {/* CPU for technical connections */}
          <CpuChip position={[-2, -1, 0]} color="#14b8a6" scale={1} />

          {/* Database for contact information storage */}
          <Database position={[2, -1, 0]} color="#f59e0b" scale={1.2} />
          
          <TextMesh position={[0, -3, -1]} scale={1.5}>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
              Contact & Connect
            </span>
          </TextMesh>
        </group>

        {/* Particles instead of simple spheres */}
        <Particles count={80} color="#a855f7" />
      </group>
      
      {/* Post-processing effects */}
      <Effects />
    </>
  )
}

export default Scene3D
