"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  period: string
  title: string
  company: string
  companyUrl: string
  description: string
  technologies: string[]
  achievements: string[]
}

export default function ExperienceCard({
  period,
  title,
  company,
  companyUrl,
  description,
  technologies,
  achievements,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="mb-4 md:mb-0">
          <span className="text-sm font-mono text-purple-400">{period}</span>
          <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mt-1"
          >
            {company}
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>

      <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
        <ul className="space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary" className="bg-white/10 text-slate-300 border-0">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}
