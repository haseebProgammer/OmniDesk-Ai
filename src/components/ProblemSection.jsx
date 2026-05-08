import React from 'react'
import { motion } from 'framer-motion'
import { PhoneOff, Clock, DollarSign } from 'lucide-react'

const Counter = ({ value, suffix = "" }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-5xl font-black font-heading text-accent-blue"
    >
      {value}{suffix}
    </motion.span>
  )
}

const ProblemCard = ({ icon: Icon, value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="glass p-10 rounded-3xl relative group overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon size={120} />
      </div>
      
      <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue mb-8 group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>

      <div className="mb-4">
        <Counter value={value} suffix={index === 2 ? "" : (index === 0 ? "%" : "%")} />
        {index === 2 && <span className="text-5xl font-black font-heading text-accent-blue">K+</span>}
      </div>

      <p className="text-lg text-text-white/80 leading-relaxed font-medium">
        {label}
      </p>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
  )
}

export default function ProblemSection() {
  return (
    <section className="py-32 bg-background/50 relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-blue mb-4 block">The Opportunity Cost</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading">Every Missed Call is a <br/><span className="text-accent-highlight">Missed Customer</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProblemCard 
            index={0}
            icon={PhoneOff}
            value="73"
            label="of callers who reach voicemail never call back, moving to the next business in search."
          />
          <ProblemCard 
            index={1}
            icon={Clock}
            value="60"
            label="of front desk time is spent on repetitive questions that could be automated instantly."
          />
          <ProblemCard 
            index={2}
            icon={DollarSign}
            value="47"
            label="average annual revenue lost to missed calls per practice, based on industry averages."
          />
        </div>
      </div>
    </section>
  )
}
