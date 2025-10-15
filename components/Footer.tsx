'use client'

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: FiGithub
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: FiLinkedin
    },
    {
      name: 'Email',
      href: 'mailto:arigoarg@gmail.com',
      icon: FiMail
    }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">
                Arigo Fahreza
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Engineer specializing in data architecture, backend performance, and AI automation. Focused on scalability, efficiency, and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 group"
                >
                  <item.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>Jakarta, Indonesia</p>
              <p>arigoarg@gmail.com</p>
              <p>+62 812-3747-6923</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Arigo Fahreza. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 group"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}