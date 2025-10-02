'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background elements - Neon Style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Neon glowing orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
        
        {/* Sharp geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tl from-pink-400/20 to-transparent transform rotate-45 animate-reverse-spin"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
                Arigo Fahreza
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-cyan-300 font-semibold mb-4"
            >
              Data Engineer | Backend Engineer | AI Engineer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Engineer specializing in data architecture, backend performance, and AI automation. Focused on scalability, efficiency, and innovation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-black bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transform hover:scale-105"
              >
                <FiMail className="mr-2" />
                Contact Me
              </a>
              
              <a 
                href="/documents/cv/cv-arigo-fahreza.pdf"
                download="CV-Arigo-Fahreza.pdf"
                className="inline-flex items-center px-6 py-3 border-2 border-cyan-400 text-base font-bold rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] backdrop-blur-sm bg-gray-900/50 transform hover:scale-105"
              >
                <FiDownload className="mr-2" />
                Download CV
              </a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a 
                href="https://github.com/arigofahreza" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-300"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arigofahrezap/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-300"
              >
                <FiLinkedin size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-xl overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/images/profile/IMG_0076.png"
                  alt="Arigo Fahreza - Data Engineer & Backend Engineer"
                  width={700}
                  height={700}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-xl opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-100 rounded-xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}