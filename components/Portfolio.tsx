'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiDatabase, FiServer, FiCloud, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import { useState } from 'react'

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 4
  const projects = [
    {
      title: "Real-time Data Pipeline",
      description: "Built a scalable real-time data processing pipeline using Apache Kafka and Spark Streaming to process 10TB+ of daily transaction data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=500&h=300",
      technologies: ["Python", "Apache Kafka", "Spark", "PostgreSQL", "Docker"],
      category: "Data Engineering",
      icon: FiDatabase,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented microservices architecture serving 1M+ API requests daily with 99.9% uptime using Go and Kubernetes.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=500&h=300",
      technologies: ["Go", "Kubernetes", "Docker", "PostgreSQL", "Redis"],
      category: "Backend Engineering", 
      icon: FiServer,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Cloud Data Warehouse",
      description: "Migrated on-premise data warehouse to AWS, implementing automated ETL pipelines and reducing query response time by 80%.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=500&h=300",
      technologies: ["AWS", "Redshift", "Lambda", "S3", "Airflow"],
      category: "Cloud Engineering",
      icon: FiCloud,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "API Gateway & Auth Service",
      description: "Built centralized API gateway with authentication, rate limiting, and monitoring capabilities handling millions of requests.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?fit=crop&w=500&h=300",
      technologies: ["Node.js", "JWT", "Redis", "MongoDB", "Nginx"],
      category: "Backend Engineering",
      icon: FiServer,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Machine Learning Pipeline",
      description: "Developed end-to-end ML pipeline for fraud detection with automated model training, validation, and deployment.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fit=crop&w=500&h=300",
      technologies: ["Python", "Scikit-learn", "MLflow", "Docker", "Kubernetes"],
      category: "Data Engineering",
      icon: FiDatabase,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Event-Driven Architecture",
      description: "Implemented event-driven system using message queues and event sourcing patterns for high-throughput e-commerce platform.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=500&h=300",
      technologies: ["Go", "RabbitMQ", "PostgreSQL", "Docker", "Grafana"],
      category: "Backend Engineering",
      icon: FiServer,
      links: {
        github: "#",
        demo: "#"
      }
    }
  ]

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = projects.slice(startIndex, endIndex)

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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of data engineering and backend development projects that demonstrate 
            scalability, performance, and clean architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-full p-2 border border-gray-700">
                  <project.icon className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium border border-gray-600 hover:border-gray-500 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-gray-400 text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  <a
                    href={project.links.github}
                    className="flex items-center px-3 py-1.5 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300 text-xs font-medium border border-gray-600 hover:border-gray-500"
                  >
                    <FiGithub className="mr-1 w-3 h-3" />
                    Code
                  </a>
                  <a
                    href={project.links.demo}
                    className="flex items-center px-3 py-1.5 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition-colors duration-300 text-xs font-medium"
                  >
                    <FiExternalLink className="mr-1 w-3 h-3" />
                    Demo
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
            Showing {startIndex + 1}-{Math.min(endIndex, projects.length)} of {projects.length} projects
          </p>
        </motion.div>
      </div>
    </section>
  )
}