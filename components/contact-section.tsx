"use client"

import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@elcore.dev" },
]

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-24 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-24 flex-col gap-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group bg-transparent"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-8 w-8 text-primary group-hover:text-inherit group-hover:scale-110 transition-all" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground mb-2">Prefer email?</p>
              <a href="mailto:hello@elcore.dev" className="text-lg font-mono text-primary hover:underline">
                hello@elcore.dev
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary group bg-transparent"
            asChild
          >
            <a href="/about">
              More About Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2025 elcore. Built with Next.js, Three.js, and passion.</p>
        </footer>
      </div>
    </section>
  )
}
