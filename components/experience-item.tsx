"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ExperienceItemProps {
  period: string
  title: string
  company: string
  companyUrl: string
  description: string
  technologies: string[]
}

export default function ExperienceItem({
  period,
  title,
  company,
  companyUrl,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <motion.div
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-slate-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span className="text-sm font-mono text-slate-400">{period}</span>
      <h4 className="text-xl font-semibold text-slate-100 mt-1">{title}</h4>
      <a
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mt-1"
      >
        {company}
        <ArrowUpRight className="ml-1 h-3 w-3" />
      </a>
      <p className="text-slate-400 mt-4">{description}</p>
      <ul className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <li key={index} className="text-xs font-mono text-slate-400">
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
