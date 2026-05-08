import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Essential",
    price: "300",
    desc: "Perfect for single locations",
    features: ["Up to 400 calls/mo", "1 Location", "24/7 Call Answering", "Appointment Booking", "SMS Reminders"],
    popular: false
  },
  {
    name: "Professional",
    price: "400",
    desc: "For busy, growing practices",
    features: ["Up to 1,500 calls/mo", "3 Locations", "Everything in Essential", "Web Chat Widget", "CRM Integration", "Priority Support"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For multi-location networks",
    features: ["Unlimited calls", "Unlimited locations", "Custom AI Voice", "Dedicated Manager", "Full White-label", "Custom API Access"],
    popular: false
  }
]

export default function Pricing() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-blue mb-4 block">Pricing</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-6">Simple Pricing. <br/><span className="text-accent-highlight">No Surprises.</span></h2>
          <p className="text-text-gray max-w-xl mx-auto">All plans include a one-time $1,500 setup fee for custom AI training and integration.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass rounded-[40px] p-10 relative flex flex-col h-full ${
                plan.popular ? 'border-accent-blue bg-accent-blue/5 shadow-[0_0_50px_rgba(10,143,212,0.15)] scale-105 z-10' : 'border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                <p className="text-sm text-text-gray">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black font-heading">{plan.price === 'Custom' ? '' : '$'}</span>
                <span className="text-6xl font-black font-heading">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-text-gray font-medium">/mo</span>}
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-text-white/80">
                    <Check size={18} className="text-accent-blue" />
                    {f}
                  </li>
                ))}
              </ul>

              <a 
                href="/contact" 
                className={`w-full py-5 rounded-2xl font-bold text-center transition-all duration-300 ${
                  plan.popular ? 'bg-accent-blue text-white shadow-lg hover:shadow-accent-blue/30' : 'bg-surface border border-white/10 hover:border-accent-blue/50'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20 text-accent-blue/60 font-bold tracking-wide"
        >
          Most clients recover setup cost in under 30 days.
        </motion.p>
      </div>
    </section>
  )
}
