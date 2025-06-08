"use client"

import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:your.email@example.com", label: "Email" },
    { icon: <FileText className="h-5 w-5" />, href: "/resume.pdf", label: "Resume" },
  ]

  return (
    <div className="flex gap-3">
      {socialLinks.map((link, index) => (
        <Button
          key={index}
          variant="outline"
          size="icon"
          className="border-white/20 text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-400/10"
          asChild
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  )
}
