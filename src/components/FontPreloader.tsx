import React from 'react'
import { Html } from '@react-three/drei'

// This component preloads fonts that will be used in the 3D scene
const FontPreloader: React.FC = () => {
  return (
    <Html>
      <div style={{ 
        position: 'absolute', 
        visibility: 'hidden', 
        height: 0, 
        width: 0, 
        overflow: 'hidden' 
      }}>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
        />
        <style>
          {`
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: local('Inter Regular'), local('Inter-Regular');
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: local('Inter Bold'), local('Inter-Bold');
            }
          `}
        </style>
        <div className="font-sans font-normal">Preload</div>
        <div className="font-sans font-bold">Preload Bold</div>
      </div>
    </Html>
  )
}

export default FontPreloader
