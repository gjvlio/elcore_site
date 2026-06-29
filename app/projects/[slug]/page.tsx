import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Gamepad2, Maximize2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectPreview } from "@/components/project-preview"
import { GameEmbed } from "@/components/game-embed"
import { projects, getProject } from "@/lib/projects"

const hasLink = (url?: string) => Boolean(url && url !== "#")

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} - Geuel John Rivera`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <p className="reveal reveal-1 text-sm text-primary/80 font-mono mb-2">{project.period}</p>
        <h1 className="reveal reveal-1 text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="reveal reveal-2 text-lg text-muted-foreground mb-8">{project.role}</p>

        <div className="reveal reveal-2 mb-8">
          <ProjectPreview src={project.preview} alt={`${project.title} demo`} />
        </div>

        <p className="reveal reveal-3 text-lg leading-relaxed mb-8">{project.description}</p>

        <div className="reveal reveal-3 flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>

        <h2 className="reveal reveal-4 text-xl font-semibold mb-4 text-primary">Highlights</h2>
        <ul className="reveal reveal-4 space-y-3 mb-10">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="text-primary shrink-0">▹</span>
              {h}
            </li>
          ))}
        </ul>

        {project.playUrl && (
          <div className="reveal reveal-5 mb-10 max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <Gamepad2 className="h-5 w-5" />
                Play it here
              </h2>
              <Link
                href={`/play/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Maximize2 className="h-4 w-4" />
                Fullscreen
              </Link>
            </div>
            <GameEmbed src={project.playUrl} title={project.title} className="h-[70vh] min-h-[560px]" />
          </div>
        )}

        {(hasLink(project.github) || hasLink(project.demo)) && (
          <div className="reveal reveal-6 flex flex-wrap gap-4">
            {project.playUrl && (
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/play/${project.slug}`}>
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Play Fullscreen
                </Link>
              </Button>
            )}
            {hasLink(project.demo) && (
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Site
                </a>
              </Button>
            )}
            {hasLink(project.github) && (
              <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 bg-transparent">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
