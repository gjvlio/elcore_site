import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About - elcore.",
  description: "About elcore — creative developer.",
}

const timeline = [
  { year: "2023–2027", text: "BS Computer Science, Polytechnic University of the Philippines. DOST Undergraduate Scholar." },
  { year: "Focus", text: "Database design, REST APIs, web frontends, and shipping them to production." },
  { year: "ML & AI", text: "PyTorch reinforcement learning — trained a PPO agent to a 61.5% win rate vs an Expectimax baseline." },
  { year: "Seeking", text: "A software engineering internship." },
]

const certs = [
  "Intermediate Python (Associate), DataCamp (2025)",
  "Intermediate SQL (Associate), DataCamp (2025)",
  "DOST Undergraduate Scholar Awardee (2023)",
  "DataCamp Donates Scholar (2024–Present)",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24 px-6 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <h1 className="reveal reveal-1 text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          About Me
        </h1>

        <p className="reveal reveal-2 text-lg text-muted-foreground leading-relaxed mb-12">
          I&apos;m Geuel John Rivera, a Computer Science student who designs databases, builds REST APIs and web
          frontends, and deploys them to production. I led a 4-person team to ship E-Tala, a live school enrollment
          platform, and trained a PyTorch reinforcement-learning agent from scratch. Based in Valenzuela City, Metro
          Manila.
        </p>

        <div className="space-y-4">
          {timeline.map((item, i) => (
            <Card
              key={item.year}
              className={`reveal reveal-${i + 2} bg-card/50 backdrop-blur-sm border-primary/20`}
            >
              <CardContent className="p-6 flex gap-6">
                <span className="text-primary font-mono font-semibold w-28 shrink-0">{item.year}</span>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="reveal reveal-5 text-2xl font-semibold mt-16 mb-6 text-primary">Certifications &amp; Awards</h2>
        <ul className="reveal reveal-6 space-y-2">
          {certs.map((c) => (
            <li key={c} className="text-muted-foreground flex gap-3">
              <span className="text-primary">▹</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
