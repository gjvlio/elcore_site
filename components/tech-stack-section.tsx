"use client"
import {
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiFigma,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiGit,
  SiGithub,
  SiRender,
  SiHuggingface,
  SiVercel,
  SiStreamlit,
  SiFirebase,
  SiPostman,
} from "react-icons/si"

const techStacks = [
  {
    category: "Languages",
    technologies: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Java", icon: SiOpenjdk, color: "text-[#E76F00]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    ],
  },
  {
    category: "Backend & Databases",
    technologies: [
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
      { name: "Flask", icon: SiFlask, color: "text-foreground" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "SQLite", icon: SiSqlite, color: "text-[#003B57]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    ],
  },
  {
    category: "ML & AI",
    technologies: [
      { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
    ],
  },
  {
    category: "Tools & Deployment",
    technologies: [
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-foreground" },
      { name: "Render", icon: SiRender, color: "text-foreground" },
      { name: "Hugging Face", icon: SiHuggingface, color: "text-[#FFD21E]" },
      { name: "Vercel", icon: SiVercel, color: "text-foreground" },
      { name: "Streamlit", icon: SiStreamlit, color: "text-[#FF4B4B]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
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
