"use client"

import { useState, useEffect } from "react"

interface TypingTextProps {
  onEasterEgg?: (x: number, y: number) => void
}

export function TypingText({ onEasterEgg }: TypingTextProps) {
  const [text, setText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = "elcore."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  const renderText = () => {
    return text.split("").map((char, index) => {
      if (char === "e" && isTypingComplete) {
        return (
          <span
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              const rect = (e.target as HTMLElement).getBoundingClientRect()
              const centerX = rect.left + rect.width / 2
              const centerY = rect.top + rect.height / 2
              // Convert to normalized coordinates (-1 to 1)
              const x = (centerX / window.innerWidth) * 2 - 1
              const y = -(centerY / window.innerHeight) * 2 + 1
              onEasterEgg?.(x, y)
            }}
            className="cursor-pointer pointer-events-auto"
          >
            {char}
          </span>
        )
      }
      return <span key={index}>{char}</span>
    })
  }

  return (
    <div className="text-center z-10 relative px-4">
      <p className="text-2xl md:text-3xl mb-4 font-light tracking-widest uppercase text-sm md:text-base bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
        This is
      </p>
      <h1 className="text-8xl md:text-9xl font-bold font-mono tracking-tight drop-shadow-[0_0_40px_rgba(68,255,136,0.5)]">
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {renderText()}
        </span>
        <span className={`inline-block w-1 h-24 md:h-32 bg-primary ml-2 ${isTypingComplete ? "cursor-blink" : ""}`} />
      </h1>
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="backdrop-blur-md bg-background/40 dark:bg-background/60 rounded-2xl px-6 py-4 border border-primary/30 shadow-[0_0_30px_rgba(68,255,136,0.15)]">
          <p className="text-base md:text-lg font-light leading-relaxed bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Creative developer crafting immersive digital experiences with code, design, and a passion for innovation.
          </p>
        </div>
      </div>
    </div>
  )
}
