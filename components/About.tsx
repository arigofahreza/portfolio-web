'use client'

import { motion } from 'framer-motion'
import { FiDatabase, FiServer, FiCode, FiTrendingUp } from 'react-icons/fi'

export default function About() {
  const highlights = [
    {
      icon: FiDatabase,
      title: "Data Engineering",
      description: "Building scalable data pipelines and ETL processes"
    },
    {
      icon: FiServer,
      title: "Backend Development", 
      description: "Creating robust APIs and microservices architecture"
    },
    {
      icon: FiCode,
      title: "Clean Code",
      description: "Writing maintainable, testable, and efficient code"
    },
    {
      icon: FiTrendingUp,
      title: "Performance",
      description: "Optimizing systems for high throughput and low latency"
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
            Experienced professional with a passion for transforming complex data challenges 
            into elegant, scalable solutions.
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
              Building the Future with Data & Code
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With extensive experience in data engineering and backend development, 
              I specialize in creating efficient data pipelines, robust APIs, and 
              scalable microservices. My expertise spans across modern technologies 
              including Python, Go, SQL databases, and cloud platforms.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and implementing best 
              practices for testing, monitoring, and deployment. Whether it's 
              processing terabytes of data or handling millions of API requests, 
              I focus on building systems that perform reliably at scale.
            </p>
            
            {/* Key Skills */}
            <div className="flex flex-wrap gap-3">
              {['Python', 'Go', 'SQL', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  index === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                  index === 1 ? 'bg-gradient-to-br from-purple-100 to-purple-200' :
                  index === 2 ? 'bg-gradient-to-br from-green-100 to-green-200' :
                  'bg-gradient-to-br from-orange-100 to-orange-200'
                }`}>
                  <item.icon className={`w-6 h-6 ${
                    index === 0 ? 'text-blue-600' :
                    index === 1 ? 'text-purple-600' :
                    index === 2 ? 'text-green-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
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