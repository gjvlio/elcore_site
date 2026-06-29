"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

interface NavigationProps {
  scrolled: boolean
}

export function Navigation({ scrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold font-mono"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              elcore.
            </span>
          </button>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
