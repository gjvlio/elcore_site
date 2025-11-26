"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { TypingText } from "@/components/typing-text"
import { GeometricShapes } from "@/components/geometric-shapes"
import { MovingGrid } from "@/components/moving-grid"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [shapes, setShapes] = useState<Array<{ id: number; x: number; y: number; type: number; isCapybara?: boolean }>>(
    [],
  )
  const shapeIdRef = useRef(0)
  const shapeQueueRef = useRef<number[]>([])
  const mouseDownTimeRef = useRef<number | null>(null)
  const mouseDownPosRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add("dark")

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".hero-content")) return

    mouseDownTimeRef.current = Date.now()
    mouseDownPosRef.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    }
  }

  const handleCanvasMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".hero-content")) return
    if (!mouseDownTimeRef.current || !mouseDownPosRef.current) return

    const holdDuration = Date.now() - mouseDownTimeRef.current
    const { x, y } = mouseDownPosRef.current

    const newShapeId = shapeIdRef.current++

    if (shapeQueueRef.current.length >= 5) {
      const oldestId = shapeQueueRef.current.shift()
      if (oldestId !== undefined) {
        setShapes((prev) => prev.filter((s) => s.id !== oldestId))
      }
    }

    shapeQueueRef.current.push(newShapeId)

    // Hold for 500ms or more spawns capybara
    const isCapybara = holdDuration >= 500

    setShapes((prev) => [
      ...prev,
      {
        id: newShapeId,
        x,
        y,
        type: Math.floor(Math.random() * 5),
        isCapybara,
      },
    ])

    setTimeout(() => {
      setShapes((prev) => prev.filter((s) => s.id !== newShapeId))
      shapeQueueRef.current = shapeQueueRef.current.filter((id) => id !== newShapeId)
    }, 60000)

    mouseDownTimeRef.current = null
    mouseDownPosRef.current = null
  }

  const handleEasterEgg = (centerX: number, centerY: number) => {
    const burstCount = 8 // Number of capybaras to spawn

    for (let i = 0; i < burstCount; i++) {
      setTimeout(() => {
        const newShapeId = shapeIdRef.current++

        // Remove oldest if queue is full
        if (shapeQueueRef.current.length >= 5) {
          const oldestId = shapeQueueRef.current.shift()
          if (oldestId !== undefined) {
            setShapes((prev) => prev.filter((s) => s.id !== oldestId))
          }
        }

        shapeQueueRef.current.push(newShapeId)

        const angle = (i / burstCount) * Math.PI * 2
        const radius = 0.4 + Math.random() * 0.3
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        setShapes((prev) => [
          ...prev,
          {
            id: newShapeId,
            x,
            y,
            type: Math.floor(Math.random() * 5),
            isCapybara: true,
          },
        ])

        setTimeout(() => {
          setShapes((prev) => prev.filter((s) => s.id !== newShapeId))
          shapeQueueRef.current = shapeQueueRef.current.filter((id) => id !== newShapeId)
        }, 60000)
      }, i * 100) // Stagger the spawning
    }
  }

  return (
    <main className="relative">
      {/* Hero Section with 3D Canvas */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0" onMouseDown={handleCanvasMouseDown} onMouseUp={handleCanvasMouseUp}>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <MovingGrid theme={theme} />
            <GeometricShapes shapes={shapes} theme={theme} />
          </Canvas>
        </div>

        <div
          className={`hero-content absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none ${
            scrolled ? "opacity-0 scale-150" : "opacity-100 scale-100"
          }`}
        >
          <TypingText onEasterEgg={handleEasterEgg} />
        </div>

        {/* Theme Toggle - Fixed Position */}
        <div className="absolute top-8 right-8 z-50">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        {/* Scroll Indicator */}
        {!scrolled && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        )}
      </section>

      {/* Navigation Bar */}
      <Navigation scrolled={scrolled} theme={theme} onToggleTheme={toggleTheme} />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
