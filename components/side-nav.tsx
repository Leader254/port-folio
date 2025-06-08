"use client"

import { motion } from "framer-motion"

interface SideNavProps {
  activeSection: string
}

export default function SideNav({ activeSection }: SideNavProps) {
  const navItems = [
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "certifications", name: "Certifications" },
    { id: "contact", name: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
          >
            <button
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center py-3 ${activeSection === item.id ? "active" : ""}`}
            >
              <span
                className={`nav-indicator mr-4 h-px transition-all ${
                  activeSection === item.id
                    ? "w-16 bg-slate-200"
                    : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === item.id ? "text-slate-200" : "text-slate-500 group-hover:text-slate-200"
                }`}
              >
                {item.name}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}
