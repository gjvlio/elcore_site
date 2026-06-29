"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary transition-all group"
    >
      {mounted && isDark ? (
        <Sun className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
      )}
    </Button>
  )
}
