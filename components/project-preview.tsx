"use client"

import { useState } from "react"

const PLACEHOLDER = "/projects/placeholder.svg"

/**
 * Browser-chrome framed preview of a project's demo gif/screenshot.
 * Falls back to an animated placeholder until the real asset is dropped in /public.
 */
export function ProjectPreview({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-card shadow-lg shadow-primary/5 ${className}`}
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-muted/40">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="ml-2 truncate text-[11px] font-mono text-muted-foreground">{alt}</span>
      </div>
      {/* media */}
      <div className="aspect-video w-full bg-background">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={failed ? PLACEHOLDER : src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
