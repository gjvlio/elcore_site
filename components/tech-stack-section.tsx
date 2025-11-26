"use client"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si"

const techStacks = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    ],
  },
]

export function TechStackSection() {
  return (
    <section className="relative min-h-screen w-full py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground">Technologies and frameworks I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map((stack) => (
            <div
              key={stack.category}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">{stack.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {stack.technologies.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors duration-200"
                    >
                      <Icon className={`text-3xl ${tech.color}`} />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
