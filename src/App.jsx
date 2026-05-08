import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import Features from './components/Features'
import Timeline from './components/Timeline'
import Industries from './components/Industries'
import Pricing from './components/Pricing'
import FooterCTA from './components/FooterCTA'
import ParticlesBg from './components/ParticlesBg'
import SubPageHero from './components/SubPageHero'
import ContactForm from './components/ContactForm'
import WhatsAppButton from './components/WhatsAppButton'
import Blog from './components/Blog'
import BlogPostDetail from './components/BlogPostDetail'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import { Mail, Phone, MapPin } from 'lucide-react'

const Home = () => (
  <div className="relative w-full">
    <Hero />
    
    {/* Quick Guidance Section */}
    <section className="py-12 bg-accent-blue/5 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center text-white font-black">1</div>
            <p className="font-bold text-sm tracking-wide">Watch the 2-min Demo</p>
          </div>
          <div className="w-12 h-px bg-white/10 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-black border border-accent-blue/30">2</div>
            <p className="font-bold text-sm tracking-wide">Calculate Your ROI</p>
          </div>
          <div className="w-12 h-px bg-white/10 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-black border border-accent-blue/30">3</div>
            <p className="font-bold text-sm tracking-wide">Book Free Setup Call</p>
          </div>
        </div>
      </div>
    </section>

    <ProblemSection />
    <Features />
    <Timeline />
    <Industries />
    <Pricing />
    <FooterCTA />
  </div>
)

const BlogPage = () => (
  <div className="relative w-full">
    <SubPageHero 
      title="Our Blog" 
      subtitle="Industry insights, AI breakthroughs, and business growth strategies."
    />
    <div className="container mx-auto px-6 mb-20">
      <Blog />
    </div>
    <FooterCTA />
  </div>
)

const Services = () => (
  <div className="relative w-full">
    <SubPageHero 
      title="Our Services" 
      subtitle="Comprehensive AI reception solutions tailored for high-growth local businesses."
    />
    <Features />
    <Industries />
    <FooterCTA />
  </div>
)

const HowItWorks = () => (
  <div className="relative w-full">
    <SubPageHero 
      title="How It Works" 
      subtitle="From discovery to go-live in under 21 days. Here is our proven process."
    />
    <Timeline />
    <FooterCTA />
  </div>
)

const PricingPage = () => (
  <div className="relative w-full">
    <SubPageHero 
      title="Pricing Plans" 
      subtitle="Transparent, performance-based pricing designed to scale with your business."
    />
    <Pricing />
    <FooterCTA />
  </div>
)

const About = () => (
  <div className="relative w-full">
    <SubPageHero 
      title="Our Mission" 
      subtitle="We are on a mission to ensure no local business ever loses a customer to a missed call again."
    />
    <section className="py-20 container mx-auto px-6">
      <div className="max-w-4xl mx-auto glass p-12 rounded-[40px] border border-white/5">
        <h3 className="text-3xl font-black font-heading mb-6">Built for Local Business</h3>
        <p className="text-lg text-text-gray leading-relaxed mb-8">
          OmniDesk AI was founded with a simple realization: local businesses are losing billions in revenue every year because they can't answer the phone 24/7. 
          Front desks are overwhelmed, staff is busy with patients, and voicemail is where customers go to die.
        </p>
        <p className="text-lg text-text-gray leading-relaxed">
          We combine cutting-edge Large Language Models with deep industry knowledge to build AI receptionists that don't just "talk"—they solve problems, book appointments, and close deals.
        </p>
      </div>
    </section>
    <FooterCTA />
  </div>
)

const Contact = () => (
  <div className="relative w-full">
    <SubPageHero 
      title="Contact Us" 
      subtitle="Have questions? Our team is ready to help you find the perfect AI solution."
    />
    <div className="container mx-auto px-6 mb-20">
      <ContactForm />
    </div>
    <FooterCTA />
  </div>
)

function App() {
  React.useEffect(() => {
    console.log("OmniDesk AI App Mounted");
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-background selection:bg-accent-blue selection:text-white overflow-x-hidden">
        <Preloader />
        <ScrollProgress />
        <ParticlesBg />
        <Navbar />
        <WhatsAppButton />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer className="relative z-10 py-20 border-t border-accent-blue/10 bg-background/50 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Logo" className="h-8" />
                  <span className="text-xl font-bold font-heading">OmniDesk AI</span>
                </div>
                <div>
                  <p className="text-sm text-text-gray uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-lg font-medium">omnideskai3@gmail.com</p>
                </div>
                <p className="text-sm text-text-gray leading-relaxed">
                  Building the future of local business communication with 24/7 intelligent AI receptionists.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-sm hover:text-accent-blue">LinkedIn</a>
                  <a href="#" className="text-sm hover:text-accent-blue">Twitter</a>
                  <a href="#" className="text-sm hover:text-accent-blue">Instagram</a>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-bold font-heading">Company</h4>
                <ul className="space-y-4">
                  {['About', 'Blog', 'Contact', 'Careers'].map(item => (
                    <li key={item}><a href={`/${item.toLowerCase()}`} className="text-sm text-text-gray hover:text-accent-blue transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-bold font-heading">Solutions</h4>
                <ul className="space-y-4">
                  {['Dental', 'Chiropractic', 'Salons', 'Restaurants'].map(item => (
                    <li key={item}><a href="/services" className="text-sm text-text-gray hover:text-accent-blue transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-bold font-heading">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-text-gray"><Mail size={16} className="text-accent-blue" /> omnideskai3@gmail.com</li>
                  <li className="flex items-center gap-3 text-sm text-text-gray"><Phone size={16} className="text-accent-blue" /> +1 (512) 678-3329</li>
                  <li className="flex items-center gap-3 text-sm text-text-gray"><MapPin size={16} className="text-accent-blue" /> New York, NY</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-gray font-medium">
              <p>&copy; 2026 OmniDesk AI. All rights reserved.</p>
              <div className="flex items-center gap-8">
                <a href="#" className="hover:text-accent-blue">Privacy Policy</a>
                <a href="#" className="hover:text-accent-blue">Terms of Service</a>
                <a href="#" className="hover:text-accent-blue">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App



