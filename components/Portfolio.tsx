'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiDatabase, FiServer, FiCloud, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import { useState } from 'react'

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState('All')
  const projectsPerPage = 6
  
  const projects = [
    {
      title: "Social Media Data Pipeline",
      description: "Built a scalable real-time data processing pipeline using Apache Kafka and Java Spring Boot to process Gbs of daily data.",
      image: "/images/projects/data-engineering/sosmed-project.png",
      technologies: ["Python", "Apache Kafka", "Java", "Elasticsearch", "Docker"],
      category: "Data Engineer",
      icon: FiDatabase,
      links: {
        github: "#",
        demo: "https://ima.ebdesk.com/auth/login"
      }
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented microservices architecture serving 1M+ API requests daily with 99.9% uptime using Go and Kubernetes.",
      image: "/images/projects/backend/microservices-architecture.jpg",
      technologies: ["Go", "Kubernetes", "Docker", "PostgreSQL", "Redis"],
      category: "Backend Engineer", 
      icon: FiServer,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "E-commerce Platform",
      description: "Developed complete e-commerce solution with payment integration, inventory management, and analytics dashboard for small business.",
      image: "/images/projects/freelance/ecommerce-platform.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "Freelance",
      icon: FiCloud,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "API Gateway & Auth Service",
      description: "Built centralized API gateway with authentication, rate limiting, and monitoring capabilities handling millions of requests.",
      image: "/images/projects/backend/api-gateway-auth.jpg",
      technologies: ["Node.js", "JWT", "Redis", "MongoDB", "Nginx"],
      category: "Backend Engineer",
      icon: FiServer,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Machine Learning Pipeline",
      description: "Developed end-to-end ML pipeline for fraud detection with automated model training, validation, and deployment.",
      image: "/images/projects/data-engineering/ml-pipeline.jpg",
      technologies: ["Python", "Scikit-learn", "MLflow", "Docker", "Kubernetes"],
      category: "Data Engineer",
      icon: FiDatabase,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Restaurant Management System",
      description: "Custom restaurant POS system with inventory tracking, staff management, and financial reporting for local restaurant chain.",
      image: "/images/projects/freelance/restaurant-pos-system.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind", "PWA"],
      category: "Freelance",
      icon: FiServer,
      links: {
        github: "#",
        demo: "#"
      }
    }
  ]

  // Filter categories
  const categories = ['All', 'Backend Engineer', 'Data Engineer', 'Freelance']
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  
  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, endIndex)
  
  // Handle filter change
  const handleFilterChange = (category: string) => {
    setActiveFilter(category)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      {/* Neon geometric elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/30 transform rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-pink-400/30 transform rotate-12 animate-reverse-spin"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 transform rotate-45"></div>
      <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-gradient-to-l from-pink-500/20 to-purple-500/20 transform -rotate-12"></div>
      
      {/* Glowing lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of data engineering, backend development, and freelance projects that demonstrate 
            scalability, performance, and clean architecture
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                    : 'bg-gray-800/80 text-gray-300 border-2 border-gray-600 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                }`}
              >
                {category}
                <span className="ml-2 text-sm opacity-75">
                  ({category === 'All' ? projects.length : projects.filter(p => p.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image - No cropping */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain bg-gray-900/50 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay with icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-full p-3 border border-gray-700 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <project.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 rounded-full">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 text-gray-400 text-xs font-medium bg-gray-800/50 rounded-lg border border-gray-600">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.links.github && project.links.github !== "#" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2.5 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 text-sm font-medium border border-gray-600 hover:border-gray-500 group/link"
                    >
                      <FiGithub className="mr-2 w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                  )}
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-4 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm font-medium hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group/link ${
                      !project.links.github || project.links.github === "#" ? "flex-1" : "flex-1"
                    }`}
                  >
                    <FiExternalLink className="mr-2 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    {!project.links.github || project.links.github === "#" ? "View Project" : "Demo"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mt-8 space-x-4"
          >
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                currentPage === 1
                  ? 'border-gray-600 text-gray-600 cursor-not-allowed'
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]'
              }`}
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-12 h-12 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                      : 'border-2 border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                currentPage === totalPages
                  ? 'border-gray-600 text-gray-600 cursor-not-allowed'
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]'
              }`}
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-gray-400 text-sm">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
            {activeFilter !== 'All' && (
              <span className="ml-2 text-cyan-400">
                (filtered by {activeFilter})
              </span>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  )
}