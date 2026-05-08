import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Services', 'How It Works', 'Pricing', 'Blog', 'About']

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1001] transition-all duration-500 ${
        scrolled || isOpen ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-accent-blue/10' : 'py-8 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group relative z-[1002]">
            <img src="/logo.png" alt="OmniDesk AI" className="h-10 w-auto group-hover:scale-110 transition-transform duration-500" />
            <span className="text-2xl font-extrabold font-heading tracking-tight">OmniDesk AI</span>
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
                  className="text-sm font-medium text-text-white/70 hover:text-accent-blue transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a 
            href="/contact" 
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-accent-blue text-white text-sm font-bold shadow-[0_0_20px_rgba(10,143,212,0.3)] hover:shadow-[0_0_30px_rgba(10,143,212,0.5)] hover:scale-105 transition-all duration-300"
          >
            Book a Free Call
          </a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-[1002] p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-background flex flex-col pt-32 px-10"
          >
            <div className="absolute inset-0 -z-10 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue rounded-full blur-[100px]" />
            </div>

            <ul className="space-y-8 mb-12">
              {navItems.map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <a 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="text-4xl font-black font-heading hover:text-accent-blue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="/contact" 
              className="btn btn-primary w-full py-6 text-xl"
              onClick={() => setIsOpen(false)}
            >
              Book a Free Call
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

