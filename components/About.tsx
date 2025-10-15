'use client'

import { motion } from 'framer-motion'
import { FiDatabase, FiServer, FiCode, FiTrendingUp } from 'react-icons/fi'

export default function About() {
  const highlights = [
    {
      icon: FiDatabase,
      title: "Data Architecture",
      description: "Designing scalable data systems and intelligent pipelines"
    },
    {
      icon: FiServer,
      title: "Backend Performance", 
      description: "Building high-performance APIs and distributed systems"
    },
    {
      icon: FiCode,
      title: "AI Automation",
      description: "Implementing intelligent automation and machine learning solutions"
    },
    {
      icon: FiTrendingUp,
      title: "Innovation",
      description: "Driving efficiency and scalability through cutting-edge technology"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Clean Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Simple floating shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/20 transform rotate-45 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/15 transform -rotate-12 filter blur-3xl"></div>
      
      {/* Clean accent lines */}
      <div className="absolute top-20 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-48 h-1 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            <span className="text-blue-600">About</span> Me
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            building data systems that scale & crafting robust backend architecture 
            that delivers results. passionate about clean code & innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
              engineering tomorrow's data solutions
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
              As a data engineer who focuses on practical solutions, I specialize in 
              building intelligent data systems that drive real business results. 
              From data architecture to high-performance backends and AI automation - 
              I deliver systems that work reliably at scale.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
              My approach centers on creating scalable solutions that transform complex data into 
              actionable insights while maintaining optimal performance. Whether designing 
              robust pipelines or implementing smart automation systems, 
              I build technology that grows with your business needs.
            </p>
            
            {/* Key Skills */}
            <div className="flex flex-wrap gap-3">
              {['Python', 'Go', 'Apache Kafka', 'Docker', 'Kubernetes', 'PubSub', 'PostgreSQL', 'Machine Learning', 'Java', 'TypeScript', 'JavaScript'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-2xl text-sm font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 hover:bg-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg bg-blue-100">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}