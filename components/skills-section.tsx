"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C#", "TypeScript", "JavaScript", "Python", "SQL"],
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Frontend Technologies",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Backend Technologies",
    skills: [".NET", "Node.js", "Express.js", "ASP.NET Core", "REST APIs"],
    color: "from-green-400 to-green-600",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "Azure SQL"],
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Docker", "Git", "GitHub Actions", "CI/CD"],
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "Tools & Others",
    skills: ["Visual Studio", "VS Code", "Postman", "Figma", "Agile"],
    color: "from-indigo-400 to-indigo-600",
  },
]

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
              >
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-white/10 text-slate-300 border-0 hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
