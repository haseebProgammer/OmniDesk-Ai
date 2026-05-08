import React from 'react'
import { motion } from 'framer-motion'

export default function FooterCTA() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-32">
      {/* Aurora Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#020812] overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/20 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-highlight/10 rounded-full blur-[120px]"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-6xl md:text-9xl font-black font-heading leading-[1] mb-12">
            Stop Losing Patients<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-white to-accent-highlight relative">
              To Voicemail.
              <motion.div 
                className="absolute inset-0 bg-accent-blue/20 blur-3xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-text-white/60 max-w-2xl mx-auto mb-16 leading-relaxed">
            Book a free 20-minute call. We'll show you exactly how an AI receptionist would work for your specific business.
          </p>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="/contact" 
              className="group relative px-16 py-8 bg-accent-blue text-white text-2xl font-black font-heading rounded-full shadow-[0_0_50px_rgba(10,143,212,0.4)] hover:shadow-[0_0_80px_rgba(10,143,212,0.6)] hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              Book My Free Call
            </a>
            
            <div className="flex flex-col items-center gap-2">
              <p className="text-text-gray font-medium tracking-wide italic">"No commitment. No sales pressure. Just a real conversation."</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-surface">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-text-gray"><span className="text-white font-bold">150+</span> businesses already live</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
