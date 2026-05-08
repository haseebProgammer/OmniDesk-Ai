import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar, MessageSquare, Bell, ShieldAlert, BarChart3 } from 'lucide-react'

const features = [
  { icon: Phone, title: "Answers Every Call", desc: "Instant pickup. Every time. No voicemail." },
  { icon: Calendar, title: "Books Appointments", desc: "Syncs your calendar. Books itself." },
  { icon: MessageSquare, title: "Handles FAQs", desc: "Knows your services, hours, prices, insurance." },
  { icon: Bell, title: "Sends Reminders", desc: "SMS reminders cut no-shows by 40%." },
  { icon: ShieldAlert, title: "Routes Emergencies", desc: "Urgent cases reach you immediately." },
  { icon: BarChart3, title: "Gives You Data", desc: "Real-time dashboard of every interaction." },
]

export default function Features() {
  return (
    <section className="py-32 bg-background/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-blue mb-4 block">What We Build</span>
            <h2 className="text-4xl md:text-6xl font-black font-heading">Meet Your New <br/>AI Receptionist</h2>
          </div>
          <p className="text-text-gray max-w-sm mb-2">A professional, 24/7 team member that never calls in sick and always follows your business rules perfectly.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, borderColor: '#0A8FD4' }}
              className="glass p-10 rounded-[32px] border border-white/5 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(10,143,212,0.15)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center text-accent-blue mb-8 group-hover:bg-accent-blue group-hover:text-white transition-all duration-500 shadow-inner">
                <f.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">{f.title}</h3>
              <p className="text-text-gray leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
