'use client'

import { motion } from 'framer-motion'
import { 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGitAlt, 
  FaLinux,
  FaJava,
  FaGoogle
} from 'react-icons/fa'
import { 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiKubernetes, 
  SiApachekafka,
  SiApacheairflow,
  SiTerraform,
  SiGraphql,
  SiElasticsearch,
  SiPrometheus,
  SiGo,
  SiSqlite,
  SiApachespark,
  SiQlik,
  SiJenkins,
  SiLinux,
  SiGithubactions
} from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: FaPython, level: 100, color: "text-yellow-500" },
        { name: "Go", icon: SiGo, level: 80, color: "text-cyan-500" },
        { name: "SQL", icon: SiPostgresql, level: 90, color: "text-blue-600" },
        { name: "Java", icon: FaJava, level: 75, color: "text-blue-500" }
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "SQLite", icon: SiSqlite, level: 90, color: "text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, level: 75, color: "text-green-600" },
        { name: "Redis", icon: SiRedis, level: 88, color: "text-red-500" },
        { name: "Elasticsearch", icon: SiElasticsearch, level: 80, color: "text-yellow-600" }
      ]
    },
    {
      title: "Data Engineering Tools",
      skills: [
        { name: "Kafka", icon: SiApachekafka, level: 92, color: "text-gray-700" },
        { name: "Spark", icon: SiApachespark, level: 75, color: "text-orange-500" },
        { name: "Docker", icon: FaDocker, level: 90, color: "text-blue-500" },
        { name: "Qlik", icon: SiQlik, level: 70, color: "text-green-600" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "GCP", icon: FaGoogle, level: 70, color: "text-blue-500" },
        { name: "Jenkins", icon: SiJenkins, level: 75, color: "text-white-600" },
        { name: "Git", icon: FaGitAlt, level: 95, color: "text-orange-600" },
        { name: "GitHub Actions", icon: SiGithubactions, level: 80, color: "text-orange-600" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Clean background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Simple geometric elements */}
      <div className="absolute top-20 left-1/4 w-40 h-40 border-2 border-blue-200/30 transform rotate-45"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 border-2 border-slate-200/30 transform -rotate-12"></div>
      
      {/* Clean accent lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"></div>
      <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-slate-200/40 to-transparent"></div>
      
      {/* Subtle background shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100/10 filter blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-slate-100/10 filter blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            a comprehensive toolkit for building scalable software systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-blue-600">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className={`w-6 h-6 mr-3 ${skill.color}`} />
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-blue-600 shadow-sm"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Other <span className="text-blue-600">Technologies</span> & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Apache Flink', 'Apache Superset', 'Tableau', 'Power BI', 
              'GitLab CI', 'Grafana', 'ELK Stack',
              'RabbitMQ', 'Apache Iceberg', 'ClickHouse', 'BigQuery', 'Airflow',
              'Ray', 'FastAPI', 'Flask', 'Django', 'Node.js', 'Express.js',
              'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}