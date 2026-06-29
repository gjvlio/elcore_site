"use client"

import { useState } from "react"
import { Play, Loader2 } from "lucide-react"

/**
 * Click-to-load iframe for an embeddable web game (e.g. a HuggingFace Space).
 * Avoids paying the host's cold-start (~30s) on every page visit — the iframe
 * mounts only after the user opts in.
 */
export function GameEmbed({
  src,
  title,
  className = "",
}: {
  src: string
  title: string
  className?: string
}) {
  const [launched, setLaunched] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-border bg-card ${className}`}
    >
      {!launched ? (
        <button
          onClick={() => setLaunched(true)}
          className="group flex h-full w-full flex-col items-center justify-center gap-4 p-12 text-center transition-colors hover:bg-muted/30"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/30 transition-all group-hover:scale-110 group-hover:bg-primary/20">
            <Play className="h-7 w-7 text-primary translate-x-0.5" />
          </span>
          <span className="text-lg font-semibold">Launch {title}</span>
          <span className="max-w-sm text-sm text-muted-foreground">
            Runs live on HuggingFace Spaces. The server sleeps when idle, so first load may take ~30s to wake.
          </span>
        </button>
      ) : (
        <>
          {!loaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-card">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Waking the server… first load can take ~30s.</p>
            </div>
          )}
          <iframe
            src={src}
            title={title}
            onLoad={() => setLoaded(true)}
            allow="fullscreen; autoplay; gamepad"
            className="h-full w-full"
          />
        </>
      )}
    </div>
  )
}
