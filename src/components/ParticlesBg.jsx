import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Points() {
  const points = useRef()
  
  const count = 500
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.y += 0.001
    points.current.rotation.x += 0.0005
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#38BDF8"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

export default function ParticlesBg() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Points />
      </Canvas>
    </div>
  )
}
