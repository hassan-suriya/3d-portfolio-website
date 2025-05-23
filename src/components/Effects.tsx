import { useRef } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

const Effects = () => {
  const composer = useRef<any>(null)
  const { gl, size } = useThree()
  
  return (
    <EffectComposer ref={composer} enableNormalPass={false}>
      <Bloom 
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        intensity={0.4}
        height={300}
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0005, 0.0005]}
      />
      <Noise
        blendFunction={BlendFunction.MULTIPLY}
        opacity={0.02}
      />
      <Vignette
        darkness={0.5}
        offset={0.1}
      />
    </EffectComposer>
  )
}

export default Effects
