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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(75,85,99,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(75,85,99,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Neon geometric shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-pink-500/10 to-purple-500/10 transform rotate-45 filter blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 transform -rotate-12 filter blur-2xl animate-pulse animation-delay-2000"></div>
      
      {/* Sharp accent lines */}
      <div className="absolute top-20 left-10 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
      <div className="absolute bottom-20 right-10 w-48 h-0.5 bg-gradient-to-r from-transparent via-pink-400/60 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">About</span> Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineer specializing in data architecture, backend performance, and AI automation. 
            Focused on scalability, efficiency, and innovation.
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
            <h3 className="text-2xl font-semibold text-white mb-6">
              Engineering Tomorrow's Data-Driven Solutions
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As a Data Engineer, Backend Engineer, and AI Engineer, I specialize in architecting 
              intelligent data systems that drive business innovation. My expertise spans across 
              data architecture design, high-performance backend development, and AI automation 
              implementation using cutting-edge technologies.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I focus on creating scalable, efficient solutions that transform raw data into 
              actionable insights while ensuring optimal performance and reliability. From 
              designing robust data pipelines to implementing intelligent automation systems, 
              I deliver technology solutions that scale with business growth.
            </p>
            
            {/* Key Skills */}
            <div className="flex flex-wrap gap-3">
              {['Python', 'Go', 'Apache Kafka', 'Docker', 'Kubernetes', 'PubSub', 'PostgreSQL', 'Machine Learning', 'Java', 'TypeScript', 'JavaScript'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/30 rounded-full text-sm font-medium backdrop-blur-sm"
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
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  index === 0 ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20' :
                  index === 1 ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' :
                  index === 2 ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20' :
                  'bg-gradient-to-br from-orange-500/20 to-red-500/20'
                }`}>
                  <item.icon className={`w-6 h-6 ${
                    index === 0 ? 'text-cyan-400' :
                    index === 1 ? 'text-purple-400' :
                    index === 2 ? 'text-green-400' :
                    'text-orange-400'
                  }`} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm">
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