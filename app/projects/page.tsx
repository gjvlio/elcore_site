import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { ProjectPreview } from "@/components/project-preview"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects - Geuel John Rivera",
  description: "All projects by Geuel John Rivera — full-stack, databases, and ML/AI.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <div className="reveal reveal-1 mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Everything I&apos;ve been building — from full-stack apps to reinforcement-learning agents.
          </p>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {projects.map((project, i) => (
            <li key={project.slug} className={`reveal reveal-${Math.min(i + 2, 6)}`}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-6 py-6 transition-colors hover:bg-muted/30 -mx-4 px-4 rounded-lg"
              >
                <span className="font-mono text-sm text-muted-foreground w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-primary/80 bg-primary/10 border border-primary/20 rounded px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover-reveal mini preview */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4">
                    <div className="overflow-hidden">
                      <ProjectPreview src={project.preview} alt={`${project.title} demo`} className="max-w-md" />
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground shrink-0 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
