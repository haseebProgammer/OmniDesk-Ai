import React, { useRef, useMemo, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei'

function Scene() {
  const meshRef = useRef()
  const ringsRef = useRef()
  
  useFrame((state) => {
    if (!meshRef.current || !ringsRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.2
    meshRef.current.rotation.z = t * 0.1
    ringsRef.current.rotation.x = t * 0.1
    ringsRef.current.rotation.y = t * 0.15
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0A8FD4" />
      <spotLight position={[-10, -10, 10]} angle={0.15} penumbra={1} intensity={2} color="#38BDF8" />

      <group position={[1.5, 0, 0]}>
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh ref={meshRef}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <MeshDistortMaterial
              color="#0A8FD4"
              emissive="#0A8FD4"
              emissiveIntensity={0.5}
              distort={0.4}
              speed={2}
              wireframe
            />
          </mesh>
        </Float>

        <group ref={ringsRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.2, 0.01, 16, 100]} />
            <meshBasicMaterial color="#0A8FD4" transparent opacity={0.3} />
          </mesh>
          <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[2.5, 0.01, 16, 100]} />
            <meshBasicMaterial color="#38BDF8" transparent opacity={0.2} />
          </mesh>
        </group>
      </group>
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas shadow={false} gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-[20]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">AI-Powered Receptionist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black font-heading leading-[1.1] mb-6"
          >
            Your Front Desk.<br />
            <span className="text-gradient">Always On.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-gray max-w-2xl mb-10 leading-relaxed"
          >
            OmniDesk AI builds intelligent AI receptionists for local businesses. 
            Never miss a call, a booking, or a new customer — ever again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 mb-16"
          >
            <a href="/contact" className="btn btn-primary px-10 py-5 text-lg">Book a Free Call</a>
            <a href="#how-it-works" className="px-10 py-5 border border-accent-blue/30 rounded-full text-lg font-bold hover:bg-accent-blue/5 transition-all duration-300">See How It Works</a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: 'Always Available', val: '24/7' },
              { label: 'To Go Live', val: '3 Weeks' },
              { label: 'Starting From', val: '$300/mo' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              >
                <div className="text-3xl font-black font-heading text-accent-blue">{stat.val}</div>
                <div className="text-sm text-text-gray uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-blue to-transparent" />
      </motion.div>
    </section>
  )
}
