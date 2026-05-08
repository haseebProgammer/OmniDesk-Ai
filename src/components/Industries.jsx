import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Activity, Sparkles, UtensilsCrossed } from 'lucide-react'

const industries = [
  { 
    name: "Dental Clinics", 
    icon: Stethoscope, 
    features: ["Insurance FAQ", "Emergency Triage", "Recall Booking"],
    image: "/dental.png"
  },
  { 
    name: "Chiropractic", 
    icon: Activity, 
    features: ["Injury Triage", "Lunch-Break Cover", "New Patient Booking"],
    image: "/chiro.png"
  },
  { 
    name: "Salons & Spas", 
    icon: Sparkles, 
    features: ["Stylist Preferences", "Late-Night Booking", "Gift Card Info"],
    image: "/salon.png"
  },
  { 
    name: "Restaurants", 
    icon: UtensilsCrossed, 
    features: ["Reservation Sync", "Menu/Dietary FAQ", "Parking/Waitlist"],
    image: "/restaurant.png"
  },
]

function IndustryCard({ industry, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="relative h-[400px] w-full group [perspective:1000px]"
    >
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden glass flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <img src={industry.image} alt="" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-background/60" />
          </div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue mb-6 mx-auto backdrop-blur-md border border-white/10">
              <industry.icon size={40} />
            </div>
            <h3 className="text-3xl font-black font-heading">{industry.name}</h3>
            <p className="mt-4 text-xs font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-4 py-1 rounded-full inline-block">Hover to explore</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-3xl bg-surface p-8 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-accent-blue/20 shadow-[0_0_30px_rgba(10,143,212,0.1)]">
          <h4 className="text-xl font-bold font-heading mb-6 border-b border-white/10 pb-4">Key Features</h4>
          <ul className="space-y-4">
            {industry.features.map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm font-medium text-text-white/90">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Industries() {
  return (
    <section className="py-32 bg-background/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-blue mb-4 block">Industry Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading">Built for Your Reality</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, i) => (
            <IndustryCard key={i} industry={ind} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
