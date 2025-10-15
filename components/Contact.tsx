'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // WhatsApp number (replace with your actual WhatsApp number)
    const whatsappNumber = "6281237476923" // Your phone number without + and spaces
    
    // Create WhatsApp message
    const message = `Hi Arigo! I'm ${formData.name}

Subject: ${formData.subject}

${formData.message}

Contact Info:
Email: ${formData.email}

Looking forward to hearing from you!`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank')
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "arigoarg@gmail.com",
      link: "mailto:arigoarg@gmail.com"
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+62 812-3747-6923",
      link: "tel:+621234567890"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Jakarta, Indonesia",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-900"
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-600"
    },
    {
      icon: FiInstagram,
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Clean background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Simple geometric elements */}
      <div className="absolute top-20 left-20 w-48 h-48 border border-blue-200/20 transform rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 border border-slate-200/20 transform -rotate-12"></div>
      
      {/* Subtle background shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100/15 rounded-full filter blur-2xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-slate-100/10 rounded-full filter blur-2xl"></div>
      
      {/* Clean accent lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200/30 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-slate-200/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next data engineering or backend project? 
            Let's discuss how we can build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Connect</span>
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 bg-white border border-gray-200 rounded-full hover:border-blue-400/50 hover:shadow-md transition-all duration-300 text-gray-600 hover:text-blue-600 transform hover:scale-110"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send <span className="text-blue-600">Message</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-gray-800 placeholder-gray-500"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <FiSend className="mr-2" />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}