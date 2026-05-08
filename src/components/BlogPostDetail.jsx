import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blogData'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'
import SubPageHero from './SubPageHero'

export default function BlogPostDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4">Post Not Found</h2>
          <button onClick={() => navigate('/blog')} className="text-accent-blue font-bold">Back to Blog</button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full pb-32">
      <div className="container mx-auto px-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="mt-40 mb-10 flex items-center gap-2 text-text-gray hover:text-accent-blue transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={16} /> Back to Blog
        </motion.button>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest mb-8 inline-block">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-heading mb-8 leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 mb-12 py-8 border-y border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-text-gray uppercase tracking-widest font-bold">Written By</p>
                  <p className="text-sm font-bold">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-text-gray uppercase tracking-widest font-bold">Published</p>
                  <p className="text-sm font-bold">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-text-gray uppercase tracking-widest font-bold">Read Time</p>
                  <p className="text-sm font-bold">{post.readTime}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-[40px] overflow-hidden mb-16 glass border border-white/5"
          >
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-black prose-headings:font-heading prose-headings:text-white
              prose-p:text-text-gray prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-bold
              prose-li:text-text-gray"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 rounded-[40px] bg-accent-blue/5 border border-accent-blue/20 text-center"
          >
            <h3 className="text-3xl font-black font-heading mb-4">Ready to stop missing calls?</h3>
            <p className="text-text-gray mb-10 max-w-xl mx-auto">See how OmniDesk AI can transform your practice with a 24/7 intelligent receptionist.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/contact" className="btn btn-primary px-10 py-5">Book a Free Call</a>
              <a href="/pricing" className="btn btn-outline px-10 py-5">View Pricing</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
