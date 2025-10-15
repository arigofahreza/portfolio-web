'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

export default function Experience() {
  const experiences = [
    {
      title: "Data Engineer",
      company: "PT Sibernetik Integra Data",
      location: "Jakarta, Indonesia",
      period: "2023 - Present",
      description: [
        "Designed and implemented real-time data pipelines processing Gigabytes daily using Confluent Kafka and Python",
        "Built AI MCP Chatbot platform integrating NLP models to enhance customer support efficiency",
        "Create Modern Data Warehouse solutions using Iceberg, Confluent Kafka, and Trino",
        "Optimized ETL workflows for various format source with Python, reducing data processing by 40%",
        "Implementing predictive analytics models using pycaret and Fastapi to improve business transaction decision-making"
      ],
      technologies: ["Python", "Confluent Kafka", "Docker", "Sqlite3", "PostgreSQL", "S3", "Trino", "Iceberg"]
    },
    {
      title: "Backend Engineer | Data Engineer",
      company: "PT Indonesia Indicator",
      location: "Jakarta, Indonesia", 
      period: "2021 - 2023",
      description: [
        "Creating and managing Data Pipeline for covid 19 using Python, Kafka with ElasticsearchDB",
        "Developed Web Maps API using MVT technologies and PostGIS DB with framework FastAPI and GIN Golang",
        "Crawl and process online news data for sentiment analysis using Python and Playwright",
        "Crawl Social media data (Twitter, Instagram, Youtube, Tiktok, Facebook) for sentiment analysis using Python",
        "Collaborated with frontend team to deliver full-stack features for web and mobile applications"
      ],
      technologies: ["Go", "Python", "PostgreSQL", "MongoDB", "Docker", "Elasticsearch"]
    },
    {
      title: "Freelancer",
      location: "Jakarta, Indonesia",
      period: "2023 - Present", 
      description: [
        "Crawl and process data from marketplace websites such as Tokopedia, Shopee, Bukalapak using Python and Playwright",
        "Develop ETL data pipeline using Python and PostgreSQL for data analytics",
        "Landing page and dashboard development using Nextjs and TailwindCSS",
        "Creating Customer Service Chatbot using ChatGPT API and FastAPI",
        "Design Dashboard and Data Visualization using Apache Superset and PostgreSQL"
      ],
      technologies: ["Playwright", "Next.js", "MongoDB", "Docker", "Superset"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Clean background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Simple accent shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 transform rotate-45 filter blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100/15 transform -rotate-12 filter blur-xl"></div>
      
      {/* Clean lines */}
      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-slate-200/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            a journey through various roles building scalable systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-300"></div>

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
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-lg z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <FiBriefcase className="text-blue-600 w-6 h-6 mt-1" />
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
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
                      <li key={idx} className="text-gray-600 text-sm leading-relaxed flex">
                        <span className="text-blue-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200"
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