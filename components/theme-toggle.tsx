"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  theme: "dark" | "light"
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggle}
      className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary transition-all group"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary group-hover:text-primary-foreground dark:group-hover:text-white transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-primary group-hover:text-primary-foreground dark:group-hover:text-white transition-colors" />
      )}
    </Button>
  )
}
