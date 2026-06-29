import Link from "next/link"
import { ExternalLink, Github, Gamepad2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectPreview } from "@/components/project-preview"
import type { Project } from "@/lib/projects"

const hasLink = (url?: string) => Boolean(url && url !== "#")

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl transition-colors">
          <Link href={`/projects/${project.slug}`} className="hover:text-primary after:absolute after:inset-0">
            {project.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-primary/80 font-mono">{project.role}</p>
        <p className="text-xs text-muted-foreground">{project.period}</p>
        <CardDescription className="text-base leading-relaxed pt-2">{project.description}</CardDescription>

        {/* Hover-reveal demo preview */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:pt-4">
          <div className="overflow-hidden">
            <div className="relative z-10">
              <ProjectPreview src={project.preview} alt={`${project.title} demo`} />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {hasLink(project.github) && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {hasLink(project.demo) && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live Site
            </a>
          )}
          {project.playUrl && (
            <Link
              href={`/play/${project.slug}`}
              className="relative z-10 flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Gamepad2 className="h-4 w-4" />
              Play
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
