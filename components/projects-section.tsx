"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application built with Next.js, TypeScript, and PostgreSQL. Features real-time updates and user authentication.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    frameworks: ["TailwindCSS", "React Query", "NextAuth.js"],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Beta",
    description: "Mobile-first e-commerce platform with integrated payment processing and inventory management system.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    frameworks: ["Stripe", "Redux", "Material-UI"],
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Gamma",
    description: "3D data visualization tool using Three.js and WebGL for interactive scientific data exploration.",
    techStack: ["Three.js", "WebGL", "React", "TypeScript"],
    frameworks: ["D3.js", "Framer Motion", "Vite"],
    tags: ["Three.js", "WebGL", "React", "D3.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Delta",
    description: "AI-powered content management system with natural language processing and automated workflows.",
    techStack: ["Python", "FastAPI", "React", "PostgreSQL"],
    frameworks: ["TensorFlow", "Hugging Face", "Docker"],
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Frameworks & Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {project.frameworks.map((framework, fwIndex) => (
                      <Badge
                        key={fwIndex}
                        variant="outline"
                        className="bg-secondary/10 text-secondary border-secondary/20"
                      >
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
            <a href="/projects">
              See More Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
