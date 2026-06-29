import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { GameEmbed } from "@/components/game-embed"
import { projects, getProject } from "@/lib/projects"

const playable = projects.filter((p) => p.playUrl)

export function generateStaticParams() {
  return playable.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Play" }
  return { title: `Play ${project.title} - Geuel John Rivera`, description: project.summary }
}

export default async function PlayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project || !project.playUrl) notFound()

  return (
    <main className="flex h-screen flex-col">
      <header className="flex items-center justify-between gap-4 border-b border-border px-6 py-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to project
        </Link>
        <h1 className="truncate text-sm font-semibold">{project.title}</h1>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Open on host
          </a>
        )}
      </header>

      <div className="flex-1 p-4">
        <GameEmbed src={project.playUrl} title={project.title} className="h-full" />
      </div>
    </main>
  )
}
