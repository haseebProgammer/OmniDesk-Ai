import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Mail, Phone, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/omnideskai3@gmail.com", {
        method: "POST",
        body: formData
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to send message. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-16 rounded-[40px] text-center"
      >
        <div className="w-20 h-20 bg-accent-blue/20 rounded-full flex items-center justify-center text-accent-blue mx-auto mb-8">
          <Send size={40} />
        </div>
        <h3 className="text-4xl font-black font-heading mb-4">Message Sent!</h3>
        <p className="text-text-gray text-lg">Thank you for reaching out. We have received your inquiry at <strong>omnideskai3@gmail.com</strong> and will contact you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="mt-8 text-accent-blue font-bold hover:underline">Send another message</button>
      </motion.div>
    )
  }

  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-8">Let's Build Your <br/><span className="text-gradient">AI Future.</span></h2>
          <p className="text-xl text-text-gray mb-12 leading-relaxed">
            Ready to stop missing calls? Fill out the form and our team will get back to you within 24 hours to schedule a discovery call.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-text-gray uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-lg font-medium">omnideskai3@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-text-gray uppercase tracking-widest font-bold">Call Us</p>
                <p className="text-lg font-medium">+1 (512) 678-3329</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass p-10 rounded-[40px] border border-white/5 shadow-2xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Hidden fields for FormSubmit */}
            <input type="hidden" name="_subject" value="New Lead from OmniDesk AI Website" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-gray ml-2">Full Name</label>
                <input name="name" type="text" required placeholder="John Doe" className="w-full bg-surface/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-blue outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-gray ml-2">Business Name</label>
                <input name="business" type="text" required placeholder="Omni Clinic" className="w-full bg-surface/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-blue outline-none transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-gray ml-2">Email Address</label>
              <input name="email" type="email" required placeholder="john@example.com" className="w-full bg-surface/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-blue outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-text-gray ml-2">Message</label>
              <textarea name="message" rows="4" required placeholder="How can we help you?" className="w-full bg-surface/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-blue outline-none transition-all resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="btn btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>Sending... <Loader2 size={20} className="animate-spin" /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

