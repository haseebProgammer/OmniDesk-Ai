import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { blogPosts } from '../data/blogData'

export default function Blog() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="relative h-64 mb-6 overflow-hidden rounded-[32px] glass border border-white/5">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-accent-blue/90 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-xs font-bold text-text-gray uppercase tracking-widest">
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-accent-blue" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={12} className="text-accent-blue" />
                  {post.author}
                </div>
              </div>

              <h3 className="text-2xl font-black font-heading mb-4 group-hover:text-accent-blue transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-text-gray text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-accent-blue font-bold text-sm group-hover:gap-4 transition-all">
                Read Full Article <ArrowRight size={16} />
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

