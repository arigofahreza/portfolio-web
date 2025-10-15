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
      title: "Online News Data Pipeline",
      description: "Designed and implemented microservices architecture serving 1M+ API requests daily with 99.9% uptime using Go and Kubernetes.",
      image: "/images/projects/data-engineering/news-project.png",
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
      image: "/images/projects/data-engineering/sosmed-project.png",
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
      image: "/images/projects/data-engineering/news-project.png",
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
      image: "/images/projects/data-engineering/sosmed-project.png",
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
      image: "/images/projects/data-engineering/news-project.png",
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
    <section id="portfolio" className="py-16 bg-white relative overflow-hidden">
      {/* Clean background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Simple geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/20 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-100/20 rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-blue-200/30 transform rotate-45"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 border border-slate-200/30 transform -rotate-12"></div>
      
      {/* Clean lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-slate-200/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
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
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-md'
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
              className="bg-white rounded-xl border border-gray-200 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image - No cropping */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay with icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 border border-gray-200 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <project.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium border border-gray-200 hover:border-blue-400/50 hover:text-blue-600 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 text-blue-600 text-xs font-medium bg-blue-50 rounded-lg border border-blue-200">
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
                      className="flex-1 flex items-center justify-center px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 text-sm font-medium border border-gray-200 hover:border-blue-300 group/link"
                    >
                      <FiGithub className="mr-2 w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                  )}
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-4 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-medium hover:shadow-md group/link ${
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
                  ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md'
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
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'border-2 border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:shadow-md'
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
                  ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md'
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
          <p className="text-gray-600 text-sm">
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