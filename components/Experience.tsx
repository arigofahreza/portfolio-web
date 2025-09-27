'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

export default function Experience() {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "Tech Company Inc.",
      location: "Jakarta, Indonesia",
      period: "2022 - Present",
      description: [
        "Designed and implemented real-time data pipelines processing 10TB+ daily using Apache Kafka and Apache Spark",
        "Built scalable microservices architecture serving 1M+ API requests daily with 99.9% uptime",
        "Led migration from monolithic to microservices architecture, reducing deployment time by 70%",
        "Mentored junior developers and established best practices for code quality and testing"
      ],
      technologies: ["Python", "Apache Kafka", "Docker", "Kubernetes", "PostgreSQL", "Redis"]
    },
    {
      title: "Backend Engineer",
      company: "Startup Solutions",
      location: "Jakarta, Indonesia", 
      period: "2020 - 2022",
      description: [
        "Developed RESTful APIs and GraphQL services using Go and Python",
        "Optimized database queries and implemented caching strategies, improving response times by 60%",
        "Built automated testing pipelines and CI/CD workflows using Jenkins and GitLab CI",
        "Collaborated with frontend team to deliver full-stack features for web and mobile applications"
      ],
      technologies: ["Go", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"]
    },
    {
      title: "Junior Data Engineer",
      company: "Data Analytics Corp",
      location: "Jakarta, Indonesia",
      period: "2019 - 2020", 
      description: [
        "Created ETL pipelines for data ingestion from multiple sources (APIs, databases, files)",
        "Developed data quality monitoring and alerting systems",
        "Built interactive dashboards using Tableau and Power BI for business stakeholders",
        "Automated manual data processes, saving 20+ hours per week"
      ],
      technologies: ["Python", "SQL", "Apache Airflow", "Tableau", "Power BI"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Neon accent shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/20 to-transparent transform rotate-45 filter blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/15 to-transparent transform -rotate-12 filter blur-xl"></div>
      
      {/* Sharp diagonal lines */}
      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transform -skew-y-1"></div>
      <div className="absolute bottom-1/4 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent transform skew-y-1"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through various roles building data-driven solutions and scalable systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 border-2 border-gray-900 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <FiBriefcase className="text-blue-600 w-6 h-6 mt-1" />
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-white-600">
                    <div className="flex items-center">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-white-600 text-sm leading-relaxed flex">
                        <span className="text-blue-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}