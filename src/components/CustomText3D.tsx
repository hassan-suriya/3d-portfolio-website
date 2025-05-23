import React, { useMemo } from 'react'
import { Text3D } from '@react-three/drei'

interface CustomText3DProps {
  text: string
  position: [number, number, number]
  color?: string
  fontSize?: number
  maxWidth?: number
  textAlign?: 'left' | 'right' | 'center' | 'justify'
}

const CustomText3D: React.FC<CustomText3DProps> = ({
  text,
  position,
  color = '#ffffff',
  fontSize = 0.5,
  maxWidth = 10,
  textAlign = 'center'
}) => {
  // Use a built-in font from drei that's guaranteed to work
  return (
    <Text3D
      font="/fonts/Inter-Bold.woff"
      position={position}
      size={fontSize}
      height={0.1}
      curveSegments={12}
      bevelEnabled={false}
    >
      {text}
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5} 
        metalness={0.3}
        roughness={0.4}
      />
    </Text3D>
  )
}

export default CustomText3D
