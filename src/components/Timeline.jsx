import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const steps = [
  { title: "We Learn Your Business", desc: "One discovery session. We map everything from your booking policies to your tone of voice." },
  { title: "We Build & Connect", desc: "Custom AI trained on your actual data. Integrated with your calendar and live in 3 weeks." },
  { title: "You Stop Missing Calls", desc: "We monitor every interaction and optimize the system weekly so you can focus on growth." },
]

export default function Timeline() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="how-it-works" className="py-32" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-blue mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading">Simple Path to Scale</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-blue -translate-x-1/2 hidden md:block shadow-[0_0_15px_#0A8FD4]" 
          />

          <div className="flex flex-col gap-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-right w-full">
                  <div className={`md:flex flex-col ${i % 2 !== 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <h3 className="text-3xl font-black font-heading mb-4">{step.title}</h3>
                    <p className="text-text-gray text-lg max-w-md mx-auto md:mx-0">{step.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-surface border-2 border-accent-blue flex items-center justify-center text-2xl font-black font-heading shadow-[0_0_20px_rgba(10,143,212,0.3)]">
                    {i + 1}
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
