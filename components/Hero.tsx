'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        

        
        {/* Clean accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-slate-200/30 to-transparent"></div>
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
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Hi, I'm{' '}
              <span className="text-blue-600 font-black">
                Arigo Fahreza
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-600 font-bold mb-4 tracking-wide"
            >
              data engineer • backend dev • ai engineer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              crafting scalable data systems & building robust backend architecture 
              that actually works. passionate about clean code & innovative solutions
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a 
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <FiMail className="mr-2" />
                contact me
              </a>
              
              <a 
                href="/documents/cv/cv-arigo-fahreza.pdf"
                download="CV-Arigo-Fahreza.pdf"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-base font-bold rounded-2xl text-blue-600 hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1"
              >
                <FiDownload className="mr-2" />
                download cv
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
                className="p-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arigofahrezap/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
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
              {/* Profile Image Only */}
              <Image
                src="/images/profile/Coder.png"
                alt="Arigo Fahreza - Data Engineer & Backend Developer"
                width={900}
                height={900}
                className="w-[500px] h-[500px] md:w-[650px] md:h-[650px] lg:w-[700px] lg:h-[700px]"
                priority
              />

              
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-blue-100/10 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}